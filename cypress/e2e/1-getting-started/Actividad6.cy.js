import { ToDoListPage } from '../../support/pages/toDoListPage';
const { loginPage, LoginPage } = require('../../support/pages/loginPage');

describe('Actividad complementaria 6', () => { 
    const toDoListPage = new ToDoListPage();
    const loginPage = new LoginPage();
        
         beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario('pushingit');
            loginPage.escribirContraseña('123456!');
            loginPage.clickLogIn();
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            toDoListPage.retornarAllButton().should('exist');
            toDoListPage.retornarCompletedButton().should('exist');
            toDoListPage.retornarActiveButton().should('exist');
            toDoListPage.retornarRemoveAllButton().should('exist');
        });
     });