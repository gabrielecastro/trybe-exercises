import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  peso: PropTypes.shape({
    measurementUnit: PropTypes.string,
    value: PropTypes.number,
  }),
  imagem: PropTypes.string.isRequired,
}
 
export default Pokemon;