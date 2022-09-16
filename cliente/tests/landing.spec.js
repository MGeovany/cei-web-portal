// @ts-check

const { test, expect } = require('@playwright/test')
const { describe } = test

test.beforeEach(async ({ page, browserName }) => {
  await page.goto('http://localhost:3000/')
  test.skip(browserName === 'firefox', 'Still working on it')
  test.skip(browserName === 'webkit', 'Still working on it')
})

describe('Home Section', () => {
  test('Section Home, title is showing', async ({ page }) => {
    await expect(page.locator('.home__title')).toContainText(/\w/g)
  })

  test('Section Home , subttitle is showing', async ({ page }) => {
    await expect(page.locator('.home__subtitle')).toContainText(/\w/g)
  })
})

describe('Carousel Section', () => {
  test('Section Carousel, subttitle is showing', async ({ page }) => {
    await expect(page.locator('.section-title')).toContainText([
      /\w/g,
      /\w/g,
      /\w/g
    ])
  })
})
