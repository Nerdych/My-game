import path from 'path';
import {devices} from '@playwright/test';
import type {Config} from '@playwright/test';

export const buildConfig = (): Config => {
  return {
    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: path.resolve(__dirname, '..', '..', 'src'),

    // Run all tests in parallel.
    fullyParallel: true,

    testMatch: /.*\.e2e\.ts/,

    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: [['html', {outputDir: path.resolve(__dirname, '..', '..', 'result-tests')}]],

    // Configure projects for major browsers.
    projects: [
      {
        name: 'chromium',
        use: {...devices['Desktop Chrome']},
      },
    ],
    // Run your local dev server before starting the tests.
    webServer: {
      command: 'npm run start',
      url: 'http://localhost:3000/',
    },
  };
};
