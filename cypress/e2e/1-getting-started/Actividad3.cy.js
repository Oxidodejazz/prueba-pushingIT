describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        //cy.contains('Iniciá sesión').dblclick();
        cy.xpath("//span[text()='Iniciá sesión']").dblclick();
        //cy.get('#user').type(`pushingit`);
        cy.xpath("//input[@id='user']").type(`pushingit`);
        //cy.xpath("//input[@id='pass']").type(`123456!`);
        cy.xpath("//input[contains(@id,'as')]").type(`123456!`);
        //cy.get('#submitForm').click();
        cy.xpath("//button[@id='submitForm']").click();
        //cy.get('#todolistlink').click();
        cy.xpath("//a[@id='todolistlink']").click();
        //cy.get("[id^='sen']").type("tarea 1");
        cy.xpath("//input[starts-with(@id,'tas')]").type("tarea 1");
        //cy.get('#sendTask').click();
        cy.xpath("//input[starts-with(@id,'tas')]//following-sibling::button").click();
        //cy.contains('tarea 1').click();
        cy.xpath("//p[text()='tarea 1']").click();
    });
});