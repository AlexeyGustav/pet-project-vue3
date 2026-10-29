import { describe, it, expect } from 'vitest'
import { filterByPrice } from '@/utils/filters.js'


describe('filterByPrice', () => {

  const products = [
    { name: 'Кружка', price: 300 },
    { name: 'Ваза', price: 1500 },
    { name: 'Плед', price: 800 },
  ]

  it('фильтрует по диапазону цен', () => {
    const result = filterByPrice(products, 200, 900)
    expect(result).toHaveLength(2)
  })

  it('возвращает пустой массив, если ничего не происходит', () => {
    const result = filterByPrice(products, 5000, 10000)
    expect(result).toHaveLength(0)
  })

  it('включает пограничные значения', () => {
    const result = filterByPrice(products, 300, 300)
    expect(result[0].name).toBe('Кружка')
  })
})