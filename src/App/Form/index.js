import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walut
        </legend>
        <p>
          *Pola wymagane
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w PLN*:
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w PLN"
              className="form__field"
              type="number"
              autoFocus
              required
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta*:
            </span>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <Result result={result} />
      </fieldset>
      <p className="form__footer">
        Kursy walut według średniego kursu NBP z dnia 19.12.2022
        <ul>
          <li class="form__footer--item">EUR - 4,6886</li>
          <li class="form__footer--item">USD - 4,4153</li>
          <li class="form__footer--item">GBP - 5,3926</li>
          <li class="form__footer--item">CHF - 4,7453</li>
        </ul>
      </p>
    </form>
  );
};