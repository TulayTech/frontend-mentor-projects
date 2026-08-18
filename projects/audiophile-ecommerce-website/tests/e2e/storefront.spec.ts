import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => localStorage.clear())
})

for (const path of ['/', '/category/headphones', '/product/zx9-speaker', '/checkout']) {
  test(`is accessible at ${path}`, async ({ page }) => {
    await page.goto(path)
    await expect(page.locator('h1')).toBeVisible()
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })
}

test('adds, edits, and persists cart items', async ({ page }) => {
  await page.goto('/product/xx99-mark-two-headphones')
  await page.getByRole('button', { name: /Increase XX99 Mark II Headphones quantity/i }).click()
  await page.getByRole('button', { name: 'Add to cart' }).click()
  await page.getByRole('button', { name: 'Open cart' }).click()
  await expect(page.getByRole('heading', { name: 'Cart (2)' })).toBeVisible()
  await expect(page.getByText('$ 5,998')).toBeVisible()
  const cart = page.getByRole('dialog', { name: 'Cart (2)' })
  await cart.getByRole('button', { name: 'Increase XX99 Mark II Headphones', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Cart (3)' })).toBeVisible()
  await page.getByRole('button', { name: 'Close cart' }).click()
  await page.reload()
  await page.getByRole('button', { name: 'Open cart' }).click()
  await expect(page.getByRole('heading', { name: 'Cart (3)' })).toBeVisible()
})

test('validates checkout and confirms an order', async ({ page }) => {
  await page.goto('/product/yx1-earphones')
  await page.getByRole('button', { name: 'Add to cart' }).click()
  await page.getByRole('button', { name: 'Open cart' }).click()
  await page.getByRole('link', { name: 'Checkout' }).click()
  await page.getByRole('button', { name: 'Continue & pay' }).click()
  await expect(page.getByText('Name is required')).toBeVisible()

  await page.getByLabel('Name').fill('Alexei Ward')
  await page.getByLabel('Email address').fill('alexei@example.com')
  await page.getByLabel('Phone number').fill('+1 202-555-0136')
  await page.getByLabel('Your address').fill('1137 Williams Avenue')
  await page.getByLabel('ZIP code').fill('10001')
  await page.getByLabel('City').fill('New York')
  await page.getByLabel('Country').fill('United States')
  await page.getByLabel('e-Money number').fill('238521993')
  await page.getByLabel('e-Money PIN').fill('6891')
  await page.getByRole('button', { name: 'Continue & pay' }).click()

  await expect(page.getByRole('dialog', { name: /Thank you for your order/i })).toBeVisible()
  const confirmation = page.getByRole('dialog', { name: /Thank you for your order/i })
  await expect(confirmation.getByText('$ 649')).toBeVisible()
  await page.getByRole('button', { name: 'Back to home' }).click()
  await expect(page).toHaveURL(/\/$/)
})

test('mobile menu reaches product categories', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium')
  await page.goto('/')
  await page.getByRole('button', { name: 'Menu' }).click()
  await page.locator('#mobile-navigation').getByRole('link', { name: /Speakers/i }).click()
  await expect(page.getByRole('heading', { level: 1, name: 'speakers' })).toBeVisible()
})

test('does not overflow horizontally', async ({ page }) => {
  for (const path of ['/', '/category/earphones', '/product/yx1-earphones']) {
    await page.goto(path)
    const dimensions = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
    }))
    expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth)
  }
})
