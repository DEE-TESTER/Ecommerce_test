///<reference types="cypress" />
describe('E-commerce Automation Test', () => {
    it('Searches for a product', () => {
      // Visit the website
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      //what i did here was to get the CSS locator and type in the text field
      cy.get('input[placeholder="Search For Products"]').first().type('Smartphone');
      //here i found the class locator and click on it
      cy.get('.type-text').click()
      



          })
})