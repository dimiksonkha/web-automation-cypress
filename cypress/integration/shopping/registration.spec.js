/// <reference types="cypress" />

import { Page } from "../../page-objects/page";
import { RegistrationPage } from "../../page-objects/registration-Page";
import { generateRandomEmail } from "../../utils/utils";


describe('Shopping user registration',()=>{

    const page = new Page();
    const registrationPage = new RegistrationPage();


    it('should visit registration page', ()=>{
        page.visitRegistrationPage();
        page.validateTextInPageURl('account/register');
        page.validatePageTitle('Register Account');

    });

    it('should register a new custoemr account', ()=>{
        registrationPage.setFirstName("Test");
        registrationPage.setLastName("User");
        registrationPage.setEmail(generateRandomEmail());
        registrationPage.setTelephoneNumber("+8801010101010");
        registrationPage.setPassword("12345");
        registrationPage.agreePrivacyPolicy();
        registrationPage.continueRegistration(); 
        registrationPage.validateSuccessMessage("You will be notified by e-mail once your account has been activated by the store owner.");

    });
});