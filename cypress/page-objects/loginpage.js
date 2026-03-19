class LoginPage {
  get emailInput() { return cy.get('input[data-qa="login-email"]'); }
  get passwordInput() { return cy.get('input[data-qa="login-password"]'); }
  get loginButton() { return cy.get('button[data-qa="login-button"]'); }
  
  get logoutButton() { return cy.contains('Logout'); }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  logout() {
    this.logoutButton.click();
  }
}

export default new LoginPage();

/* BACKUP : version using more stable XPath
class LoginPage {
  get emailInput() { return cy.xpath('//input[@data-qa="login-email"]'); }
  get passwordInput() { return cy.xpath('//input[@data-qa="login-password"]'); }
  get loginButton() { return cy.xpath('//button[@data-qa="login-button"]'); }
  get logoutButton() { return cy.contains('Logout'); }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  logout() {
    this.logoutButton.click();
  }
}

export default new LoginPage();*/
