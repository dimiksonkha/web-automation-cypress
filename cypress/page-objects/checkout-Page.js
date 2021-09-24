  export class CheckoutPage{
    
    clickGuestCheckout(){
      cy.get(':nth-child(1) > :nth-child(4) > label').click();
    }
    
    clickContinueAccountButton(){
      cy.get('#button-account').click(); 
    }

    setBillingFirstName(firstName){
      cy.get('#input-payment-firstname').type(firstName);

    }
    setBillingLastName(lastName){
      cy.get('#input-payment-lastname').type(lastName);
    }

    setBillingEmail(email){
      cy.get('#input-payment-email').type(email);
    }

    setBillingPhoneNumebr(phoneNumber){
      cy.get('#input-payment-telephone').type(phoneNumber);

    }

    setBillingAddressOne(address1){
      cy.get('#input-payment-address-1').type(address1);
    }

    setBillingCity(city){
      cy.get('#input-payment-city').type(city);

    }

    setBillingPostcode(postcode){
      cy.get('#input-payment-postcode').type(postcode);

    }

    selectBillingCountry(country){
      cy.get('#input-payment-country').select(country);
    }
    selectBillingState(state){
      cy.get('#input-payment-zone').select(state)
    }

    clickContinueBillingInfoButton(){
        if(cy.getCookie('OCSESSID').should('exist')){
          cy.get('#button-payment-address').click();
         this.continueShippingInformation();
          

        }else{
          cy.get('#button-guest').click(); 
        }
        
        
    }
    continueShippingInformation(){
      cy.get('#button-shipping-address').click();

    }

    continueDeliveryMethod(){
      
        
          cy.get('#button-shipping-method').click();  
        
    }

    continuePaymentMethod(){
      cy.get('[type="checkbox"]').check();
      cy.get('#button-payment-method').click();
    }
    confirmOrder(){
      cy.get('#button-confirm').click();
    }



  }