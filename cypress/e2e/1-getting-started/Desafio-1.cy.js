/// <reference types="cypress" />
describe("Desafio 1", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Desafio N° 1 - Pushing IT - Torres Gonzalo - FEB 2023', () =>{
        // 1- Ingresar en “https://pushing-front.vercel.app/
        cy.visit('https://pushing-front.vercel.app/');
        // 2- Completar datos para realizar registro
        cy.get('#user').type('Gonzalo' + numero);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select('3');
        cy.get('#month').select('April');
        cy.get('#year').select('1981');
        cy.get('#submitForm').click();
        // 3- Ingresar en la seccion "TO DO List" 
        cy.get('#todolistlink').click();
        // 4- Ingresar una nueva tarea
        cy.get('[name="task"]').type('Esta es una nueva tarea');
        cy.get('#sendTask').click();
        // 5- Completar la tarea clickeando en la misma
        cy.get('[role="list"]').find('p').contains('Esta es una nueva tarea').click();
        // En este caso que hay solo un p en la lista no es necesario el contains, pero lo
        // coloco para que el codigo sea mas expresivo y se pueda reutilizar en un caso con
        // mas elementos p
    });
});