import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render () {
    const { author, children, date, title } = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author &&  <p><em>Escrito por {author}</em></p>}
        <date>{date}</date>
        <article>
          {children}
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
          
          date={new Date().toLocaleDateString()}
          title='Articulo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como children.</p>
            <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>

        </Article>
      </div>
    );
  }
}

export default App;
