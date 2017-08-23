import { mount } from 'avoriaz'
import Home from '../src/page/Home.vue'

describe('Home.vue', () => {
  const component = mount(Home)
  it('should render its container div', () => {
    expect(component.is('div')).toBe(true)
  })
})
