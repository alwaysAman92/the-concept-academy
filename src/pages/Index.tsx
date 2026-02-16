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
      <section 
        className="section-padding"
        style={{ backgroundColor: '#25343F' }}
      >
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#EAEFEF' }}
          >
            Ready to Start Your Journey?
          </h2>
          <p 
            className="mb-8 max-w-2xl mx-auto"
            style={{ color: '#BFC9D1' }}
          >
            Join thousands of students who have achieved their academic goals with 
            The Concept Academy. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 font-semibold hover:bg-transparent transition-all hover:scale-105"
              style={{ 
                borderColor: '#BFC9D1',
                color: '#EAEFEF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF9B51';
                e.currentTarget.style.color = '#FF9B51';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#BFC9D1';
                e.currentTarget.style.color = '#EAEFEF';
              }}
            >
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;