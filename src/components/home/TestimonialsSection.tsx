import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

type Testimonial = {
  id: string;
  student_name: string;
  class: string;
  message: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
};

const avatarColors = [
  "from-primary to-orange-400",
  "from-orange-500 to-red-500",
  "from-primary to-yellow-500",
  "from-orange-600 to-primary",
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setTestimonials(data);
      }

      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-background text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </section>
    );
  }

  if (!loading && testimonials.length === 0) {
    return (
      <section className="section-padding bg-background text-center">
        <p className="text-muted-foreground">
          No testimonials available yet.
        </p>
      </section>
    );
  }

  return (
    <section className="section-padding relative overflow-hidden bg-[#0B192C]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-orange-500/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Student Stories
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>

          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Real feedback from students of The Concept Academy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const initials = testimonial.student_name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            const colorClass =
              avatarColors[index % avatarColors.length];

            return (
              <div
                key={testimonial.id}
                className="group relative rounded-2xl p-px overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-orange-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-2xl bg-[#132440] p-6 h-full flex flex-col">
                  {/* Top */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Quote size={16} className="text-primary" />
                    </div>

                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={
                            i < testimonial.rating
                              ? "text-primary fill-primary"
                              : "text-white/10 fill-white/10"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">
                    "{testimonial.message}"
                  </p>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

                  {/* Student */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {initials}
                    </div>

                    <div>
                      <p className="font-semibold text-white text-sm leading-tight">
                        {testimonial.student_name}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">
                        {testimonial.class}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition text-sm font-medium"
          >
            View All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
