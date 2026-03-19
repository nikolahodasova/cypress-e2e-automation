import loginpage from "../page-objects/loginpage"

describe('Negative Login Test', () => {

  it('Login with invalid credentials', () => {
    cy.visit('/login')

    loginpage.login('wrong@test.com', 'wrongpas');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })
  
})