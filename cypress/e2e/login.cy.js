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

