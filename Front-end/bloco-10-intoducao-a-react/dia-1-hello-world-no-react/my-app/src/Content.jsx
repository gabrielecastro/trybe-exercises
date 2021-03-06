import React, {Component} from 'react';

class Content extends React.Component {
  render() {

    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      
      <div>
        {conteudos.map((elem) => (
          <div key={elem.conteudo} className='conteudo'>
          <h4>{`O conteúdo é: ${elem.conteudo}`}</h4>
          <p>{`Status: ${elem.status}`}</p>
          <p>{`Bloco: ${elem.bloco}`}</p>
          </div>
        ))}
      </div>
      
    )
  }
}

export default Content;