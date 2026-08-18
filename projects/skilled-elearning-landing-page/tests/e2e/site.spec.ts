import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('the learning journey and calls to action are complete', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Maximize skill, minimize budget' })).toBeVisible()
  await expect(page.getByRole('article')).toHaveCount(5)
  await page.getByRole('link', { name: 'Get Started' }).first().click()
  await expect(page).toHaveURL(/#courses$/)
  await expect(page.getByRole('heading', { name: 'Check out our most popular courses!' })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

test('the page has no automatically detectable accessibility violations', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})

test('the layout remains contained at supported viewport sizes', async ({ page }) => {
  for (const viewport of [
    { width: 375, height: 812 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    const pageWidth = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }))
    expect(pageWidth.scroll, `Unexpected horizontal overflow at ${viewport.width}px`).toBeLessThanOrEqual(
      pageWidth.client,
    )
  }
})
