//crea un fixture con las siguientes keys 
//username (el username debe ser existente)
//pasword (la password debe ser invalida)
//mensajeError (el mensaje de error lo tienes que copiar de la pagina )


//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    //inicializa el fixture
    let miFixture;

    before("acceder al fixture y obtener los datos", () => {
        cy.fixture('Act4').then(data => {
            miFixture = data;
        });
    });

    beforeEach('visitar la pagina y dirigirse al login', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(miFixture.usuario);
        cy.get('#pass').type(miFixture.contrasena);
        cy.get('#submitForm').click();
        cy.get('#errorMessage').should('have.text', miFixture.mensajeError);
    });
});