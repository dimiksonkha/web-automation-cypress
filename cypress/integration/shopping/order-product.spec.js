/// <reference types="cypress" />
import {HomePage} from "../../page-objects/home-Page";
import {SearchPage} from "../../page-objects/search-Page";
import {CheckoutPage} from "../../page-objects/checkout-Page";      


describe('Order a product from store as guest customer', ()=>{

    const homePage = new HomePage();
    const searchPage = new SearchPage();
    const checkoutPage = new CheckoutPage();

    it('should visit shopping page', ()=>{
        
        // Vist Home Page then verify home page
        homePage.goHome();
        cy.location('pathname').should('eq','/'); 
        cy.title().should('eq', 'Your Store');  
    });
    
    it('should search a product', ()=>{
        
        //Search a Product {iPhone} then verify product search page 
        homePage.searchProduct();
        cy.get('#content > h1').should('have.text', "Search - iPhone");
        cy.location('search').should('include', 'iPhone');
        
    });
    
    it('should add a product to cart', ()=>{
        
        //Add product to cart
        searchPage.addProductToCart();
        cy.get('#cart-total').should('contain','1 item(s)'); 
        
        
    });
    
    
    it('should be able to got checkout page', ()=>{

        //Go to checkout page 
        searchPage.goCheckoutPage();
        cy.location('search').should('include', 'checkout/checkout')
        cy.title().should('eq', 'Checkout');
        
    
    });
    
     it('should be able order as guest', ()=>{
    
        //Continue as Guest Customer
        checkoutPage.clickGuestCheckout();
        checkoutPage.clickContinueAccountButton(); 
        
        //Billing Information
        checkoutPage.setBillingFirstName();
        checkoutPage.setBillingLastName();
        checkoutPage.setBillingEmail();
        checkoutPage.setBillingPhoneNumebr();
        checkoutPage.setBillingAddressOne();
        checkoutPage.setBillingCity();
        checkoutPage.setBillingPostcode();
        checkoutPage.selectBillingCountry();
        checkoutPage.selectBillingState();
        checkoutPage.clickContinueBillingInfoButton();

        //Continue Delivery Method
        checkoutPage.continueDeliveryMethod();
    
        //Continue Payment Method
        checkoutPage.continuePaymentMethod();
    
        //Confirm Order
        checkoutPage.confirmOrder();
        cy.get('#content > h1').should('have.text','Your order has been placed!');
    
     });
});