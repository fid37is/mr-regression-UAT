/// <reference types="cypress" />

describe('Verify and Validate users are authenticated to access the MR Web app', () => {

  beforeEach(function() {

    cy.visit('https://mitigateriskuat.baobabtesting.com/')

  })


  it('Validate sign in form fields', () => {
    
    cy.contains('Login').click()

    cy.get('[name="ErrorMsg"]').eq(0).should('have.text', 'Email or username is required')

    cy.get('[name="ErrorMsg"]').eq(1).should('have.text', 'Password is required')

  })


})