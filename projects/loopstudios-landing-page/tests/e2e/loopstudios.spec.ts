import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('mobile navigation opens, traps focus, closes, and restores focus', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Mobile navigation test')

  const open = page.getByRole('button', { name: 'Open menu' })
  await open.click()
  const close = page.getByRole('button', { name: 'Close menu' })
  await expect(close).toBeFocused()

  await page.keyboard.press('Shift+Tab')
  await expect(page.getByRole('dialog', { name: 'Menu' }).getByRole('link', { name: 'Support' })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: 'Menu' })).toBeHidden()
  await expect(open).toBeFocused()
})

test('has no automatically detectable accessibility violations', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

test('does not overflow the viewport', async ({ page }) => {
  const dimensions = await page.evaluate(() => ({
    body: document.body.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }))
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport)
})
