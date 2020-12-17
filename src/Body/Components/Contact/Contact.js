import React, { useState } from "react";
import "./contact.scss";
import at from "../../../assets/icons/at.png";
import card from "../../../assets/icons/card.png";
import phone from "../../../assets/icons/phone.png";
import globe from "../../../assets/icons/globe.png";
import keyboard from "../../../assets/icons/keyboard.png";
import emailjs from "emailjs-com";

function Contact() {
  const [datos, setDatos] = useState({});

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    emailjs
      .send("gmail", "template_dwre2iq", datos, "user_iCSmPPl6qaw21oiWvx8hX")
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const isEnabled =
    datos.name && datos.phone && datos.email && datos.nac && datos.message;

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header bg-primary fz30 text-white" style={{lineHeight:0.5}} >Contacto</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6 mb-3">
              <div className="my-auto icon">
                <img src={card} alt="card" className="card" />
              </div>
              <div className="my-auto ml-3">
                <input
                  type="text"
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Nombre y Apellido"
                />
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="my-auto icon">
                <img src={phone} alt="phone" className="phone" />
              </div>
              <div className="my-auto ml-3">
                <input
                  type="tel"
                  onChange={handleInputChange}
                  name="phone"
                  placeholder="Teléfono"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <div className="my-auto icon">
                <img src={at} alt="at" className="at" />
              </div>
              <div className="my-auto ml-3">
                <input
                  type="email"
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="my-auto icon">
                <img src={globe} alt="globe" className="globe" />
              </div>
              <div className="my-auto ml-3">
                <input
                  type="text"
                  onChange={handleInputChange}
                  name="nac"
                  placeholder="Nacionalidad"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto justify-content-center">
            <div className="col-10">
              <div className="my-auto icon">
                <img src={keyboard} alt="keyboard" className="keyboard" />
              </div>
              <div className="my-auto ml-3 w-100">
                <textarea
                  onChange={handleInputChange}
                  name="message"
                  placeholder="Consulta"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={!isEnabled}
          className="btn w-90 btn-primary align-self-center mb-5"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Contact;
