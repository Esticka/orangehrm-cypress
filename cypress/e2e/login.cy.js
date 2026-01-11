describe('Login Feature - OrangeHRM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  // POSITIVE TEST CASE

  it('TC01 - Login dengan username dan password valid', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });

  it('TC02 - Login dengan username huruf kecil (case insensitive)', () => {
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });

  // NEGATIVE TEST CASE

  it('TC03 - Login dengan password salah', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('passwordSalah');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('TC04 - Login dengan username salah', () => {
    cy.get('input[name="username"]').type('Admin123');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('TC05 - Login tanpa username', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.contains('Required').should('be.visible');
  });

  it('TC06 - Login tanpa password', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.contains('Required').should('be.visible');
  });

  it('TC07 - Login tanpa username dan password', () => {
    cy.get('button[type="submit"]').click();

    cy.contains('Required').should('be.visible');
  });

  it('TC08 - Login dengan spasi di username', () => {
    cy.get('input[name="username"]').type(' Admin ');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('TC09 - Login dengan spasi di password', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type(' admin123 ');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('TC10 - Login dengan password huruf besar', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('ADMIN123');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('TC11 - Login dengan karakter spesial', () => {
    cy.get('input[name="username"]').type('@#$%^');
    cy.get('input[name="password"]').type('!@#$%');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('TC12 - Klik login berkali-kali tanpa input', () => {
    cy.get('button[type="submit"]').dblclick();

    cy.contains('Required').should('be.visible');
  });

});