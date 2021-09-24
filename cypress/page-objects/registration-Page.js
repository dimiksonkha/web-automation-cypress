export class RegistrationPage{
    
    setFirstName(firstName){
        cy.get('#input-firstname').type(firstName);

    }

    setLastName(lastName){
        cy.get('#input-lastname').type(lastName);
        
    }
    setEmail(email){
        cy.get('#input-email').type(email);
        
    }
    setTelephoneNumber(phoneNumber){
        cy.get('#input-telephone').type(phoneNumber);

    }

    setPassword(password){
        cy.get('#input-password').type(password);
        cy.get('#input-confirm').type(password);

    }

    agreePrivacyPolicy(){
        cy.get('input[type="checkbox"]').check(); 

    }

    continueRegistration(){
        cy.contains('Continue').click();     
    }

    validateSuccessMessage(expectedSuccessMessage){
        cy.get('#content  p:nth-child(3)')
        .should('have.text', expectedSuccessMessage);
    }


    
}