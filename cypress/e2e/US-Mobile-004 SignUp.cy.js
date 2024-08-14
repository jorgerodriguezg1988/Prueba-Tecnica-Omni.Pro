import WebPage from '../fixtures/WebPage';
import { faker } from '@faker-js/faker';
const openUrl = new WebPage();

beforeEach(() => {
  cy.viewport(390, 844);
});

describe('US-Mobile-004 : SignUp', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  });
  
  
  it('US-Mobile-004 : SignUp | TC-001: Ingresar a la pagina web', () => {
    openUrl.openUrl();
  });

  it('US-Mobile-004 : SignUp | TC-002: Aceptar Cookies', () => {
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('svg.style-module_accountIcon__w-9A3').should('be.visible');
  });

  it('US-Mobile-004 : SignUp | TC-003: Click boton Account', () => {
    cy.get('svg[data-automation="style-module_accountIcon__w-9A3 style-module_accountIcon__-VrNY"]').click();
    cy.get('input[data-automation="sign-in-email"]').should('be.visible')
  });

  it('US-Mobile-004 : SignUp | TC-004: Click en creación de nueva cuenta', () => {
    cy.get('.styles-module_link__gsq1z.create-account-link_uLYMM').click();
    cy.get('.page-title_LMQh4').should('be.visible')
  });

  it('US-Mobile-004 : SignUp | TC-005: Diligenciamiento de formulario', () => {
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

  it('US-Mobile-004 : SignUp | TC-006: Suscripcion a boletin via email', () => {
    cy.get('#newsletter').check();
  });

  it('US-Mobile-004 : SignUp | TC-007: Click en Create Account', () => {
    cy.get('.style-module_content__qYLKo').click()
    cy.wait(45000); // 45 segundos para intervención manual en caso de requerir Captcha.

  });

  it('US-Mobile-004 : SignUp | TC-008: Bienvenida', () => {
    cy.get('[data-automation="account-title"]').should('contain.text', 'Welcome');
  });

  

  




  



  
});