import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('project slider works with mouse and keyboard', async ({ page }) => {
  await page.getByRole('button', { name: 'Next project' }).click()
  await expect(page.getByRole('heading', { name: 'New Majestic Hotel' })).toBeVisible()
  await page.getByRole('region', { name: 'New Majestic Hotel' }).press('ArrowRight')
  await expect(page.getByRole('heading', { name: 'Crypto Dashboard' })).toBeVisible()
})

test('mobile navigation closes with Escape and restores focus', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Mobile navigation test')
  const trigger = page.getByRole('button', { name: 'Open menu' })
  await trigger.click()
  await expect(page.getByRole('button', { name: 'Close menu' })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: 'Menu' })).toBeHidden()
  await expect(trigger).toBeFocused()
})

test('has no automatically detectable accessibility violations', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

test('does not overflow the viewport', async ({ page }) => {
  const dimensions = await page.evaluate(() => ({ body: document.body.scrollWidth, viewport: document.documentElement.clientWidth }))
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport)
})
