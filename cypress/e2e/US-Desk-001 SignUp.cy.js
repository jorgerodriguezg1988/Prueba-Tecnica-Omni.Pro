import WebPage from '../fixtures/WebPage';
import { faker } from '@faker-js/faker';
const openUrl = new WebPage();

beforeEach(() => {
  cy.viewport(1500, 900);
});

describe('US-Desk-001 : SignUp', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  });
  
  
  it('US-Desk-001 : SignUp | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  });

  it('US-Desk-001 : SignUp | TC-002: Aceptar Cookies', () => {
    cy.get('#onetrust-accept-btn-handler').click()
  });

  it('US-Desk-001 : SignUp | TC-003: Click boton Account', () => {
    cy.get('span[data-automation="sign-in-text"]').click()
  });

  it('US-Desk-001 : SignUp | TC-004: Click en creación de nueva cuenta', () => {
    cy.get('h1[data-automation="page-title"]').should('be.visible')
    cy.get('a[data-automation="create-account-link"]').click()
  });

  it('US-Desk-001 : SignUp | TC-005: Diligenciamiento de formulario', () => {
    cy.get('h1[data-automation="page-title"]').should('be.visible')
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomEmail = faker.internet.email();
    const randomPass = faker.internet.password() + 'Aa1!';
    cy.get('input[data-automation="firstName"]').type(randomFirstName)
    cy.wait(50);
    cy.get('input[data-automation="lastName"]').type(randomLastName)
    cy.wait(50);
    cy.get('input[data-automation="emailForm"]').type(randomEmail)
    cy.wait(50);
    cy.get('input[data-automation="passwordInput"]').type(randomPass)
    cy.wait(50);
  });

  it('US-Desk-001 : SignUp | TC-006: Suscripcion a boletin via email', () => {
    cy.get('input[data-automation="newsletterCheckbox"]').check()
  });

  //Advertencia: Requiere intervencion manual para paso de Captcha. 
  it('US-Desk-001 : SignUp | TC-007: Click en Create Account', () => {
    cy.get('button[data-automation="createAccountButton"]').click()
    cy.wait(45000); // 45 segundos para intervención manual en caso de requerir Captcha.
  });

  it('US-Desk-001 : SignUp | TC-008: Bienvenida', () => {
    //cy.get('._13V0r').should('be.visible')
    cy.contains('span', 'Hi')
    
  });

  

});