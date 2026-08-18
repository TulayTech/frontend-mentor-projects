import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('home experience, event tabs, and booking navigation work', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Exquisite dining since 1989' })).toBeVisible()
  await page.getByRole('tab', { name: 'Special Events' }).click()
  await expect(page.getByText(/romantic dinner or special date/i)).toBeVisible()
  await page.getByRole('link', { name: 'Book a table' }).first().click()
  await expect(page).toHaveURL(/\/booking$/)
  await expect(page.getByRole('heading', { name: 'Reservations' })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

test('reservation form reports errors and accepts a complete demo request', async ({ page }) => {
  await page.goto('/booking')
  await page.getByRole('button', { name: 'Make Reservation' }).click()
  await expect(page.getByText('This field is required').first()).toBeVisible()
  await expect(page.getByLabel('Name')).toBeFocused()

  await page.getByLabel('Name').fill('Taylor Morgan')
  await page.getByLabel('Email').fill('taylor@example.com')
  await page.getByLabel('Month').fill('10')
  await page.getByLabel('Day').fill('18')
  await page.getByLabel('Year').fill('2026')
  await page.getByLabel('Hour').fill('7')
  await page.getByLabel('Minute').fill('30')
  await page.getByLabel('AM or PM').selectOption('PM')
  await page.getByRole('button', { name: 'Make Reservation' }).click()

  await expect(page.getByText(/This portfolio demo does not send/)).toBeVisible()
})

test('pages have no automatically detectable accessibility violations', async ({ page }) => {
  for (const path of ['/', '/booking']) {
    await page.goto(path)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  }
})

test('the layout does not overflow at supported viewport sizes', async ({ page }) => {
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
