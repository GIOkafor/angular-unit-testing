describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cvr.inecnigeria.org/election_results/index');

    cy.get(':nth-child(2) > :nth-child(1) > a').click();

    cy.get(':nth-child(1) > .sorting_1 > a').click();

    cy.get('embed#plugin');
  })
})