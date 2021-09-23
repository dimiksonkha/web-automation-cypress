export class SearchPage{
    
  addProductToCart(){
    cy.contains('Add to Cart').click();
  }
  
  validateProductQuantityInCart(){
    cy.get('#cart-total').should('contain','1 item(s)');
  }

  validateSearchText(serachText){
    cy.get('#content > h1').should('have.text', serachText);
  }
  
  goCheckoutPage(){
    cy.get('.btn-inverse').click();
    cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"]:nth-child(2)').click();
  }

}