/* eslint-disable no-undef */
describe('All six sections can be visualized ', () => {
  it('Home Section should have a title', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AMAMOS AYUDARTE A CRECER')
  })
})

describe('App should do the main job', () => {
  it('User should send a postulation', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.home__btn__propuesta').click()
    cy.get('#mantine-r1').type('Marlon Castro')
    cy.get('#mantine-r2').type('marlon@castro')
    cy.get('#mantine-r3').type('617111256')
    cy.get('#mantine-r4').type('94836857')
    cy.get('#mantine-r5').select('Masculino')
    cy.get('#mantine-r6').select('Idea')
    cy.get('#mantine-r7').type('CEI website')
    cy.get('#mantine-r8').select('San Pedro Sula')

    cy.get(
      '.mantine-InputWrapper-root > .mantine-Stack-root > .mantine-Radio-radioWrapper > .mantine-qqmv3w > #mantine-r9'
    ).type('Si')

    cy.get('#mantine-r9').click()
    cy.get('#mantine-rb').click()
    cy.get('#mantine-rf').click()
    cy.get('#mantine-ri').click()
    cy.get('.mantine-Group-root').click()
    cy.get('.mantine-qo1k2').click()

    cy.get('.mantine-qo1k2').click()
  })
})
