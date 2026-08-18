import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('navigates across main sections and selectors', async ({ page }, testInfo) => {
  await page.goto('/')
  if (testInfo.project.name.includes('mobile')) await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByRole('link', { name: 'Destination' }).click()
  await expect(page).toHaveURL(/destination\/moon/)
  await page.getByRole('link', { name: 'Mars' }).click()
  await expect(page.getByRole('heading', { name: 'Mars' })).toBeVisible()
})

for (const path of ['/', '/destination/moon', '/crew/douglas-hurley', '/technology/launch-vehicle']) {
  test(`is accessible at ${path}`, async ({ page }) => {
    await page.goto(path)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious')).toEqual([])
  })
}

test('does not overflow horizontally', async ({ page }) => {
  await page.goto('/technology/launch-vehicle')
  const overflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
  expect(overflows).toBe(false)
})
