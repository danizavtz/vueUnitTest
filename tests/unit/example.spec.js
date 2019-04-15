import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import UserView from '@/views/UserView'

describe('UserView', () => {
  it('Renders the component', () => {
    // arrange
    const wrapper = shallowMount(UserView);
    const divElement = wrapper.find('div');
    expect(divElement.isVisible()).to.equal(true);
  }),
  it('Check html element has assigned start string value', () => {
    const wrapper = shallowMount(UserView);
    const divElementHtml = wrapper.find('div');
    expect(divElementHtml.text()).to.equal('UserView');
  }),
  it('')
})