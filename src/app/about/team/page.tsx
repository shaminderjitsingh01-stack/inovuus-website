"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Mail } from "lucide-react";
import { Container, SectionHeading, Card } from "@/components/ui";

const teamMembers = [
  {
    name: "David Tan",
    role: "Chief Executive Officer",
    bio: "With over 25 years in enterprise IT, David founded iNovuus Technologies to bring world-class data protection solutions to Singapore and the Asia Pacific region.",
    linkedin: "https://linkedin.com/in/",
    email: "david.tan@inovuus.com",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Sarah leads our technical strategy, bringing 18 years of experience in cloud infrastructure and cybersecurity to drive innovation across all our solutions.",
    linkedin: "https://linkedin.com/in/",
    email: "sarah.chen@inovuus.com",
  },
  {
    name: "Michael Lim",
    role: "Head of Solutions",
    bio: "Michael oversees solution architecture and client implementations, ensuring every deployment meets the highest standards of performance and reliability.",
    linkedin: "https://linkedin.com/in/",
    email: "michael.lim@inovuus.com",
  },
  {
    name: "Jennifer Wong",
    role: "Senior Solutions Engineer",
    bio: "Jennifer specializes in designing tailored data protection strategies for enterprise clients, with deep expertise in Druva and cloud-native technologies.",
    linkedin: "https://linkedin.com/in/",
    email: "jennifer.wong@inovuus.com",
  },
  {
    name: "Alex Ng",
    role: "Head of Cyber Resilience",
    bio: "Alex leads our cyber resilience practice, helping organizations prepare for, respond to, and recover from ransomware and other cyber threats.",
    linkedin: "https://linkedin.com/in/",
    email: "alex.ng@inovuus.com",
  },
  {
    name: "Rachel Koh",
    role: "Client Success Manager",
    bio: "Rachel ensures our clients achieve maximum value from their data protection investments through proactive engagement and strategic guidance.",
    linkedin: "https://linkedin.com/in/",
    email: "rachel.koh@inovuus.com",
  },
  {
    name: "James Lee",
    role: "Senior Systems Engineer",
    bio: "James brings 12 years of infrastructure expertise, specializing in data center solutions and enterprise backup implementations.",
    linkedin: "https://linkedin.com/in/",
    email: "james.lee@inovuus.com",
  },
  {
    name: "Michelle Ong",
    role: "Compliance Specialist",
    bio: "Michelle guides clients through complex regulatory requirements including PDPA, MAS, and industry-specific compliance frameworks.",
    linkedin: "https://linkedin.com/in/",
    email: "michelle.ong@inovuus.com",
  },
];

export default function TeamPage() {
  return (
    <section className="py-20">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-full mb-4">
            <Users className="h-8 w-8 text-brand-accent" />
          </div>
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
            Meet the Experts
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-brand-text text-lg max-w-3xl mx-auto">
            Behind every successful data protection strategy is a team of dedicated experts.
            Meet the professionals who make iNovuus Technologies Singapore's trusted partner
            in cyber resilience and data protection.
          </p>
        </motion.div>

        {/* Team Grid */}
        <SectionHeading
          label="Leadership & Experts"
          title="The People Behind Your Protection"
          description="Our team combines decades of experience in data protection, cloud infrastructure, and cybersecurity."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg hover:shadow-brand-accent/10 transition-all duration-300">
                {/* Photo Placeholder */}
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-brand-dark to-brand-navy rounded-lg flex items-center justify-center border border-brand-slate/30 group-hover:border-brand-accent/50 transition-colors duration-300">
                    <span className="text-4xl font-bold text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-300">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-brand-accent text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-brand-text text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-brand-dark rounded-lg border border-brand-slate/30 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 group/link"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-brand-slate group-hover/link:text-brand-accent transition-colors duration-300" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-brand-dark rounded-lg border border-brand-slate/30 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 group/link"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4 text-brand-slate group-hover/link:text-brand-accent transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-brand-accent/10 via-brand-navy to-brand-accent/10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-brand-text-light text-lg max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals who share our passion for
              data protection and cyber resilience. If you're ready to make an impact,
              we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
