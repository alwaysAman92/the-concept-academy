import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-primary-foreground">
      <div className="max-w-7xl mx-auto container-padding py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-primary-foreground/10 rounded-full text-sm font-medium mb-6">
              Classes 9–12 | JEE | NEET
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Strong Concepts.
              <br />
              <span className="text-accent">Strong Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Building tomorrow's achievers with a foundation of deep understanding 
              and conceptual clarity in Science and Mathematics.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-slate-900 font-medium shadow-md hover:bg-slate-100 hover:shadow-lg transition"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Enquire Now
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Founder Section */}
          <div 
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Founder Photo Placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary-foreground/20 border-4 border-primary-foreground/30 mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground/40">
                  VK
                </div>
              </div>
              
              <h3 className="text-white text-lg font-semibold">
                  Mr. Vinayak Kumar
                  </h3>

              <p className="text-sm text-primary-foreground/70 mb-4">
                Founder & Director
              </p>
              
              <section className="py-20 px-6 text-center">
                <p className="mt-4 text-gray-100 max-w-xl">
                  At "The Concept Academy", we believe that strong fundamentals are the foundation
                  of academic excellence. Our goal is to nurture clarity of thought, disciplined
                  learning, and confidence in every student—helping them succeed in school as
                  well as competitive exams like JEE and NEET.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
