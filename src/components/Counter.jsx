import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };

    console.log("Construindo a classe Counter");
  }

  componentDidMount() {
    console.log("O componente foi atualizado");
  }

  componentDidUpdate() {
    console.log("O componente Counter foi atualizado");

    document.addEventListener("scroll", this.consoleScroll);
  }

  compontentWillUpdate() {
    console.log("O componente Counter será atualizado");
  }

  componentWillUnmount() {
    console.log("O componente Counter será destruído");

    document.removeEventListener("scroll", this.consoleScroll);
  }

  consoleScroll() {
    console.log("Rolando página");
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("Renderizando o componente Counter");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>
      </div>
    );
  }
}
