import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('contact links scroll to the form', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Contact me' }).first().click()
  await expect(page).toHaveURL(/#contact$/)
  await expect(page.getByRole('form', { name: 'Contact Adam' })).toBeInViewport()
})

test('validates and submits the contact form', async ({ page }) => {
  await page.goto('/#contact')
  await page.getByRole('button', { name: 'Send message' }).click()
  await expect(page.getByText('Please enter your name')).toBeVisible()
  await page.getByLabel('Name').fill('Taylor')
  await page.getByLabel('Email').fill('taylor@example.com')
  await page.getByLabel('Message').fill('Hello from Playwright')
  await page.getByRole('button', { name: 'Send message' }).click()
  await expect(page.getByRole('status')).toContainText('Thanks!')
})

test('has no critical accessibility violations', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious')).toEqual([])
})

test('does not overflow horizontally', async ({ page }) => {
  await page.goto('/')
  const overflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflows).toBe(false)
})
