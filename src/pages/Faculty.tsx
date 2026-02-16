import Layout from "@/components/layout/Layout";
import FacultyCard from "@/components/faculty/FacultyCard";

const facultyData = [
  {
    name: "Dr. Rajesh Kumar",
    initials: "RK",
    qualification: "Ph.D. Physics, IIT Delhi",
    experience: "15+ Years",
    subjects: ["Physics", "JEE Advanced"],
  },
  {
    name: "Prof. Anita Sharma",
    initials: "AS",
    qualification: "M.Sc. Chemistry, BHU",
    experience: "12+ Years",
    subjects: ["Chemistry", "NEET", "JEE"],
  },
  {
    name: "Mr. Vikram Singh",
    initials: "VS",
    qualification: "M.Tech Mathematics, NIT",
    experience: "10+ Years",
    subjects: ["Mathematics", "JEE Main"],
  },
  {
    name: "Dr. Priya Patel",
    initials: "PP",
    qualification: "Ph.D. Botany, DU",
    experience: "14+ Years",
    subjects: ["Biology", "NEET"],
  },
  {
    name: "Mr. Suresh Reddy",
    initials: "SR",
    qualification: "M.Sc. Physics, BITS Pilani",
    experience: "8+ Years",
    subjects: ["Physics", "Foundation"],
  },
  {
    name: "Ms. Kavita Gupta",
    initials: "KG",
    qualification: "M.Sc. Organic Chemistry",
    experience: "11+ Years",
    subjects: ["Chemistry", "Foundation"],
  },
];

const Faculty = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Faculty
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Learn from experienced educators who are passionate about teaching 
            and committed to your success.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facultyData.map((faculty, index) => (
              <div
                key={faculty.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FacultyCard {...faculty} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join Our Teaching Team
          </h2>
          <p className="text-muted-foreground mb-6">
            Are you passionate about education? We're always looking for talented 
            educators to join The Concept Academy.
          </p>
          <a
            href="mailto:careers@conceptacademy.com"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Send your resume to careers@conceptacademy.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
