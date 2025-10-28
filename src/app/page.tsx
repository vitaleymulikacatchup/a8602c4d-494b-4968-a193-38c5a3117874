"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Code2, Settings, Globe, Smartphone, Users, MessageCircle, Mail } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sargas"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Innovative IT Solutions"
          description="We build cutting-edge software solutions that drive digital transformation for modern businesses"
          tag="IT Development"
          tagIcon={Code2}
          buttons={[
            { text: "Start Project", href: "contact" },
            { text: "Our Services", href: "services" }
          ]}
          imageSrc="https://images.pexels.com/photos/6804076/pexels-photo-6804076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern IT development workspace"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Sargas"
          description={[
            "We are a dedicated team of IT professionals committed to delivering exceptional software solutions.",
            "Our expertise spans web development, mobile applications, and strategic technology consulting to help businesses thrive in the digital age."
          ]}
          buttons={[
            { text: "Learn More", href: "services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive IT solutions tailored to your business needs"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Web Development",
              description: "Custom web applications built with modern technologies and best practices",
              icon: Globe,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Mobile Development",
              description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
              icon: Smartphone,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "IT Consulting",
              description: "Strategic technology guidance to optimize your business processes and infrastructure",
              icon: Users,
              button: { text: "Learn More", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced professionals dedicated to your success"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Lead Developer",
              imageSrc: "https://images.pexels.com/photos/30134595/pexels-photo-30134595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Chen - Lead Developer"
            },
            {
              id: "2",
              name: "Sarah Kim",
              role: "Full Stack Developer",
              imageSrc: "https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Kim - Full Stack Developer"
            },
            {
              id: "3",
              name: "Mike Johnson",
              role: "UI/UX Designer",
              imageSrc: "https://images.pexels.com/photos/8507583/pexels-photo-8507583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Johnson - UI/UX Designer"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Success Stories"
          description="What our clients say about working with Sargas"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "CTO at TechStart",
              testimonial: "Sargas delivered a robust web application that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Walsh"
            },
            {
              id: "2",
              name: "Robert Martinez",
              role: "CEO at InnovateLab",
              testimonial: "The mobile app they developed for us has significantly improved our customer engagement. Professional team with excellent communication.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Martinez"
            },
            {
              id: "3",
              name: "Lisa Anderson",
              role: "Operations Manager at DataFlow",
              testimonial: "Their IT consulting services helped us streamline our processes and reduce costs. Highly recommend their expertise.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Anderson"
            },
            {
              id: "4",
              name: "David Kumar",
              role: "Founder at StartupX",
              testimonial: "From concept to deployment, Sargas provided exceptional service. They truly understand modern business needs.",
              imageSrc: "https://images.pexels.com/photos/5989942/pexels-photo-5989942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kumar"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact"
          tagIcon={Mail}
          title="Ready to Start Your Project?"
          description="Get in touch with our team to discuss your IT development needs and receive a customized solution proposal."
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to our terms and privacy policy. We'll contact you within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Sargas"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Services", href: "services" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}