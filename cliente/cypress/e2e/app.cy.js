/* eslint-disable no-undef */
describe('All six sections can be visualized ', () => {
  it('Home Section should have a title', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AMAMOS AYUDARTE A CRECER')
  })
})
