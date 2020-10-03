/*
  Creando pruebas para el componente Footer
*/
import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'

import Footer from '../../components/Footer'
/*
  Un snapshot nos garantiza que la UI de nuestra app no
  cambie.
*/
/*
  mount() en un metodo de enzime, el cual no ayuda
  a simular el como se montaría el componente y poder
  acceder a el.
*/
/*
  Una suite es una serie de pruebas, para crearlas usamos el metodo
  describe(), el cual recibe dos parametros:
  1. un string, para identificar la suit.
  2. un callback.

  el metodo test recibe los mismos parametros que describe.
*/

describe('<Footer/>', () => {
  const footer = mount(<Footer/>)
  /* Probar que el componente existe, o que hace render*/
  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1)
  })

  test('Footer haves 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3)
  })

  test('Footer Snapshot', () => {
    const footer = create(<Footer/>)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})

// jest --updateSnapshot => Si deseamos actualizar el snapshot