import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";


const courses = [
  "Class 9 (Foundation)",
  "Class 10 (Foundation)",
  "Class 11 (PCM)",
  "Class 11 (PCB)",
  "Class 12 (PCM)",
  "Class 12 (PCB)",
  "JEE Main",
  "JEE Advanced",
  "NEET UG",
];

const EnquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    contact: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase.from("enquiries").insert([
    {
      name: formData.name,
      course: formData.course,
      phone: formData.contact,
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    alert("Something went wrong. Please try again.");
  } else {
    setIsSubmitted(true);
  }
};


  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 card-shadow text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-4">
          Your enquiry has been submitted successfully. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", course: "", contact: "" });
          }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 card-shadow">
      <h3 className="text-xl font-semibold text-foreground mb-6">
        Send an Enquiry
      </h3>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-foreground">
            Student Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter student's full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="course" className="text-foreground">
            Course Interested In
          </Label>
          <Select
            value={formData.course}
            onValueChange={(value) => setFormData({ ...formData, course: value })}
            required
          >
            <SelectTrigger id="course" className="mt-1.5">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="contact" className="text-foreground">
            Phone / Email
          </Label>
          <Input
            id="contact"
            type="text"
            placeholder="Enter phone number or email"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
            className="mt-1.5"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Submit Enquiry
        </Button>
      </div>
    </form>
  );
};

export default EnquiryForm;
