import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HighlightCards from "@/components/home/HighlightCards";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HighlightCards />
      
      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their academic goals with 
            The Concept Academy. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Enquire Now
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
