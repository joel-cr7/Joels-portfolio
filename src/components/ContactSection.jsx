import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false); // for disabling send button during sending a mail

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // keep track of form data to reset after sending

  // EmailJS variables
  const SERVICE_ID = "service_qnr8a8a";
  const TEMPLATE_ID = "template_hmwx32k";
  const PUBLIC_KEY = "TzgzGNmuZd9AmTldV";

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        toast("Thank you for your message. I'll get back to you soon.");

        // reset form data to empty
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setIsSubmitting(false);
      })
      .catch(() => {
        toast("Oops! Something went wrong");
        setIsSubmitting(false);
      });
    
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <ToastContainer />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center  mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 m-auto w-60">
              <div className="flex justify-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sayhijoel@gmail.com"
                    className=" hover:text-primary transition-colors"
                  >
                    sayhijoel@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+918850029735"
                    className=" hover:text-primary transition-colors"
                  >
                    +91 8850029735
                  </a>
                </div>
              </div>
              <div className="flex justify-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium"> Location</h4>
                  <a className=" hover:text-primary transition-colors">
                    Mumbai, India.
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-15">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/joel-miranda5/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
