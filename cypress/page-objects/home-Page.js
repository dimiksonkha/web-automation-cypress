export class HomePage{
    goHome(){
        cy.visit("https://opencart.abstracta.us/");  
    }

    searchProduct(){
        cy.get('#search').type("iPhone{enter}"); 
    }


}