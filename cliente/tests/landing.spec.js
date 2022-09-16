// @ts-check
const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Firefox is not supported yet')
  test.skip(browserName === 'webkit', 'Webkit is not supported yet')
  await page.goto('http://localhost:3000/')
})

test.describe('Home Section', () => {
  test('Section Home, title should be showing', async ({ page }) => {
    await expect(page.locator('.home__title')).toContainText(/\w/g)
  })

  test('Section Home , subttitle is showing', async ({ page }) => {
    await expect(page.locator('.home__subtitle')).toContainText(/\w/g)
  })
})

test.describe('Carousel Section', () => {
  test('Section Carousel, subttitle is showing', async ({ page }) => {
    await expect(page.locator('.section-title')).toContainText([/\w/g])
  })
})
