import React, { Component } from 'react';
import cars from './data/cars.json';

class CarItem extends Component {
  
  render () {
    const { car } = this.props

    return (
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
      /*
      const { car, key } = this.props
      return (
      <li>
        <p>Key: {key}</p>
      </li>
      )
      No mostrará la key en pantalla pero si un mensaje de error en la consola
      indicando que la key solo se usa de forma interna en React
      */
    )
  }
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <h4>Trabajando con listas con objetos</h4>
        <ul>
          {
            cars.map(car =>{
              return (
                <CarItem key={car.id} car={car} />

                /* Para mostrar la key hay que pasar el valor en una prop diferente
                Ejemplo de este caso:
                const { car, id } = this.props
                <p>Key: {id}</p>
                return <CarItem id={car.id} key={car.id} car={car} */
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
