// Save cookies and localStorage
Cypress.Commands.add('saveCookies', () => {
    cy.getCookies().then(cookies => {
      cy.wrap(cookies).as('savedCookies');
    });
  });
  
  Cypress.Commands.add('saveLocalStorage', () => {
    cy.window().then(win => {
      const items = Object.keys(win.localStorage).map(key => {
        return {
          key,
          value: win.localStorage.getItem(key)
        };
      });
      cy.wrap(items).as('savedLocalStorage');
    });
  });
  
  // Restore cookies and localStorage
  Cypress.Commands.add('restoreCookies', () => {
    cy.get('@savedCookies').then(cookies => {
      cookies.forEach(cookie => {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          path: cookie.path
        });
      });
    });
  });
  
  Cypress.Commands.add('restoreLocalStorage', () => {
    cy.get('@savedLocalStorage').then(items => {
      items.forEach(item => {
        cy.window().then(win => {
          win.localStorage.setItem(item.key, item.value);
        });
      });
    });
  });