import { defineConfig } from '@playwright/test';

export default defineConfig({
	forbidOnly: !!process.env.CI,
	workers: process.env.CI ? 1 : undefined,
	webServer: {
		command: process.env.CI ? 'bun run preview' : 'bun run build && bun run preview',
		port: 4173
	},
	testMatch: '**/*.e2e.{ts,js}'
});
