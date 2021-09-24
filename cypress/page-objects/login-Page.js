export class LoginPage{
    
    setEmail(email){
        cy.get('#input-email').type(email);
    }

    setPassword(password){
        cy.get('#input-password').type(password);
    }

    clickLoginButton(){
        cy.get('input[type="submit"]').click(); 
    }

    validateSuccessfullLogin(){
        cy
        .get('#content > h2:nth-child(1)')
        .should('have.text', "My Account");

    }


    

}