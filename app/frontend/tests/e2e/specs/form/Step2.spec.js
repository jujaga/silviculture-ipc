describe('Form - Step 2', () => {
  it('Contains Step 2 contents', () => {
    cy.visit('/');
    cy.contains('span', 'Go to Step 2').click();
    cy.contains('h2', 'Provide your business contact information');
  });

  it('Fills the fields', () => {
    cy.visit('/');
    cy.contains('span', 'Go to Step 2').click();
    // cy.get('label', 'First Name');
  });
});
