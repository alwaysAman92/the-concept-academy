import Layout from "@/components/layout/Layout";
import CourseSection from "@/components/courses/CourseSection";

const coursesData = [
  {
    title: "Foundation Program",
    subtitle: "Classes 9–10",
    description:
      "Build a strong foundation in Science and Mathematics. Our foundation program focuses on developing conceptual understanding and problem-solving skills that will serve as the bedrock for competitive exam preparation.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    details: {
      duration: "1 Academic Year",
      batchSize: "Max 25 Students",
      approach: "Conceptual learning with practical applications",
    },
  },
  {
    title: "Senior Secondary Program",
    subtitle: "Classes 11–12 (PCM/PCB)",
    description:
      "Comprehensive preparation for board exams alongside competitive exam readiness. Choose between PCM (Physics, Chemistry, Mathematics) or PCB (Physics, Chemistry, Biology) streams based on your career goals.",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    details: {
      duration: "2 Academic Years",
      batchSize: "Max 20 Students",
      approach: "Board + competitive exam integrated curriculum",
    },
  },
  {
    title: "JEE Preparation",
    subtitle: "JEE Main & Advanced",
    description:
      "Rigorous coaching for India's most competitive engineering entrance exam. Our JEE program covers the complete syllabus with emphasis on problem-solving speed, accuracy, and advanced concepts.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    details: {
      duration: "1–2 Years (based on batch)",
      batchSize: "Max 30 Students",
      approach: "Intensive problem practice with regular mock tests",
    },
  },
  {
    title: "NEET Preparation",
    subtitle: "NEET UG",
    description:
      "Focused coaching for aspiring medical professionals. Our NEET program provides thorough coverage of Physics, Chemistry, and Biology with special emphasis on NCERT concepts and application-based questions.",
    subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
    details: {
      duration: "1–2 Years (based on batch)",
      batchSize: "Max 30 Students",
      approach: "NCERT-focused with extensive MCQ practice",
    },
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Header */}
      <section 
        className="py-16 md:py-20"
        style={{ backgroundColor: '#25343F' }}
      >
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#EAEFEF' }}
          >
            Our Courses
          </h1>
          <p 
            className="max-w-2xl mx-auto"
            style={{ color: '#BFC9D1' }}
          >
            Comprehensive programs designed to help students excel in academics 
            and competitive exams through concept-based learning.
          </p>
        </div>
      </section>

      {/* Course Sections */}
      <section 
        className="section-padding"
        style={{ backgroundColor: '#EAEFEF' }}
      >
        <div className="max-w-7xl mx-auto container-padding space-y-16 md:space-y-24">
          {coursesData.map((course, index) => (
            <div
              key={course.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseSection {...course} isReversed={index % 2 === 1} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;