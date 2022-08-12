
import  {loginPage} from '../pages/sauceDemo';
const login= new loginPage()

Cypress.Commands.add('login', () => {  
    cy.fixture('Credentials').then(Data =>{
        login.navigate('/');
        login.enterUsername(Data.name)
        login.enterPassword(Data.password)
        login.clickSubmit();
        })
    })
    Cypress.Commands.add('addProduct', (productName) => { 
        cy.get('div.inventory_item_name').each(($el,index,$list)=>{
            if($el.text().includes(productName)){
              cy.get('div.inventory_item_price').next().eq(index).click()
            }
    })   
})

