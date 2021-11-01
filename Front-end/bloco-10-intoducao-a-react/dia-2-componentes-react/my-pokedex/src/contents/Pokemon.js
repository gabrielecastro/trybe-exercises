import React, { Component } from 'react';

class Pokemon extends Component {
  render() { 
    const { nome, tipo, peso, imagem } = this.props;
    return <div>
      <h1>{nome}</h1>
      <p>{tipo}</p>
      <p>{peso}</p>
      <img src={imagem} alt={nome}></img>
    </div>;
  }
}
 
export default Pokemon;