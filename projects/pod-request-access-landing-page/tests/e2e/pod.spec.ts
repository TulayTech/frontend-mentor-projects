import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('shows both challenge validation messages', async ({ page }) => {
  await page.getByRole('button', { name: 'Request access' }).click()
  await expect(page.getByRole('alert')).toHaveText('Oops! Please add your email')

  await page.getByLabel('Email address').fill('listener@pod')
  await page.getByRole('button', { name: 'Request access' }).click()
  await expect(page.getByRole('alert')).toHaveText('Oops! Please check your email')
})

test('accepts a valid email in the portfolio demo', async ({ page }) => {
  await page.getByLabel('Email address').fill('listener@example.com')
  await page.getByRole('button', { name: 'Request access' }).click()

  await expect(page.getByRole('status')).toContainText('does not send or store your email')
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
