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
    <section 
      className="section-padding"
      style={{ backgroundColor: '#25343F' }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#EAEFEF' }}
          >
            Why Choose Us?
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg"
            style={{ color: '#BFC9D1' }}
          >
            We're committed to providing an exceptional learning experience that 
            goes beyond textbooks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ 
                backgroundColor: '#EAEFEF',
                animationDelay: `${index * 0.1}s`,
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF9B51';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ backgroundColor: '#FF9B51' }}
              >
                <item.icon 
                  className="w-7 h-7"
                  style={{ color: '#25343F' }}
                />
              </div>
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: '#25343F' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#25343F', opacity: 0.75 }}
              >
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