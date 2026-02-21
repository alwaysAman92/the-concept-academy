import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Star } from "lucide-react";

const SubmitTestimonial = () => {
  const [formData, setFormData] = useState({
    student_name: "",
    class: "",
    message: "",
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("testimonials").insert([
      {
        ...formData,
        is_featured: false, // 🔒 Pending approval
      },
    ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setFormData({
        student_name: "",
        class: "",
        message: "",
        rating: 5,
      });
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-card p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Thank You!
          </h2>
          <p className="text-muted-foreground">
            Your testimonial has been submitted and is pending approval.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-card p-8 rounded-xl shadow-lg max-w-lg w-full space-y-5"
      >
        <h2 className="text-2xl font-bold text-foreground">
          Submit Your Testimonial
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={formData.student_name}
          onChange={(e) =>
            setFormData({ ...formData, student_name: e.target.value })
          }
          className="w-full p-3 rounded-lg border border-border bg-background"
          required
        />

        <input
          type="text"
          placeholder="Class (e.g. Class 12 PCM)"
          value={formData.class}
          onChange={(e) =>
            setFormData({ ...formData, class: e.target.value })
          }
          className="w-full p-3 rounded-lg border border-border bg-background"
          required
        />

        <textarea
          placeholder="Write your experience..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-3 rounded-lg border border-border bg-background"
          rows={4}
          required
        />

        {/* Rating */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <Star
              key={num}
              size={24}
              onClick={() =>
                setFormData({ ...formData, rating: num })
              }
              className={`cursor-pointer ${
                num <= formData.rating
                  ? "text-primary fill-primary"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
        >
          {loading ? "Submitting..." : "Submit Testimonial"}
        </button>
      </form>
    </div>
  );
};

export default SubmitTestimonial;