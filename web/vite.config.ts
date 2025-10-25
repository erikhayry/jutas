import {defineConfig} from 'vitest/config';
import {sveltekit} from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        testTimeout: 1000,
        expect: {requireAssertions: true},
        coverage: {
            provider: 'istanbul',
            include: ['**/*.{ts,svelte}'],
            exclude: ['**/*.js', '**/*.config.ts', '**/*.d.ts', '.svelte-kit/generated', 'root.svelte', '**/*/routes/+layout.*']
        },
        projects: [
            {
                extends: './vite.config.ts',
                test: {
                    name: 'client',
                    environment: 'browser',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [{browser: 'chromium'}]
                    },
                    include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                    exclude: ['src/lib/server/**'],
                    setupFiles: ['./vitest-setup-client.ts'],
                }
            },
            {
                extends: './vite.config.ts',
                test: {
                    name: 'server',
                    environment: 'node',
                    include: ['src/**/*.{test,spec}.{js,ts}'],
                    exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
                }
            }
        ]
    }
});
