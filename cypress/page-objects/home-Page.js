export class HomePage{
    visitHome(){
        cy.visit("/");  
    }

    searchProduct(productName){
        cy.get('#search').type(productName + "{enter}"); 
    }


}