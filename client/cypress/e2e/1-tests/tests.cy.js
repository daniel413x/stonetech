/* eslint-disable no-undef */

import { clientUrl, serverUrl } from '../../support/commands';

/// <reference types="cypress" />

describe('stonetech app', () => {
  beforeEach(() => {
    // cy.request('POST', `${serverUrl}/api/testing/reset`);
  });
  describe('as a guest', () => {
    beforeEach(() => {
      cy.visit(clientUrl);
      cy.get('.slider');
    });
    describe('using the slider', () => {
      beforeEach(() => {
        cy.get('.slider')
          .find('.control-panel')
          .find('.page-numbers')
          .find('.current-page')
          .as('counter');
        cy.get('.slider')
          .find('.control-panel')
          .find('.buttons')
          .find('.arrow-right')
          .as('next');
        cy.get('.slider')
          .find('.control-panel')
          .find('.buttons')
          .find('.arrow-left')
          .as('prev');
        cy.get('.slider')
          .find('.control-panel')
          .find('.scroll-bar-progress')
          .as('scrollBarProgress');
      });
      it('initializes with the first slider image properly indicated in the counter', () => {
        cy.get('@counter')
          .should('contain.text', '1');
      });
      it('scrolls through each image while properly tracking the page number and scroll bar progress and blocking buttons at their page limits', () => {
        cy.wait(2000);
        cy.get('@next')
          .click();
        cy.get('@counter')
          .should('contain.text', '2');
        cy.get('@scrollBarProgress')
          .should('have.class', 'middle');
        cy.wait(2000);
        cy.get('@next')
          .click();
        cy.get('@counter')
          .should('contain.text', '3');
        cy.get('@scrollBarProgress')
          .should('have.class', 'end');
        cy.get('@next')
          .should('have.class', 'blocked');
        cy.wait(2000);
        cy.get('@prev')
          .click();
        cy.get('@counter')
          .should('contain.text', '2');
        cy.get('@scrollBarProgress')
          .should('have.class', 'middle');
        cy.wait(2000);
        cy.get('@prev')
          .click();
        cy.get('@counter')
          .should('contain.text', '1');
        cy.get('@prev')
          .should('have.class', 'blocked');
        cy.get('@scrollBarProgress')
          .should('not.have.css', 'middle');
        cy.get('@scrollBarProgress')
          .should('not.have.css', 'end');
        // .should('contain.text', '1');
      });
      it.only('blocks the user from scrolling through too fast and causing issues', () => {
        cy.wait(2000);
        cy.get('@next')
          .click();
        cy.wait(200);
        cy.get('@next')
          .click();
        cy.wait(200);
        cy.get('@next')
          .click();
        cy.get('@counter')
          .should('contain.text', '2');
      });
    });
  });
});
