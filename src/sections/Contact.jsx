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
          <h3 className="head-text">Hablemos</h3>
          <p className="text-lg text-white-600 mt-1">
            Si te interesa conversar sobre desarrollo web, compartir ideas de proyectos
            o conocer más sobre mi crecimiento como desarrollador, no dudes en
            escribirme. Siempre estoy dispuesto a aprender y colaborar en nuevos
            desafíos a medida que desarrollo mis habilidades.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-7 flex flex-col space-y-7"
          >
            <label className="space-y-1">
              <span className="field-label">Nombre completo</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Juan Pérez"
              />
            </label>

            <label className="space-y-1">
              <span className="field-label">Correo electrónico</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="juanperez@gmail.com"
              />
            </label>

            <label className="space-y-1">
              <span className="field-label">Tu mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input"
                placeholder="Comparte tus ideas o consultas..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensaje"}

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