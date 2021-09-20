/// <reference types="cypress" />


describe('Order a product from store', ()=>{
    it('should visit shopping page', ()=>{
    
    
        // Vist Home Page then verify home page
        cy.visit("https://opencart.abstracta.us/"); 
        cy.location('pathname').should('eq','/'); 
        cy.title().should('eq', 'Your Store');  
    });
    
    it('should search a product', ()=>{
        
        //Search a Product {iPhone} then verify product search page 
        cy.get('#search').type("iPhone{enter}"); 
        cy.get('#content > h1').should('have.text', "Search - iPhone");
        cy.location('search').should('include', 'iPhone');
        
    });
    
    it('should add a product to cart', ()=>{
        
        //Add product to cart
        cy.contains('Add to Cart').click();
        cy.get('#cart-total').should('contain','1 item(s)'); 
        
        
    });
    
    
    it('should be able to got checkout page', ()=>{

        //Go to checkout page 
        cy.get('.btn-inverse').click();
        cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"]:nth-child(2)').click();
        cy.location('search').should('include', 'checkout/checkout')
        cy.title().should('eq', 'Checkout');
        
    
    });
    
     it('should be able order as guest', ()=>{
    
        //Customer Information
        cy.get(':nth-child(1) > :nth-child(4) > label').click();
        cy.get('#button-account').click(); 
        cy.get('#input-payment-firstname').type('Test');
        cy.get('#input-payment-lastname').type('Name');
        cy.get('#input-payment-email').type('test.email@random.com');
        cy.get('#input-payment-telephone').type("+880125487");
        cy.get('#input-payment-address-1').type("address1");
        cy.get('#input-payment-city').type("Florida");
        cy.get('#input-payment-postcode').type("12345");
        cy.get('#input-payment-country').select('United States')
        cy.get('#input-payment-zone').select('Florida')
        cy.get('#button-guest').click();
    
        //Delivery Method
        cy.get('#button-shipping-method').click();
    
        //Payment Method
        cy.get('.pull-right > [type="checkbox"]').click();
        cy.get('#button-payment-method').click();
    
        //Confirm Order
        cy.get('#button-confirm').click();
        cy.get('#content > h1').should('have.text','Your order has been placed!');
    
     });
});