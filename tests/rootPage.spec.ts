import { expect, test } from '@playwright/test'

test('index page smoke test', async ({ page }) => {
  await page.goto('/')
  const heading = page.getByRole('heading', { name: /Chatty/i, level: 1 })
  const input = page.getByRole('textbox')
  const button = page.getByRole('button')

  expect(heading).toHaveText('Chatty')
  expect(input).toBeEditable()
  expect(button).toBeVisible()

  input.type('Cesar is cool!')

  expect(input).toHaveValue('Cesar is cool!')
})
