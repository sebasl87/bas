import React, { useState } from "react";
import "./motor.scss";

const Motor = () => {
  const parseDate = (input) => {
    if (
      input === "" ||
      (input[0] !== "2" && input[4] !== "-" && input[7] !== "-")
    ) {
      input = "2020-01-14";
    }
    let dateArray = input.split("-");
    dateArray[0] = dateArray[0].substr(2, 2);
    return `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;
  };
  const [arrival, setArrival] = useState(2);
  const [departure, setDeparture] = useState(0);
  const [ad, setAd] = useState(2);
  const ch = 0; //$("#ch").val();
  const rooms = 1; //$("#rooms").val();

  const handleClick = () => {
    window.location.href = `https://clickandbook.net/bienalsurapartamentos/rooms?in=${parseDate(
      arrival
    )}&out=${parseDate(departure)}&ad=${ad}&ch=${ch}&rooms=${rooms}`;
  };
  return (
    <div class="reservas_form_div">
      <form id="reservas_form" name="form_multi" method="GET">
        <select id="hotel_select" class="inputs">
          <option value="bienalsurapartamentos" selected="">
            BIEN AL SUR
          </option>
        </select>
        <input
          type="text"
          id="in"
          onfocus="(this.type='date')"
          class="inputs"
          name="in"
          placeholder="Check in"
          onChange={(e) => setArrival(e.target.value)}
        />
        <input
          type="text"
          id="out"
          onfocus="(this.type='date')"
          class="inputs"
          name="out"
          placeholder="Check out"
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="number"
          placeholder="Adultos"
          id="ad"
          class="inputs"
          name="ad"
          onChange={(e) => setAd(e.target.value)}
        />
        <input
          type="number"
          placeholder="Niños"
          id="ch"
          class="inputs"
          name="ch"
        />
        <input
          type="number"
          id="rooms"
          name="rooms"
          class="inputs"
          placeholder="Habitaciones"
        />
        <button
          id="reservar"
          class="boton_reserva"
          type="button"
          onClick={handleClick}
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
};
export default Motor;
