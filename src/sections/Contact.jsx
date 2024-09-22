import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_2yk8ajm

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_2yk8ajm",
        "template_14uol09",
        {
          from_name: form.name,
          to_name: "Leandro",
          from_email: form.email,
          to_email: "landergarro7@gmail.com",
          message: form.message,
        },
        "wYtJhShJo4RVkq_wl"
      );
      setLoading(false);
      alert("Your message has been sent!");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's Connect</h3>
          <p className="text-lg text-white-600 mt-3">
            If you're interested in discussing web development, sharing project
            ideas, or exploring how I'm growing as a developer, feel free to
            reach out. I'm always eager to learn and collaborate on new
            challenges as I build my skills.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Leo Lander"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="leolander@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;