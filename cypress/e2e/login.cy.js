import loginPage from '../page-objects/loginpage.js';

describe('User Login Flow', () => {

  beforeEach(() => {
    cy.visit('/login')
    cy.contains('Signup / Login').click()
  })

  it('Login with valid credentials', () => {
    cy.fixture('user').then((user) => {

      loginPage.login(user.email, user.password);
    })

    cy.contains('Logged in as').should('be.visible');
  })

  it('Logout after login', () => {
    cy.fixture('user').then((user) => {

      loginPage.login(user.email, user.password);
    })

    loginPage.logout();
    cy.contains('Login to your account').should('be.visible');
  })

})

