import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { 
  LabelText,
  Field,
  Button,
  Fieldset,
  Legend,
  Footer,
  Item,
} from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    calculateResult(currency, amount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        <Clock />
        <p>
          *Pola wymagane
        </p>
        <p>
          <label>
            <LabelText>
              Kwota w PLN*:
            </LabelText>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w PLN"
              type="number"
              autoFocus
              required
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <LabelText>
              Waluta*:
            </LabelText>
            <Field
              as="select"
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
            </Field>
          </label>
        </p>
        <p>
          <Button>Przelicz</Button>
        </p>
        <Result result={result} />
      </Fieldset>
      <Footer>
        Kursy walut według średniego kursu NBP z dnia 19.12.2022
        <ul>
          <Item>EUR - 4,6886</Item>
          <Item>USD - 4,4153</Item>
          <Item>GBP - 5,3926</Item>
          <Item>CHF - 4,7453</Item>
        </ul>
      </Footer>
    </form>
  );
};