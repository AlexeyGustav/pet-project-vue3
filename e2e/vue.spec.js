import { test, expect } from '@playwright/test';

test('e2e тест позитивного сценария работы с сайтом', async ({ page }) => {
  await page.goto('/');

  // Пользователь заходит на страницу каталога
  await expect(page.locator('.site-header .logo-text')).toContainText('МАМИН');
  await expect(page.locator('.product-card').first()).toBeVisible();

  // Пользователь складывает товары в корзину
  await page.locator('.add-btn').first().click();
  await page.locator('.add-btn').first().click();
  await page.locator('.add-btn').first().click();
  await page.locator('.add-btn').first().click();
  await expect(page.locator('.cart-count')).toHaveText('4');

  // Пользователь переходит к корзине
  await page.locator('.cart-btn').click();
  await expect(page.locator('.checkout-btn')).toBeVisible();

  // Убирает одни товары полностью, увеличивает количество других товаров
  await page.locator('.item-remove').first().click();
  await expect(page.locator('.summary-value').first()).toContainText('3');

  await page.locator('.qty-btn').first().click();
  await expect(page.locator('.summary-value').first()).toContainText('2');

  await page.locator('.qty-btn').nth(1).click();
  await page.locator('.qty-btn').nth(1).click();
  await page.locator('.qty-btn').nth(1).click();
  await expect(page.locator('.summary-value').first()).toContainText('5');

  // Переходит на страницу оплаты
  await page.locator('.checkout-btn').first().click();
  await expect(page.locator('.checkout-title')).toHaveText('Способ оплаты');

  // Вводит правильные реквизиты карты
  await page.locator('#card-number').fill('4242424242424242');
  await page.locator('#card-name').fill('Ivan Ivanov');
  await page.locator('#card-expiry').fill('1127');
  await page.locator('#card-cvv').fill('112');
  await page.locator('.submit-btn').click();

  // Переходит на страницу успешной оплаты товара и видит текст, что всё успешно оплачено
  await expect(page.locator('.success-title')).toHaveText('Заказ оформлен!');
  await expect(page.locator('.status-badge')).toHaveText(' Подтверждён');

  // Возвращается в каталог и видит, что корзина вновь пустая.
  await page.locator('.btn-primary').click();
  await expect(page.locator('.cart-count')).toHaveText('0');
});
