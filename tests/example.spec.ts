import { test, expect } from '@playwright/test';

const websiteURL = 'http://localhost:3001'; // Replace with your actual website URL

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});


test('navigation links work correctly', async ({ page }) => {
  await page.goto(websiteURL);

  // Click the "Projects" link.
  await page.click('a[href="#projects"]');
  // Expect the URL to contain "#projects".
  await expect(page).toHaveURL(/.*#projects/);

  // Click the "Articles" link.
  await page.click('a[href="#articles"]');
  // Expect the URL to contain "#articles".
  await expect(page).toHaveURL(/.*#articles/);

  // Click the "Contact" link.
  await page.click('a[href="#contact"]');
  // Expect the URL to contain "#contact".
  await expect(page).toHaveURL(/.*#contact/);
});


test('footer links are valid', async ({ page }) => {
  await page.goto(websiteURL);

  // Click the "Github" link in the footer.
  await page.click('footer li:nth-child(1) a');
  // Expect the URL to contain "github.com".
  await expect(page).toHaveURL(/github.com/);

  // Go back to the homepage.
  await page.goBack();

  // Click the "Linkedin" link in the footer.
  await page.click('footer li:nth-child(2) a');
  // Expect the URL to contain "linkedin.com".
  await expect(page).toHaveURL(/linkedin.com/);
});

// Add more tests as needed to cover other interactions and components in your HomePage.
