/*import WebPage from '../fixtures/WebPage';
const openUrl = new WebPage();

beforeEach(() => {
  cy.viewport(390, 844);
});

describe('US-Mobile-005 : Navegación por menú desplegable', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  });
  
  
  it('US-Mobile-005 : Menú desplegable | TC-001: Pagina principal y aceptar Cookies', () => {
    openUrl.openUrl();
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('svg.style-module_accountIcon__w-9A3').should('be.visible');
  });

  it('US-Mobile-005 : Menú desplegable | TC-002: Menú Cellphones', () => {
    cy.get('.style-module_white__9cE1P.style-module_drawerMenuIcon__kKOon.style-module_icon__JRetG').click()
    cy.get('[data-automation="x-ultimate-smartphone sale"]').click()
    cy.get('.style-module_menuLink__-DPKO').should('be.visible')
  });

  it('US-Mobile-005 : Menú desplegable | TC-003: Unlocked Phones On Sale', () => {
    cy.get('.style-module_white__9cE1P.style-module_drawerMenuIcon__kKOon.style-module_icon__JRetG').click()
    cy.get('[data-automation="x-ultimate-smartphone sale"]').click()
  }); 
});*/