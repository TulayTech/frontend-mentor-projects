import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('searches by ingredient and opens a recipe', async ({ page }) => {
  await page.goto('/recipes')
  await page.getByPlaceholder(/Search by name or ingredient/i).fill('chickpeas')
  await expect(page.getByRole('status')).toContainText('2 recipes found')
  await page.getByRole('link', { name: 'Mediterranean Chickpea Salad' }).click()
  await expect(page.getByRole('heading', { name: 'Mediterranean Chickpea Salad' })).toBeVisible()
})

test('combines prep and cook time filters', async ({ page }) => {
  await page.goto('/recipes')
  await page.getByLabel('Max Prep Time').selectOption('5')
  await page.getByLabel('Max Cook Time').selectOption('5')
  await expect(page.getByRole('status')).toContainText('2 recipes found')
})

for (const path of ['/', '/about', '/recipes', '/recipes/banana-oat-pancakes']) {
  test(`is accessible at ${path}`, async ({ page }) => {
    await page.goto(path)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious')).toEqual([])
  })
}

test('does not overflow horizontally', async ({ page }) => {
  await page.goto('/recipes')
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false)
})
