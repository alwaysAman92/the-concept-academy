import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden"
      style={{ backgroundColor: '#EAEFEF' }}
    >
      {/* Background Pattern/Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #FF9B51 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, #25343F 0%, transparent 50%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto container-padding py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ 
                backgroundColor: '#FF9B51',
                color: '#25343F'
              }}
            >
              Classes 9–12 | JEE | NEET
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: '#25343F' }}
            >
              Strong Concepts.
              <br />
              <span style={{ color: '#FF9B51' }}>Strong Results.</span>
            </h1>
            <p 
              className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: '#25343F', opacity: 0.8 }}
            >
              Building tomorrow's achievers with a foundation of deep understanding 
              and conceptual clarity in Science and Mathematics.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{
                backgroundColor: '#FF9B51',
                color: '#25343F'
              }}
            >
              <Link to="/contact" className="flex items-center gap-2">
                Enquire Now
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Founder Section */}
          <div 
            className="backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl animate-fade-in"
            style={{ 
              backgroundColor: '#25343F',
              animationDelay: "0.2s"
            }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Founder Photo Placeholder */}
              <div 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 mb-6 flex items-center justify-center overflow-hidden shadow-lg"
                style={{ 
                  backgroundColor: '#BFC9D1',
                  borderColor: '#FF9B51'
                }}
              >
                <div 
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: '#25343F' }}
                >
                  VK
                </div>
              </div>
              
              <h3 
                className="text-lg font-semibold mb-1"
                style={{ color: '#EAEFEF' }}
              >
                Mr. Vinayak Kumar
              </h3>

              <p 
                className="text-sm mb-6"
                style={{ color: '#BFC9D1' }}
              >
                Founder & Director
              </p>
              
              <div className="border-t pt-6" style={{ borderColor: '#BFC9D1' }}>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: '#EAEFEF' }}
                >
                  At "The Concept Academy", we believe that strong fundamentals are the foundation
                  of academic excellence. Our goal is to nurture clarity of thought, disciplined
                  learning, and confidence in every student—helping them succeed in school as
                  well as competitive exams like JEE and NEET.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;