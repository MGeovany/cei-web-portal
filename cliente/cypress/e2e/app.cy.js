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
      '.mantine-Stack-root > .mantine-Radio-root > .mantine-15e18iv > .mantine-dwgv7v > #mantine-ra'
    ).click()

    cy.get(
      '.mantine-Stack-root > .mantine-Radio-root > .mantine-15e18iv > .mantine-dwgv7v > #mantine-ra'
    ).type('Si')

    cy.get(
      '.mantine-Stack-root > .mantine-Radio-root > .mantine-15e18iv > .mantine-dwgv7v > #mantine-rd'
    ).click()

    cy.get(
      '.mantine-Stack-root > .mantine-Radio-root > .mantine-15e18iv > .mantine-dwgv7v > #mantine-rd'
    ).type('Si')

    cy.get(
      '.mantine-Stack-root > .mantine-Radio-root > .mantine-15e18iv > .mantine-dwgv7v > #mantine-rg'
    ).click()

    cy.get(
      '.mantine-Stack-root > .mantine-Radio-root > .mantine-15e18iv > .mantine-dwgv7v > #mantine-rg'
    ).type('comercial')

    cy.get(
      '.mantine-qqmv3w > .mantine-Input-wrapper > .mantine-MultiSelect-input > .mantine-g4bz4 > #mantine-rl'
    ).click()

    cy.get(
      '.postulate-grid-item > .mantine-Group-root > .mantine-UnstyledButton-root > .mantine-3xbgk5 > .mantine-qo1k2'
    ).click()

    cy.get(
      '.postulate-grid-item > .mantine-Group-root > .mantine-UnstyledButton-root > .mantine-3xbgk5 > .mantine-qo1k2'
    ).click()
  })
})
