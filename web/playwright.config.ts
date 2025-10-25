import {defineConfig, devices} from '@playwright/test';
import {screenReaderConfig} from "@guidepup/playwright";

export default defineConfig({
    ...screenReaderConfig,
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173
    },
    testDir: 'e2e',
    projects: [
        {
            name: 'Wide',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'Narrow',
            use: {
                ...devices['iPhone 13'],
            },
        },
    ],
});
