import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => { await page.goto('/') })

test('navigates between the gallery and location pages', async ({ page }) => {
  await page.getByRole('link', { name: 'Our location' }).click()
  await expect(page).toHaveURL(/\/location$/)
  await expect(page.getByRole('heading', { name: 'Our location' })).toBeVisible()
  await page.getByRole('link', { name: 'Back to home' }).click()
  await expect(page).toHaveURL(/\/$/)
})

for (const path of ['/', '/location']) {
  test(`has no accessibility violations at ${path}`, async ({ page }) => {
    await page.goto(path)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })
}

test('does not overflow the viewport', async ({ page }) => {
  const dimensions = await page.evaluate(() => ({ body: document.body.scrollWidth, viewport: document.documentElement.clientWidth }))
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport)
})
