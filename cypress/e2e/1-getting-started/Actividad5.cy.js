describe('Actividad complementaria 5', () => { 
    const timeout = 10000;
    
     beforeEach("Precondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

  	it("Punto 1", () =>{
			// Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
        cy.get('button#wait', {timeout: timeout}).should('have.text', 'Button');
	})
  
    it("Punto 2", () =>{
			// verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
        cy.contains('Wait 5 more seconds', {timeout: timeout}).should('exist');
        })
  
    it("Punto 3", () => {
		let mensajeAComprobar	
        // Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
        cy.get('#message', {timeout: timeout}).invoke('text').then(data => {
            mensajeAComprobar = data;
        cy.get('#message', {timeout: timeout}).should('not.include.text',mensajeAComprobar);
        });
            

	});
 });