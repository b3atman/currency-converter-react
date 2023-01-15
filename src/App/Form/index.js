import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { useRatesData } from "./useRatesData";
import {
  LabelText,
  Field,
  Button,
  Fieldset,
  Legend,
  Info,
  Loading,
  Failure,
} from "./styled";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const [currency, setCurrency] = useState("EUR");
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
        {ratesData.state === "loading"
          ? (
            <Loading>
              Trwa ładowanie kursów walut...
            </Loading>
          )
          : (
            ratesData.state === "error" ? (
              <Failure>
                Nastąpił błąd przy pobieraniu danych...
              </Failure>
            ) : (
              <>
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
                      {Object.keys(ratesData.rates).map(((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      )))}
                    </Field>
                  </label>
                </p>
                <p>
                  <Button>Przelicz</Button>
                </p>
                <Result result={result} />
                <Info>
                  Kursy walut pobrane z Europejskiego Banku Centralnego
                </Info>
              </>
            ))}
      </Fieldset>
    </form>
  );
};