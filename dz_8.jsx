import React, { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedTime, FormattedNumber } from "react-intl";

export default function App() {
  const [locale, setLocale] = useState("en");

  const messages = {
    en: {
      greeting: "Hello!",
      timeLabel: "Current time:",
      amountLabel: "Amount:"
    },
    ru: {
      greeting: "Привет!",
      timeLabel: "Текущее время:",
      amountLabel: "Сумма:"
    },
    fr: {
      greeting: "Bonjour!",
      timeLabel: "Heure actuelle:",
      amountLabel: "Montant:"
    }
  };

  const currencyByLocale = {
    en: "USD",
    ru: "RUB",
    fr: "EUR"
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div style={{ fontFamily: "sans-serif", padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <button onClick={() => setLocale("en")}>English</button>
          <button onClick={() => setLocale("ru")}>Русский</button>
          <button onClick={() => setLocale("fr")}>Français</button>
        </div>

        <h2>
          <FormattedMessage id="greeting" />
        </h2>

        <p>
          <FormattedMessage id="timeLabel" />{" "}
          <FormattedTime value={new Date()} hour="numeric" minute="numeric" />
        </p>

        <p>
          <FormattedMessage id="amountLabel" />{" "}
          <FormattedNumber
            value={2500.5}
            style="currency"
            currency={currencyByLocale[locale]}
          />
        </p>
      </div>
    </IntlProvider>
  );
}
