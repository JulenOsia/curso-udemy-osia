import React, { Component } from 'react';

class Box extends Component {
  render () {
    return (
      <div style={{border: '1px solid #000', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  render () {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          author='Julen'
          date={new Date().toLocaleDateString()}
          title='Articulo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
            <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>

        </Article>
        <Article
          author='Peio'
          date={new Date().toLocaleDateString()}
          title='Articulo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
            <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>

        </Article>
      </div>
    );
  }
}

export default App;
