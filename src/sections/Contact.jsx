// At the top
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vyxc798",
        "template_1iac9xt",
        form.current,
        "yr6rdZXgo0ObglP6t"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white
">Contact Me</h2>
        <div className="bg-white rounded-xl shadow-lg border border-gray-300 p-6">


        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name" // ✅ must match {{name}} in your template
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email" // ✅ must match {{email}} in your template
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            name="title" // ✅ optional: matches {{title}} used in your subject
            placeholder="Subject"
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            name="message" // ✅ must match {{message}} in your template
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
