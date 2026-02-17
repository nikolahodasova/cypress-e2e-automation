describe('API Tests', () => {

  it('Get products list', () => {
    cy.request('GET', 'https://automationexercise.com/api/productsList')
      .its('status')
      .should('eq', 200)
  })

})