/// <reference types="cypress"/>
import "cypress-localstorage-commands"
import  {loginPage, Behaviours , Assertions} from '../pages/sauceDemo';

const login= new loginPage()
const behaviour = new Behaviours()
const check = new Assertions()

describe("E-Shopping",()=>{
    beforeEach(() => {
    cy.fixture('Credentials').then(Data =>{
      login.navigate('/');
      login.enterUsername(Data.name)
      login.enterPassword(Data.password)
      login.clickSubmit();
      })
      behaviour.timeout(3000)
    })

    it("login Validation",()=>{
        behaviour.screenshot('HomePage');
        check.containCheck('.title','Products')
  })
    it ("Product Selection $ Checkout",()=>{
        behaviour.click('button[name="add-to-cart-sauce-labs-backpack"]')
        behaviour.timeout(1000)
        behaviour.click('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]') 
        behaviour.timeout(1000)
        behaviour.click('button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        behaviour.timeout(2000)
        behaviour.click('button[name="remove-test.allthethings()-t-shirt-(red)"]')
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
