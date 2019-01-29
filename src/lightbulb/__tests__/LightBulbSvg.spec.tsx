import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import LightbulbSvg, { ILightbulbSvg } from '../LightBulbSvg'

describe('The LightbulbSvg component', () => {
  let component: ShallowWrapper<ILightbulbSvg>
  const defaultProps: ILightbulbSvg = {
    fillColor: 'color',
  }

  beforeEach(() => {
    component = shallow(<LightbulbSvg {...defaultProps} />)
  })

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('show match color sent as props', () => {
    const newProps = {
      ...defaultProps,
      fillColor: 'newColor'
    }
    component.setProps(newProps)

    const fourthPath = component.find('g').at(1).find('path').at(3)

    expect(fourthPath.prop('fill')).toBe(newProps.fillColor)
    expect(component).toMatchSnapshot()
  })
})