/// <reference types="cypress" />

import { LoginPage } from "../../page-objects/login-Page";
import { Page } from "../../page-objects/page";

describe('Login', ()=>{
    const page = new Page();
    const loginPage = new LoginPage();
    const email = "sd@gd.com";
    const password = "12345";

    it('should login using api request', ()=>{
    
        cy.login(email, password);
        // to prove we have a session
        cy.getCookie('OCSESSID').should('exist')    
    
    });
    
    it('should login using ui', ()=>{
        
        page.visitLoginPage();
        loginPage.setEmail(email);
        loginPage.setPassword(password);
        loginPage.clickLoginButton();
        loginPage.validateSuccessfullLogin();

    });
});