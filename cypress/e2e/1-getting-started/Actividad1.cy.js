/// <reference types="cypress" />
describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        cy.get('#user').type('Gonzalo' + numero);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select(2);
        cy.get('#month').select('April');
        cy.get('#year').select('1981');
        cy.get('#submitForm').click();
        
    });
});