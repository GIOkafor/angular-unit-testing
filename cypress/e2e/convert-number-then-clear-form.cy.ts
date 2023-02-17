describe('Use app', () => {
  it('successfully loads', () => {
    cy.visit('/') 
  })
  it('it can enter numbers and clear the form', () => {
    //if local use one or other
    cy.visit('/');

    const newItem = 1234567;
    
    cy.get('[data-test=user-input]').type(`${newItem}`);

    cy.get('[data-test=size-conv]').as('convertedNumber');

    cy.get('@convertedNumber').should('contain', '1.18MB');

    cy.get('[data-test=clear-button]').click();

    cy.get('@convertedNumber').should('contain', '0.00MB');
  })
})