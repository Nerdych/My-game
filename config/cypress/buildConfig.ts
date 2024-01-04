import path from 'path';

export const buildConfig = (): Cypress.ConfigOptions => {
  const baseUrl = 'http://localhost:6000';
  const autotestsFolder = path.resolve(__dirname, '..', '..', 'src', 'app', 'autotests');

  return {
    e2e: {
      baseUrl,
      supportFile: path.resolve(autotestsFolder, 'support', 'e2e.ts'),
      specPattern: path.resolve(autotestsFolder, 'e2e', '**', '*cy.ts'),
      downloadsFolder: path.resolve(autotestsFolder, 'downloads'),
      fixturesFolder: path.resolve(autotestsFolder, 'fixtures'),
      screenshotsFolder: path.resolve(autotestsFolder, 'screenshots'),
      videosFolder: path.resolve(autotestsFolder, 'videos'),
    },
  };
};
