describe('Form - Step 1', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h2', 'Protect silviculture employees, contractors, and employers, during the COVID-19 pandemic');
  });
});
