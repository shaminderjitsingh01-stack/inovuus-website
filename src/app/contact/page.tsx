"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Container, Button, Card } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you! We'll be in touch shortly.");
  };

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-brand-text text-lg max-w-2xl mx-auto">
            Ready to secure your data's future? Let's discuss how iNovuus can help
            protect your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Office Location</h3>
                  <p className="text-brand-text text-sm">
                    Singapore Business Hub<br />
                    Singapore 123456
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-brand-text text-sm">+65 6123 4567</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg">
                  <Mail className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-brand-text text-sm">contact@inovuus.com</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg">
                  <Clock className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-brand-text text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-text-light text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark border border-brand-slate/50 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-text-light text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark border border-brand-slate/50 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-text-light text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark border border-brand-slate/50 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="Company Pte Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-text-light text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark border border-brand-slate/50 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="+65 9123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-text-light text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-slate/50 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your data protection needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
