import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App Component Render', () => {
  let wrapper: any
  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render a child components', () => {
    expect(wrapper.find('Movie').length).toEqual(1)
  })
})
