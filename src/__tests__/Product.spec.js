import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Product from '../components/Product.vue';

describe('тесты компонента товаров', () => {
  const mockProduct = {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvnKHtUBPSbjfskwVHBFRXJhFaIbjMd1XSylwZKJPUw&s=10',
    title: 'Варенье',
    description: 'Варенье Малиновое',
    text: 'Нежное малиновое варенье с косточками. Сезонный урожай, небольшой тираж. Банка 350 г.',
    additional: 'Новинка',
    material: ['Малина'],
    oldPrice: "490 ₽",
    color: ['Сладкий', 'Кисло-сладкий'],
    style: ['Фермерский'],
  };

  it('показывает кнопку в корзину, когда товара нету', () => {
    const wrapper = mount(Product, {
      props: {
        product: mockProduct,
        basket: [],
      },
    });
    expect(wrapper.text()).toContain('В корзину');
    expect(wrapper.find('.quantity-control').exists()).toBe(false);
  });

  it('проверяем правильность отображения в корзине', () => {
    const wrapper = mount(Product, {
      props: {
        product: mockProduct,
        basket: [
          {
            id: 2,
            quantity: 1,
          },
        ],
      },
    });
    expect(wrapper.find('.add-btn').exists()).toBe(false);
    expect(wrapper.find('.quantity-control').exists()).toBe(true);
    expect(wrapper.find('.quantity-value').text()).toBe('1');
  });

  it('Проверка + и - товара в корзину', async () => {
    const wrapper = mount(Product, {
      props: {
        product: mockProduct,
        basket: [
          {
            id: 2,
            quantity: 2,
          },
        ],
      },
    });
    const [minusBtn, plusBtn] = wrapper.findAll('.quantity-btn');
    await minusBtn.trigger('click');
    await plusBtn.trigger('click');
    expect(wrapper.emitted('decrease')[0]).toEqual([mockProduct]);
    expect(wrapper.emitted('increase')[0]).toEqual([mockProduct]);
  });
});
