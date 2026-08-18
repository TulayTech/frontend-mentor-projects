import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('navigates between the content pages', async ({ page }, testInfo) => {
  await page.goto('/')
  if (testInfo.project.name.includes('mobile')) await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'About us' }).click()
  await expect(page.getByRole('heading', { name: 'About us' })).toBeVisible()
})

test('builds a subscription and opens the priced summary', async ({ page }) => {
  await page.goto('/plan')
  for (const choice of ['Filter Preferences', 'Single origin Bean type', '500g Quantity', 'Wholebean Grind option', 'Every 2 weeks Deliveries']) await page.getByRole('button', { name: choice }).click()
  await page.getByRole('button', { name: 'Create my plan!' }).click()
  await expect(page.getByRole('dialog', { name: 'Order Summary' })).toContainText('$35.00 / mo')
  await page.getByRole('button', { name: /Checkout/ }).click()
  await expect(page.getByRole('status')).toContainText('ready for checkout')
})

test('capsules disable the grind question', async ({ page }) => {
  await page.goto('/plan')
  await page.getByRole('button', { name: 'Capsule Preferences' }).click()
  await expect(page.getByRole('button', { name: 'Want us to grind them?' })).toBeDisabled()
})

for (const path of ['/', '/about', '/plan']) {
  test(`has no serious accessibility violations at ${path}`, async ({ page }) => {
    await page.goto(path)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious')).toEqual([])
  })
}

test('does not overflow horizontally', async ({ page }) => {
  await page.goto('/plan')
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false)
})
