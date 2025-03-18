"use client";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  interface EmailFormElements extends HTMLFormControlsCollection {
    user_name: HTMLInputElement;
    user_email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
          form.current!.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email!");
        }
      );
  };

  return (
    <>
      <Head>
        <title>Contact Us - Meal Website</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or questions about our meals."
        />
      </Head>

      <main className="bg-secondary-mode-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold text-text-color mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-text-color max-w-2xl mx-auto">
              We&apos;re here to help! Reach out to us with any questions or
              feedback about our services.
            </p>
          </section>

          {/* Main Card Container */}
          <Card className="shadow-xl rounded-xl overflow-hidden mb-12">
            <CardHeader className="bg-primary/10 border-b">
              <CardTitle className="text-2xl text-center text-text-color">
                Get In Touch
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                {/* Contact Information Section */}
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-text-color mb-6">
                    Our Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-color">
                          Our Location
                        </h3>
                        <p className="text-text-color mt-1">
                          123 Meal Avenue, Food City, USA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-color">
                          Phone Number
                        </h3>
                        <p className="text-text-color mt-1">
                          +1 (123) 456-7890
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-color">
                          Email Address
                        </h3>
                        <p className="text-text-color mt-1">
                          contact@chefFood.com
                        </p>
                      </div>
                    </div>

                    <div className="pt-6">
                      <h3 className="font-medium text-text-color mb-3">
                        Working Hours
                      </h3>
                      <p className="text-text-color">
                        Monday - Friday: 9:00 AM - 10:00 PM
                      </p>
                      <p className="text-text-color">
                        Weekends: 10:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form Section */}
                <div className="p-8">
                  <h2 className="text-xl font-semibold text-text-color mb-6">
                    Send Us a Message
                  </h2>

                  <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-color mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="w-full px-4 py-2 border border-accent-foreground rounded-md"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-color mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full px-4 py-2 border border-accent-foreground rounded-md"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-color mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-accent-foreground rounded-md"
                        placeholder="How can we assist you?"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-button-primary hover:bg-button-primary-hover text-base py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-text-color mb-4">
              Find Us on the Map
            </h2>
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.3196585730576!2d-77.03687074938806!3d38.90732114873834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7a0bbbd91b5%3A0x255ad4dcd8f8bb35!2sWhite%20House!5e0!3m2!1sen!2sus!4v1669245674357!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
