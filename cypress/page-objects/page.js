export class Page {

    visitHome(){
        cy.visit("/");  
    }

    visitRegistrationPage(){
        cy.visit('/index.php?route=account/register');
    }

    visitLoginPage(){
        cy.visit('/index.php?route=account/login');
    }

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