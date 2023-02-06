/* eslint-disable no-undef */
describe('All six sections can be visualized ', () => {
  it('Home Section should have a title', () => {
    cy.visit(Cypress.env('BASE_URL'))
  })
})

describe('App should do the main job', () => {
  it('User should send a postulation', () => {
    cy.wait(1000)

    cy.get('.home__btn__propuesta').click()
  })
})
