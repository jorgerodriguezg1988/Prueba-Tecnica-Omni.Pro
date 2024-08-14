import WebPage from '../fixtures/WebPage';
const openUrl = new WebPage();

beforeEach(() => {
    cy.viewport(1500, 900);
  });

  describe('US-Desk-003 : Funcionamiento del buscador', () => {
    before(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
    });

    it('US-Desk-003 : Search | TC-001: Pagina principal y aceptar Cookies', () => {
      openUrl.openUrl();
      cy.get('#onetrust-accept-btn-handler').click();
    });

    it('US-Desk-003 : Search | TC-002: Escribir en buscador y confirmar menú desplegable', () => {
      cy.get('input[data-automation="x-search-input"]').type('laptop')
      cy.get('a[href="en-ca/search?search=laptop"] strong').should('be.visible')
      //cy.wait(3000)
    });

    it('US-Desk-003 : Search | TC-003: Click en botón de busqueda (lupa)', () => {
      cy.get('.style-module_blue__G79ca.style-module_searchIcon__30piC.style-module_icon__JRetG').click();
      cy.get('.title_3A6Uh').should('be.visible')
    });

    it('US-Desk-003 : Search | TC-004: Click en botón de busqueda (lupa)', () => {
      cy.get('.style-module_blue__G79ca.style-module_searchIcon__30piC.style-module_icon__JRetG').click();
      cy.get('.title_3A6Uh').should('be.visible')
    });

    it('US-Desk-003 : Search | TC-005: Filtro: Laptop Windows', () => {
      cy.get('label[for="facetFilter-Categories_WindowsLaptops"]').click()
      cy.get('.x-crumb').should('contain', 'Windows');

    });
});