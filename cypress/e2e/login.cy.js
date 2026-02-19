/* PRVÝ PROJEKT
describe('Login Test', () => {

  it('Should login successfully', () => {
    cy.visit('/login')

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('Secure Area')
  })

  it('Should show error with wrong password', () => {
  cy.visit('/login')

  cy.get('#username').type('tomsmith')
  cy.get('#password').type('wrong')
  cy.get('button[type="submit"]').click()

  cy.contains('Your password is invalid!')
})
    it('API test - get users', () => {
  cy.request('GET', 'https://crudcrud.com/api/6715cb9373e24df583cf41e04d29ed1b/users')
    .its('status')
    .should('eq', 200)
})


})*/
describe('User Login Flow', () => {

  beforeEach(() => {
    cy.visit('/login')
    cy.contains('Signup / Login').click()
  })

  it('Login with valid credentials', () => {
    cy.fixture('user').then((user) => {

      cy.xpath('//input[@data-qa="login-email"]').type(user.email)
      cy.xpath('//input[@data-qa="login-password"]').type(user.password)
      cy.xpath('//button[@data-qa="login-button"]').click()

      cy.contains('Logged in as')
    })
  })

  it('Logout after login', () => {
    cy.fixture('user').then((user) => {

      cy.xpath('//input[@data-qa="login-email"]').type(user.email)
      cy.xpath('//input[@data-qa="login-password"]').type(user.password)
      cy.xpath('//button[@data-qa="login-button"]').click()

      cy.contains('Logout').click()
      cy.contains('Login to your account')
    })
  })

})
/*describe('User flow', () => {

  it('Login flow', () => {
    cy.visit('/login')

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button').click()

    cy.url().should('include', '/secure')
  })

})
 */


