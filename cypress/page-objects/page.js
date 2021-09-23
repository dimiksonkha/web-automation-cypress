export class Page {

    validatePathInPageURl(path){
        cy.location('pathname').should('eq', path); 
    }

    validatePageTitle(title){
        cy.title().should('eq', title);
    }

    validateTextInPageURl(text){
        cy.location('search').should('include', text);
    }

   
         
}