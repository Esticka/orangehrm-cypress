import LoginPage from '../../pages/LoginPage';

describe('Login Feature OrangeHRM - POM', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('TC01 - Login dengan username dan password valid', () => {
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.assertLoginSuccess();
  });

  it('TC02 - Login dengan username huruf kecil', () => {
    LoginPage.inputUsername('admin');
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.assertLoginSuccess();
  });

  it('TC03 - Login dengan password salah', () => {
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword('passwordSalah');
    LoginPage.clickLogin();
    LoginPage.assertInvalidCredentials();
  });

  it('TC04 - Login dengan username salah', () => {
    LoginPage.inputUsername('Admin123');
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.assertInvalidCredentials();
  });

  it('TC05 - Login tanpa username', () => {
    LoginPage.inputUsername(null);
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.assertRequiredField();
  });

  it('TC06 - Login tanpa password', () => {
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword(null);
    LoginPage.clickLogin();
    LoginPage.assertRequiredField();
  });

  it('TC07 - Login tanpa username dan password', () => {
    LoginPage.clickLogin();
    LoginPage.assertRequiredField();
  });

  it('TC08 - Login dengan spasi di username', () => {
    LoginPage.inputUsername(' Admin ');
    LoginPage.inputPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.assertInvalidCredentials();
  });

  it('TC09 - Login dengan spasi di password', () => {
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword(' admin123 ');
    LoginPage.clickLogin();
    LoginPage.assertInvalidCredentials();
  });

  it('TC10 - Login dengan password huruf besar', () => {
    LoginPage.inputUsername('Admin');
    LoginPage.inputPassword('ADMIN123');
    LoginPage.clickLogin();
    LoginPage.assertInvalidCredentials();
  });

  it('TC11 - Login dengan karakter spesial', () => {
    LoginPage.inputUsername('@#$%^');
    LoginPage.inputPassword('!@#$%');
    LoginPage.clickLogin();
    LoginPage.assertInvalidCredentials();
  });

  it('TC12 - Klik login berkali-kali tanpa input', () => {
    LoginPage.doubleClickLogin();
    LoginPage.assertRequiredField();
  });

});