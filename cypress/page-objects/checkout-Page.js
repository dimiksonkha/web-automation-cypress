export class CheckoutPage{
  
  clickGuestCheckout(){
    cy.get(':nth-child(1) > :nth-child(4) > label').click();
  }
  
  clickContinueAccountButton(){
    cy.get('#button-account').click(); 
  }

  setBillingFirstName(){
    cy.get('#input-payment-firstname').type('Test');

  }
  setBillingLastName(){
    cy.get('#input-payment-lastname').type('Name');
  }

  setBillingEmail(){
    cy.get('#input-payment-email').type('test.email@random.com');
  }

  setBillingPhoneNumebr(){
    cy.get('#input-payment-telephone').type("+880125487");

  }

  setBillingAddressOne(){
    cy.get('#input-payment-address-1').type("address1");
  }

  setBillingCity(){
    cy.get('#input-payment-city').type("Florida");

  }

  setBillingPostcode(){
    cy.get('#input-payment-postcode').type("12345");

  }

  selectBillingCountry(){
    cy.get('#input-payment-country').select('United States');
  }
  selectBillingState(){
    cy.get('#input-payment-zone').select('Florida')
  }

  clickContinueBillingInfoButton(){
      
      cy.get('#button-guest').click();
  }

  continueDeliveryMethod(){
       cy.get('#button-shipping-method').click();
  }

  continuePaymentMethod(){
    cy.get('.pull-right > [type="checkbox"]').click();
    cy.get('#button-payment-method').click();
  }
  confirmOrder(){
    cy.get('#button-confirm').click();
  }



}