import { describe, it, expect } from 'vitest'
import { matchesSearch } from '@/utils/filters.js'

describe('matchesSearch', () => {
  
  const products = [
    { description: 'Керамическая Кружка для кофе' },
    { description: 'Деревянная ваза ручной работы' },
    { description: 'Плед из шерсти' },
  ]

  it('находит товар без учёта регистра', () => {
    const result = products.filter((p) => matchesSearch(p, 'кружка'))
    expect(result).toHaveLength(1)
    expect(result[0].description).toContain('Кружка')
  })

  it('игнорирует пробелы вокруг запроса', () => {
    const result = products.filter((p) => matchesSearch(p, '  плед  '))
    expect(result).toHaveLength(1)
  })

  it('возвращает все товары при пустом запросе', () => {
    const result = products.filter((p) => matchesSearch(p, ''))
    expect(result).toHaveLength(3)
  })

  it('не находит ничего, если совпадений нет', () => {
    const result = products.filter((p) => matchesSearch(p, 'стол'))
    expect(result).toHaveLength(0)
  })
})
