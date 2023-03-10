describe('Actividad complementaria 7', () => { 
    
    beforeEach("Actividad complementaria 7", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick();
     })

     it("Deberia sacar una foto completa de la pagina del login", () =>{
        cy.screenshot({capture:'fullPage'});
   
   })
 
   it("Deberia sacar una foto del boton todoList ", () =>{
           cy.get('#user').type('pushingit');
       cy.get('#pass').type('123456!');
       cy.get('#submitForm').click();
       cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
       cy.get('#todolistlink').screenshot('todolist');
   })
})
// Instalar git
//Inicializa un repositorio en github desde visual studio code
// Subi el repositorio completo. Recorda usar git ignore para ignorar la carpeta node modules
//recorda usar los comandos git add (o usa visual studio code para elegir los archivos) // git commit -m "mensaje" // git push origin {nombre de tu branch}

