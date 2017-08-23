import { mount } from 'avoriaz'
import Icon from '../src/theme/Icon.vue'

describe('Icon.vue', () => {
  const component = mount(Icon)
  it('should render an svg', () => {
    // For some stupid reason, component.is('svg') will not work
    expect(component.html()).toEqual(expect.stringContaining('<svg'));
  })
})
