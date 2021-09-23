/// <reference types="cypress" />
import {HomePage} from "../../page-objects/home-Page";
import {SearchPage} from "../../page-objects/search-Page";
import {CheckoutPage} from "../../page-objects/checkout-Page";      
import { Page } from "../../page-objects/page";
import { SuccessPage } from "../../page-objects/success-Page";


describe('Order a product from store as guest customer', ()=>{

    const page = new Page();
    const homePage = new HomePage();
    const searchPage = new SearchPage();
    const checkoutPage = new CheckoutPage();
    const successPage = new SuccessPage();

    it('should visit shopping page', ()=>{
        
        // Vist Home Page then verify home page
        homePage.goHome();
        page.validatePathInPageURl('/');
        page.validatePageTitle('Your Store');
        
    });
    
    it('should search a product', ()=>{
        
        //Search a Product {iPhone} then verify product search page and string 
        homePage.searchProduct('iPhone');
        page.validateTextInPageURl('iPhone');
        searchPage.validateSearchText('Search - iPhone');
        
        
        
    });
    
    it('should add a product to cart', ()=>{
        
        //Add product to cart
        searchPage.addProductToCart();
        searchPage.validateProductQuantityInCart();
         
        
        
    });
    
    
    it('should be able to got checkout page', ()=>{

        //Go to checkout page 
        searchPage.goCheckoutPage();
        page.validateTextInPageURl('checkout/checkout');
        page.validatePageTitle('Checkout');
    
    });
    
     it('should be able order as guest', ()=>{
    
        //Continue as Guest Customer
        checkoutPage.clickGuestCheckout();
        checkoutPage.clickContinueAccountButton(); 
        
        //Billing Information
        checkoutPage.setBillingFirstName("Test");
        checkoutPage.setBillingLastName("Name");
        checkoutPage.setBillingEmail("test@rndm.com");
        checkoutPage.setBillingPhoneNumebr("+88132545");
        checkoutPage.setBillingAddressOne("address1");
        checkoutPage.setBillingCity("Newyork");
        checkoutPage.setBillingPostcode("1212");
        checkoutPage.selectBillingCountry("United States");
        checkoutPage.selectBillingState("Florida");
        checkoutPage.clickContinueBillingInfoButton();

        //Continue Delivery Method
        checkoutPage.continueDeliveryMethod();
    
        //Continue Payment Method
        checkoutPage.continuePaymentMethod();
    
        //Confirm Order
        checkoutPage.confirmOrder();
        successPage.validateSuccessMessage('Your order has been placed!');
        
    
     });
});