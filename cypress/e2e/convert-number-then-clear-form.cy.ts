describe('Use app', () => {
  it('successfully loads', () => {
    cy.visit('/') 
  })
  it('it can enter numbers and clear the form', () => {
    //if local use one or other
    cy.visit('/');

    cy.get('[data-test=past-entries]').should('contain', 'No history yet');

    const newItem = 1234567;
    const newItem2 = 7654321;

    cy.get('[data-test=size-conv]').as('convertedNumber');
    
    cy.get('[data-test=user-input]').type(`${newItem}`);

    cy.get('@convertedNumber').should('contain', '1.18MB');

    cy.get('[data-test=save-button]').click();
    
    cy.get('[data-test=clear-button]').click();

    cy.get('[data-test=user-input]').type(`${newItem2}`);

    cy.get('@convertedNumber').should('contain', '7.30MB');

    cy.get('[data-test=save-button]').click();

    cy.get('[data-test=past-entries]').should('contain', '1.18MB');
    cy.get('[data-test=past-entries]').should('contain', '7.30MB');

    cy.get('[data-test=clear-button]').click();

    cy.get('@convertedNumber').should('contain', '0.00MB');
  })
})