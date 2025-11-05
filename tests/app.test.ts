import { expect, test } from '@playwright/test'

test('hello world', async ({ page }) => {
  await page.goto('')

  // 1. Check if website title is "Modelverse".
  await expect(page).toHaveTitle('ValueTracks')

  // 2. Check if the root element has any children.
  const rootHasChildren = await page
    .locator('#root')
    .evaluate((root) => root.children.length > 0)
  expect(rootHasChildren).toBe(true)
})
