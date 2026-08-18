import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('navigates to the features section', async ({ page }) => {
  await page.getByRole('link', { name: 'Features', exact: true }).click()
  await expect(page).toHaveURL(/#features$/)
  await expect(page.getByRole('heading', { name: 'Access your files, anywhere' })).toBeVisible()
})

test('validates the early access email', async ({ page }) => {
  await page.getByLabel('Email address').fill('not-an-email')
  await page.getByRole('button', { name: 'Get Started For Free' }).click()
  await expect(page.getByRole('alert')).toHaveText('Please enter a valid email address')
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
