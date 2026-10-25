import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
it('renders the starter page and its documentation links', () => {
  const wrapper = mount(App);
  expect(wrapper.get('h1').text()).toBe('Welcome to Your Vue.js App');
  expect(wrapper.get('img').attributes('src')).toContain('logo.png');
  expect(wrapper.findAll('a').length).toBeGreaterThan(5);
});
