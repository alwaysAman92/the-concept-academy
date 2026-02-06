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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
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
                  RK
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Dr. Rajesh Kumar
              </h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Founder & Director
              </p>
              
              <blockquote className="text-primary-foreground/90 leading-relaxed italic">
                "Education is not about memorizing facts—it's about understanding concepts. 
                When students grasp the 'why' behind every formula, they don't just pass exams; 
                they develop a love for learning that lasts a lifetime."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
