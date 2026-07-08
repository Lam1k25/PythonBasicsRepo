import React, { Component } from "react";

class QuoteViewer extends Component {
  quotes = [
    "Лучше поздно, чем никогда.",
    "Знание — сила.",
    "Ученье — свет, а неученье — тьма.",
    "Все приходит с опытом.",
    "Никогда не сдавайся."
  ];

  constructor(props) {
    super(props);

    this.state = {
      quote: this.quotes[0],
    };
  }

  componentDidMount() {
    console.log("Компонент смонтирован");
  }

  componentDidUpdate() {
    console.log("Компонент обновлен");
  }

  componentWillUnmount() {
    console.log("Компонент размонтирован");
  }

  nextQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);

    this.setState({
      quote: this.quotes[randomIndex],
    });
  };

  render() {
    return (
      <div>
        <p>
          <i>{this.state.quote}</i>
        </p>

        <button onClick={this.nextQuote}>
          Следующая цитата
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    show: true,
  };

  toggleQuote = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Просмотр цитат</h1>

        <button onClick={this.toggleQuote}>
          {this.state.show ? "Скрыть цитаты" : "Показать цитаты"}
        </button>

        <br />
        <br />

        {this.state.show && <QuoteViewer />}
      </div>
    );
  }
}

export default App;
