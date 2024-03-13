/// <reference types="Cypress" />

describe('Verify and Validate users are authenticated to access the MR Web app', () => {

    beforeEach(function() {

      cy.visit('https://mitigateriskuat.baobabtesting.com/')

    })


    it('Validate sign in form fields', () => {
      
      cy.contains('Login').click()

      cy.get('[name="ErrorMsg"]').eq(0).should('have.text', 'Email or username is required')

      cy.get('[name="ErrorMsg"]').eq(1).should('have.text', 'Password is required')

    })  
    
    it('Sign in with an invalid email/username and invalid password', () => {
      
      cy.get('form').find('[data-testid="Email"]').type('invalid@ail.')
      cy.get('form').find('[name="password"]').type('passw')
      cy.contains('Login').click().wait(2000)
      cy.get('.Toastify__toast-body').should(
        'have.text', 'There was a problem logging in, Check your email/password or contact Admin')

    })  
    
    it('Sign in with an valid email/username and invalid password', () => {
      
      cy.get('form').find('[data-testid="Email"]').type('phydelis@gmail.com')
      cy.get('form').find('[name="password"]').type('passw')
      cy.contains('Login').click().wait(2000)
      cy.get('.Toastify__toast-body').should(
        'have.text', 'There was a problem logging in, Check your email/password or contact Admin')

    }) 
    
    it('Sign in with an invalid email/username and valid password', () => {
      
      cy.get('form').find('[data-testid="Email"]').type('phydelis@.com')
      cy.get('form').find('[name="password"]').type('1234Phyl!')
      cy.contains('Login').click().wait(2000)
      cy.get('.Toastify__toast-body').should(
        'have.text', 'There was a problem logging in, Check your email/password or contact Admin')

    })

    it('Verify password is 8 character max, meets criteria and successful Login', () => {
      cy.log('password criteria was met');
      cy.get('form').find('[data-testid="Email"]').type(
        'mistarfid+212023@gmail.com')
      cy.get('form').find('[name="password"]').type(
        '1234Phyl!').invoke('val').should('have.length', 9)
        cy.log('password was was 8 min characters');
        const password = '1234Phyl!';
        const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        expect(pattern.test(password)).to.be.true;

        cy.contains('Login').click()

        cy.get('.Toastify__toast-body').should('have.text', 'You have successfully logged in')
        cy.log('Login was successful');

    })

    it('Verify Logout button works', () => {
      cy.get('form').find('[data-testid="Email"]').type(
        'mistarfid+212023@gmail.com')
      cy.get('form').find('[name="password"]').type(
        '1234Phyl!')
      cy.contains('Login').click().wait(5000)
      
      cy.get('.Toastify__toast-body').should('have.text', 'You have successfully logged in')
      cy.log('Login was successful');

      cy.contains('Logout').click()
      cy.log('User was logged out')

    })
    
    it('Verify forgot password function works', () => {

      cy.contains('Forgot password?').click()
      cy.get('form').find('[label="Email"]').type(
        'fidelis+123@baobabpartners.com')

      cy.contains('Continue').click().wait(2000)

      cy.contains('Proceed to login').should('have.text', "Proceed to login")

    })
    
    it('Verify user is able to update own password', () => {

      cy.get('form').find('[data-testid="Email"]').type(
        'auto-emailaideyu@yopmail.com')
      cy.get('form').find('[name="password"]').type(
        '1234Papa!')
      cy.contains('Login').click().wait(2000)
      cy.contains('Settings').click()
      cy.contains('Password').click()
      cy.get('[name="oldPassword"]').type('1234Papa!')
      cy.get('[name="newPassword"]').type('1234Papi!')
      cy.get('[name="confirmPassword"]').type('1234Papi!')

      cy.contains('Update').click()

      cy.get('.Toastify__toast-body').should('have.text', 'Password was reset successfully!!!')
      cy.log('Password reset was successful');
      
    })



})