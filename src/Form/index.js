import React from 'react';
import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walut</legend>
      <p>
        *Pola wymagane
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Kwota w PLN*:
          </span>
          <input className="form__field" type="number" min="0.01" step="0.01" required
            placeholder="Wpisz kwotę w PLN" />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Waluta*:
          </span>
          <select className="form__field" name="currency">
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
            <option>CHF</option>
          </select>
        </label>
      </p>
      <p>Wynik: <strong className="form__result">N/A</strong></p>
      <p>
        <button className="form__button" type="submit">Przelicz</button>
        <button className="form__button" type="reset">Wyczyść</button>
      </p>
    </fieldset>
  </form>
)

export default Form;