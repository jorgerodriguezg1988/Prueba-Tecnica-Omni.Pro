import WebPage from '../fixtures/WebPage';
const openUrl = new WebPage();
const firstSteps = new WebPage();

beforeEach(() => {
    cy.viewport(1500, 900);
  });

  describe('US-Desk-002 : Simulación de compra de un celular', () => {
    before(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
    });

    it('US-Desk-002 : Shop | TC-001: Pagina principal y aceptar Cookies', () => {
      openUrl.openUrl();
      cy.get('#onetrust-accept-btn-handler').click()
    });

    it('US-Desk-002 : Shop | TC-002: Menú Cellphones', () => {
      cy.get('span[data-automation="x-ultimate-smartphone sale"]').click()
      cy.get('a[href*="/en-ca/category/iphone/"]').should('be.visible')
    });

    it('US-Desk-002 : Shop | TC-003: Unlocked Phones On Sale', () => {
      cy.get('a[href*="/en-ca/collection/unlocked-phones-on-sale/"]').click()
      cy.contains('h1', 'Unlocked Phones On Sale').should('be.visible')
    });

    it('US-Desk-002 : Shop | TC-004: IPhone', () => {
      cy.get('div[data-automation="x-navigationListSimple"] div').eq(6).click()
      cy.contains('h1', 'Unlocked Phones On Sale').should('be.visible')
    });

    it('US-Desk-002 : Shop | TC-005: Get Shiped Checkbox', () => {
      cy.wait(3000)
      cy.get('#facetFilter-ShippingandPickup_GetitShipped').check()
    });

    it('US-Desk-002 : Shop | TC-006: Seleccionar Celular', () => {
      cy.get('div[data-automation="productItemName"]').eq(5).click()
      cy.get('div.addToCartLabel_YZaVX span').eq(0).should('be.visible')
    });

    it('US-Desk-002 : Shop | TC-007: Click en carrito de compra', () => {
      cy.get('div.addToCartLabel_YZaVX span').eq(0).click()
      cy.wait(10000)
      //Carrito de compras restringido para pruebas de automatización.
    });

    

    



    

});