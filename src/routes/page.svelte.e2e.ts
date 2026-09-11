import { expect, test } from '@playwright/test';

test('shows the introduction and projects in the agreed order', async ({ page }) => {
	await page.goto('http://localhost:4173');

	await expect(page.getByRole('heading', { name: 'Hello, my name is Lawjay!' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Hmong', exact: true })).toHaveAttribute(
		'href',
		'https://www.britannica.com/topic/Hmong'
	);

	const projects = page.locator('main a[href^="https://github.com/Lomzem/"]');
	const names = ['dotfiles', 'meettime', 'everest', 'imgcomp'];
	await expect(projects).toHaveCount(names.length);
	for (const [index, name] of names.entries()) {
		await expect(projects.nth(index)).toContainText(name);
		await expect(projects.nth(index)).toHaveAttribute('href', `https://github.com/Lomzem/${name}`);
	}
});

test('follows the system theme and responds to changes', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'dark' });
	await page.goto('http://localhost:4173');
	await expect(page.locator('html')).toHaveClass(/\bdark\b/);
	await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');

	await page.emulateMedia({ colorScheme: 'light' });
	await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
	await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');

	await page.getByRole('button', { name: 'Theme', exact: true }).click();
	await expect(page.getByRole('menuitemradio', { name: 'System', exact: true })).toHaveAttribute(
		'aria-checked',
		'true'
	);
});

test('remembers an explicit theme and can return to the system preference', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'dark' });
	await page.goto('http://localhost:4173');
	await page.getByRole('button', { name: 'Theme', exact: true }).click();
	await page.getByRole('menuitemradio', { name: 'Light', exact: true }).click();
	await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');

	await page.reload();
	await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
	await page.getByRole('button', { name: 'Theme', exact: true }).click();
	await expect(page.getByRole('menuitemradio', { name: 'Light', exact: true })).toHaveAttribute(
		'aria-checked',
		'true'
	);
	await page.getByRole('menuitemradio', { name: 'System', exact: true }).click();
	await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');

	await page.emulateMedia({ colorScheme: 'light' });
	await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
});

test('fits a narrow mobile viewport with the theme menu open', async ({ page }) => {
	await page.setViewportSize({ width: 320, height: 640 });
	await page.goto('http://localhost:4173');
	await expect(page.getByRole('heading', { name: 'Hello, my name is Lawjay!' })).toBeVisible();
	await page.getByRole('button', { name: 'Theme', exact: true }).click();
	await expect(page.getByRole('menuitemradio', { name: 'Dark', exact: true })).toBeVisible();
	const dimensions = await page.evaluate(() => ({
		content: document.documentElement.scrollWidth,
		viewport: document.documentElement.clientWidth
	}));
	expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});
