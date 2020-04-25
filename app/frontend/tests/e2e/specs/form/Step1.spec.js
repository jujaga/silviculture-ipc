describe('Form - Step 1', () => {
  it('Contains Step 1 contents', () => {
    cy.visit('/');
    cy.contains('h2', 'Protect silviculture employees, contractors, and employers, during the COVID-19 pandemic');
    cy.contains('h3', 'This attestation form must be completed once for each worksite');
    cy.contains('a', 'Download PDF').and('have.attr', 'href', 'https://www2.gov.bc.ca/assets/gov/health/about-bc-s-health-care-system/office-of-the-provincial-health-officer/covid-19/covid-19-pho-guidance-work-camps-silviculture.pdf')
  });
});
