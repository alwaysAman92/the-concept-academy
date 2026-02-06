import { Users, Trophy, GraduationCap, Heart } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Learn from educators with 10+ years of teaching experience and proven track records.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Consistently high success rates in board exams, JEE & NEET with top rankers every year.",
  },
  {
    icon: Users,
    title: "Small Batches",
    description: "Limited batch sizes ensure personalized attention and doubt-clearing for every student.",
  },
  {
    icon: Heart,
    title: "Personal Mentoring",
    description: "One-on-one guidance to help students overcome challenges and reach their full potential.",
  },
];

const HighlightCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing an exceptional learning experience that 
            goes beyond textbooks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-xl p-6 md:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;
