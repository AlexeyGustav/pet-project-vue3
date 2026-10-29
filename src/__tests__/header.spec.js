import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import Header from '@/components/Header.vue';
import { useSearch } from '../stores/search.js';

beforeEach(() => {
  setActivePinia(createPinia());
});


describe('тест компонента Header', () => {
  const props = {
    value: 'варенье',
  };

  // const search = useSearch()

  it('отображает ли инпут значение введённое в него', () => {
    const component = mount(Header, { props });
    component.setValue('change', { target: { value: 'варенье' } });
    expect(component.find('.search-input').props.value ).toBe('варенье');
  });
});
