export class SuccessPage{
    validateSuccessMessage(expectedSuccessMessage){
        cy.get('#content > h1').should('have.text', expectedSuccessMessage);
    }
}