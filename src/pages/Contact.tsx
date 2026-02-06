import Layout from "@/components/layout/Layout";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in learning more about The Concept Academy courses."
  );

  return (
    <Layout>
      {/* Header */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us and 
            we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Visit us at our center, call us, or send an enquiry. We're here to 
                help you make the right decision for your child's education.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Education Lane,<br />
                      Knowledge City, State - 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@conceptacademy.com"
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      info@conceptacademy.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white w-full sm:w-auto"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </Button>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">
                      Google Maps embed will appear here
                    </p>
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      (Add your Google Maps embed code)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
