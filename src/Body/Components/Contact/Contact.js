import React, { useState } from "react";
import "./contact.scss";
import at from "../../../assets/icons/at.png";
import card from "../../../assets/icons/card.png";
import phone from "../../../assets/icons/phone.png";
import globe from "../../../assets/icons/globe.png";
import keyboard from "../../../assets/icons/keyboard.png";

function Contact() {
  const [datos, setDatos] = useState({});

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.name + " " + datos.tel);
  };
  
  const isEnabled = datos.name && datos.phone && datos.email && datos.nac && datos.msg;
   
  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header bg-primary">Contacto</div>
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
                  name="msg"
                  placeholder="Consulta"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <button  disabled={!isEnabled} className="btn w-90 btn-primary align-self-center mb-5" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Contact;
