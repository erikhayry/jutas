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
            name: "webkit",
            use: {...devices["Desktop Safari"], headless: false},
        }]
});
