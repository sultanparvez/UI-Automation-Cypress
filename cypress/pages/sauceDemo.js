export class loginPage{

    navigate(url){   
        cy.visit(url)
    }
    enterUsername(username){
        cy.get('#user-name').click().type(username);
    }
    enterPassword(password){

        cy.get('#password').type(password);
    }
    clickSubmit(){
        cy.get('input[value="Login"]').click()
    }

}

export class Behaviours{
    enterValues(selector,values){
        cy.get(selector).click().type(values);
    }

    click(selector){   
        cy.get(selector).click() 
    }
    timeout(miliseconds){   
        cy.wait(miliseconds)
    }
    screenshot(screenshotName){   
        cy.screenshot(screenshotName);
    }
    removeAttributeThenClick(selector , attributeInConcern){
        cy.get(selector).invoke('removeAttr', attributeInConcern).click()
    }
    forceClick(selector){
        cy.get(selector).click({force:true})
    }

}

export class Assertions{
    popupCheck(selector){
        cy.get(selector).should("be.called")
    }
   containCheck(selector , value ){
    cy.get(selector).should('contain',value);
   }
   visibilityCheck(selector){
    cy.get(selector).should('be.visible')
   }

}