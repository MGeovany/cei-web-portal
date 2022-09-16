// @ts-check

const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
})

test.describe('Landing Page should have six sections', () => {
  test('Section Home, title is showing', async ({ page }) => {
    await expect(page.locator('.home__title')).toContainText(/\w/g)
  })
  test('Section Home, subttitle is showing', async ({ page }) => {
    await expect(page.locator('.home__subtitle')).toContainText(/\w/g)
  })
  test('Section Home, image is valid', async ({ page }) => {
    await expect(page.locator('img')).toHaveAttribute('alt', 'Startup')
  })
})
