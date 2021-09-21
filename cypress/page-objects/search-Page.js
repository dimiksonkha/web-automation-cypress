export class SearchPage{
    
  addProductToCart(){
    cy.contains('Add to Cart').click();
  }

  goCheckoutPage(){
    cy.get('.btn-inverse').click();
    cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"]:nth-child(2)').click();
  }

}