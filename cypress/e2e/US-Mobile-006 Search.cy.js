import WebPage from '../fixtures/WebPage';
const openUrl = new WebPage();

beforeEach(() => {
  cy.viewport(390, 844);
});

describe('US-Mobile-006 : Funcionamiento del buscador', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  });
  
  
  it('US-Mobile-006 : Search | TC-001: Pagina principal y aceptar Cookies', () => {
    openUrl.openUrl();
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('svg.style-module_accountIcon__w-9A3').should('be.visible');
  });

  it('US-Mobile-006 : Search | TC-002: Escribir en buscador y confirmar menú desplegable', () => {
    cy.get('input[data-automation="x-search-input"]').type('laptop')
    cy.get('a[href="en-ca/search?search=laptop"] strong').should('be.visible')
  });

  it('US-Mobile-006 : Search | TC-003: Click en botón de busqueda (lupa)', () => {
    cy.get('.style-module_blue__G79ca.style-module_searchIcon__30piC.style-module_icon__JRetG').click();
    cy.get('.x-crumb').should('be.visible')
  });

  it('US-Mobile-006 : Search | TC-004: Seleccionar primer elemento', () => {
    cy.get('section#filterBar').click()
    cy.get('div.style-module_headerContainer__Himht div').eq(0).should('be.visible')
  });

  it('US-Mobile-006 : Search | TC-005: Clic en Carrito de compras', () => {
    cy.get('div.style-module_headerContainer__Himht div').eq(0).click()
    cy.wait(5000)
  });  
});