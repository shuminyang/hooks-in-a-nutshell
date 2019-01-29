import React from 'react'
import renderer from 'react-test-renderer'

import Lightbulb from '..'

describe('The lightbulb component', () => {
  let component

  beforeEach(() => {
    component = renderer.create(<Lightbulb />)
  })

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})