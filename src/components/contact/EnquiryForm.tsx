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
      <div 
        className="rounded-xl p-8 shadow-lg text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#FF9B51', opacity: 0.2 }}
        >
          <CheckCircle 
            className="w-8 h-8"
            style={{ color: '#FF9B51', opacity: 1 }}
          />
        </div>
        <h3 
          className="text-xl font-semibold mb-2"
          style={{ color: '#25343F' }}
        >
          Thank You!
        </h3>
        <p 
          className="mb-4"
          style={{ color: '#BFC9D1' }}
        >
          Your enquiry has been submitted successfully. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", course: "", contact: "" });
          }}
          className="border-2 hover:bg-transparent"
          style={{ 
            borderColor: '#FF9B51',
            color: '#FF9B51'
          }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="rounded-xl p-6 md:p-8 shadow-lg"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <h3 
        className="text-xl font-semibold mb-6"
        style={{ color: '#25343F' }}
      >
        Send an Enquiry
      </h3>

      <div className="space-y-5">
        <div>
          <Label 
            htmlFor="name"
            style={{ color: '#25343F' }}
          >
            Student Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter student's full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1.5 border-2 focus:outline-none focus:ring-0"
            style={{ 
              borderColor: '#BFC9D1',
              backgroundColor: '#EAEFEF',
              color: '#25343F'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#FF9B51'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#BFC9D1'}
          />
        </div>

        <div>
          <Label 
            htmlFor="course"
            style={{ color: '#25343F' }}
          >
            Course Interested In
          </Label>
          <Select
            value={formData.course}
            onValueChange={(value) => setFormData({ ...formData, course: value })}
            required
          >
            <SelectTrigger 
              id="course" 
              className="mt-1.5 border-2"
              style={{ 
                borderColor: '#BFC9D1',
                backgroundColor: '#EAEFEF',
                color: '#25343F'
              }}
            >
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
          <Label 
            htmlFor="contact"
            style={{ color: '#25343F' }}
          >
            Phone / Email
          </Label>
          <Input
            id="contact"
            type="text"
            placeholder="Enter phone number or email"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
            className="mt-1.5 border-2 focus:outline-none focus:ring-0"
            style={{ 
              borderColor: '#BFC9D1',
              backgroundColor: '#EAEFEF',
              color: '#25343F'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#FF9B51'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#BFC9D1'}
          />
        </div>

        <Button
          type="submit"
          className="w-full font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          style={{ 
            backgroundColor: '#FF9B51',
            color: '#25343F'
          }}
        >
          Submit Enquiry
        </Button>
      </div>
    </form>
  );
};

export default EnquiryForm;