export class HomePage{
    goHome(){
        cy.visit("https://opencart.abstracta.us/");  
    }

    searchProduct(productName){
        cy.get('#search').type(productName + "{enter}"); 
    }


}