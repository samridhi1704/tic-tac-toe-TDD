/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

*/

import Square from "../../src/Components/Square"

// cypress/integration/ticTacToe.spec.js

describe('Tic Tac Toe Game', () => {
  it('Should render a Board', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.square').should('have.length', 9);
  });

  it("Should allow a player to take a chance", () => {
    cy.visit('http://localhost:3000/');
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).should('have.text', 'X');
  });

  it("Should declare a winner upon winning", () => {
    cy.visit('http://localhost:3000/');
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(6).click();
    cy.get('.square').eq(8).click();
    cy.get('.status').should('contain', 'Winner of the game');
  });

});
