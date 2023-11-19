describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays two todo items by default', () => {
    cy.get('svg').should('have.length', 1);

    cy.screenshot('example');
  });
});
