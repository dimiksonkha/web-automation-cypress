/// <reference types="cypress" />


it('should login using api request', ()=>{
    
    cy.login("sd@gd.com", "12345");
    // to prove we have a session
    cy.getCookie('OCSESSID').should('exist')    

});