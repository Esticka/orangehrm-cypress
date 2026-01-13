describe('Login Feature - OrangeHRM (Quiz 3 + Intercept)', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  // TC01
  it('TC01 - Login dengan username dan password valid', () => {
    cy.intercept('POST', '**/auth/validate').as('loginValid');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginValid').then((intercept) => {
      expect([200, 302]).to.include(intercept.response.statusCode);
    });

    cy.url().should('include', '/dashboard');
  });

  // TC02
  it('TC02 - Login dengan username huruf kecil', () => {
    cy.intercept('POST', '**/auth/validate').as('loginLowercase');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginLowercase').then((intercept) => {
      expect([200, 302]).to.include(intercept.response.statusCode);
    });

    cy.url().should('include', '/dashboard');
  });

  // TC03
  it('TC03 - Login dengan password salah', () => {
    cy.intercept('POST', '**/auth/validate').as('wrongPassword');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('passwordSalah');
    cy.get('button[type="submit"]').click();

    cy.wait('@wrongPassword').its('response.statusCode').should('eq', 302);
    cy.contains('Invalid credentials').should('be.visible');
  });

  // TC04
  it('TC04 - Login dengan username salah', () => {
    cy.intercept('POST', '**/auth/validate').as('wrongUsername');

    cy.get('input[name="username"]').type('Admin123');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@wrongUsername').its('response.statusCode').should('eq', 302);
    cy.contains('Invalid credentials').should('be.visible');
  });

  // TC05
  it('TC05 - Login tanpa username', () => {
    cy.intercept('POST', '**/auth/validate').as('noUsername');

    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.contains('Required').should('be.visible');
  });

  // TC06
  it('TC06 - Login tanpa password', () => {
    cy.intercept('POST', '**/auth/validate').as('noPassword');

    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.contains('Required').should('be.visible');
  });

  // TC07
  it('TC07 - Login tanpa username dan password', () => {
    cy.intercept('POST', '**/auth/validate').as('emptyLogin');

    cy.get('button[type="submit"]').click();
    cy.contains('Required').should('be.visible');
  });

  // TC08
  it('TC08 - Login dengan spasi di username', () => {
    cy.intercept('POST', '**/auth/validate').as('spaceUsername');

    cy.get('input[name="username"]').type(' Admin ');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@spaceUsername').its('response.statusCode').should('eq', 302);
    cy.contains('Invalid credentials').should('be.visible');
  });

  // TC09
  it('TC09 - Login dengan spasi di password', () => {
    cy.intercept('POST', '**/auth/validate').as('spacePassword');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type(' admin123 ');
    cy.get('button[type="submit"]').click();

    cy.wait('@spacePassword').its('response.statusCode').should('eq', 302);
    cy.contains('Invalid credentials').should('be.visible');
  });

  // TC10
  it('TC10 - Login dengan password huruf besar', () => {
    cy.intercept('POST', '**/auth/validate').as('uppercasePassword');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('ADMIN123');
    cy.get('button[type="submit"]').click();

    cy.wait('@uppercasePassword').its('response.statusCode').should('eq', 302);
    cy.contains('Invalid credentials').should('be.visible');
  });

  // TC11
  it('TC11 - Login dengan karakter spesial', () => {
    cy.intercept('POST', '**/auth/validate').as('specialChar');

    cy.get('input[name="username"]').type('@#$%^');
    cy.get('input[name="password"]').type('!@#$%');
    cy.get('button[type="submit"]').click();

    cy.wait('@specialChar').its('response.statusCode').should('eq', 302);
    cy.contains('Invalid credentials').should('be.visible');
  });

  // TC12
  it('TC12 - Klik login berkali-kali tanpa input', () => {
    cy.intercept('POST', '**/auth/validate').as('multiClick');

    cy.get('button[type="submit"]').dblclick();
    cy.contains('Required').should('be.visible');
  });

});
