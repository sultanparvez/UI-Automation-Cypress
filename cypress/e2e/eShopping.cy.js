/// <reference types="cypress"/>
import "cypress-localstorage-commands"
import  { Behaviours , Assertions} from '../pages/sauceDemo';

const behaviour = new Behaviours()
const check = new Assertions()

describe("E-Shopping",()=>{
    beforeEach(() => {
      cy.login()
      behaviour.timeout(3000)
    })

    it("login Validation",()=>{
        behaviour.screenshot('HomePage');
        check.containCheck('.title','Products')
  })
 
    it ("Product Selection $ Checkout",()=>{
        behaviour.addProduct("Sauce Labs Backpack");
        behaviour.timeout(1000)
        behaviour.addProduct("Sauce Labs Bolt T-Shirt");
        behaviour.timeout(1000)
        // behaviour.addProduct("Test.allTheThings() T-Shirt (Red)").debug();
        // behaviour.timeout(2000)
        // behaviour.click('button[name="remove-Test.allTheThings() T-Shirt (Red)"]')
        check.visibilityCheck("[data-test='product_sort_container']")
        behaviour.click('.shopping_cart_badge')
        behaviour.timeout(2000) 
        behaviour.screenshot('Checkout Page');
        behaviour.timeout(3000) 
        behaviour.click("[data-test='checkout']")
        check.containCheck('.title','Checkout: Your Information')
        behaviour.enterValues("#first-name","ABC")
        behaviour.enterValues("#last-name","XYZ")
        behaviour.enterValues("#postal-code","987123")
        behaviour.screenshot('Address');
        behaviour.click("[data-test='continue']")
        check.containCheck('.title','Checkout: Overview')
        behaviour.click('[data-test="finish"]')
        check.visibilityCheck(".pony_express")
    })
})
