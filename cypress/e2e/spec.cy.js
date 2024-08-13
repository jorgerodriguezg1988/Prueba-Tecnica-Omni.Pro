import WebPage from '../fixtures/webPage';
//import { generateUserData } from '../support/dataHelpers';
const openUrl = new WebPage();

beforeEach(() => {
  cy.viewport(1500, 900);
});

describe('template spec', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  });
  
  
  it('Prueba 1', () => {
    
    openUrl.openUrl();
    //cy.wait(2000);
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('a[data-automation="sign-in-link"]')
    cy.get('span[data-automation="sign-in-text"]').click()
    cy.get('h1[data-automation="page-title"]').should('be.visible')
    cy.get('a[data-automation="create-account-link"]').click()
    //cy.wait(2000);
    //cy.get('input[data-automation="firstName"]').type(userData.firstName);
    //cy.get('input[data-automation="lastName"]').type(userData.lastName);
    //cy.get('input[data-automation="emailForm"]').type(userData.email);
    //cy.get('input[data-automation="passwordInput"]').type(userData.password);
  });



});
