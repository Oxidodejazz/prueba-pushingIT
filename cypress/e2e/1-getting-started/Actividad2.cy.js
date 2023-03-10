//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('/');
        cy.get('[name="user"]').type(`pushingit${numero}`);   
        cy.get('input#user').clear();
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('[name="pass"]').type('123456!');
        
        cy.get('[id="radio-:r6:"]').check({force:true});
        // Verif porque no funciona cy.get('#radio-:r6:').check({force:true});

        cy.get('[name="day"]').select('20');
        cy.get('[name="month"]').select('September');
        cy.get('[name="year"]').select(10);
        cy.get('button').click();
        cy.wait(5000)
    });
});