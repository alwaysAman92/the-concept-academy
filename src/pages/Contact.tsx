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
      <section 
        className="py-16 md:py-20"
        style={{ backgroundColor: '#25343F' }}
      >
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#EAEFEF' }}
          >
            Contact Us
          </h1>
          <p 
            className="max-w-2xl mx-auto"
            style={{ color: '#BFC9D1' }}
          >
            Have questions? We'd love to hear from you. Reach out to us and 
            we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Content */}
      <section 
        className="section-padding"
        style={{ backgroundColor: '#EAEFEF' }}
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#25343F' }}
              >
                Get in Touch
              </h2>
              <p 
                className="mb-8"
                style={{ color: '#25343F', opacity: 0.75 }}
              >
                Visit us at our center, call us, or send an enquiry. We're here to 
                help you make the right decision for your child's education.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FF9B51' }}
                  >
                    <MapPin 
                      className="w-6 h-6"
                      style={{ color: '#25343F' }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1"
                      style={{ color: '#25343F' }}
                    >
                      Address
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: '#BFC9D1' }}
                    >
                      123 Education Lane,<br />
                      Knowledge City, State - 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FF9B51' }}
                  >
                    <Phone 
                      className="w-6 h-6"
                      style={{ color: '#25343F' }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1"
                      style={{ color: '#25343F' }}
                    >
                      Phone
                    </h3>
                    <a
                      href="tel:+919876543210"
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: '#BFC9D1' }}
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FF9B51' }}
                  >
                    <Mail 
                      className="w-6 h-6"
                      style={{ color: '#25343F' }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1"
                      style={{ color: '#25343F' }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:info@conceptacademy.com"
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: '#BFC9D1' }}
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
                className="hover:opacity-90 text-white w-full sm:w-auto shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: '#25D366' }}
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
              <div 
                className="mt-8 rounded-xl overflow-hidden border"
                style={{ borderColor: '#BFC9D1' }}
              >
                <div 
                  className="aspect-video flex items-center justify-center"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="text-center p-8">
                    <MapPin 
                      className="w-12 h-12 mx-auto mb-3"
                      style={{ color: '#BFC9D1', opacity: 0.4 }}
                    />
                    <p 
                      className="text-sm"
                      style={{ color: '#BFC9D1' }}
                    >
                      Google Maps embed will appear here
                    </p>
                    <p 
                      className="text-xs mt-1"
                      style={{ color: '#BFC9D1', opacity: 0.6 }}
                    >
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