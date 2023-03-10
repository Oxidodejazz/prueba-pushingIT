export class ToDoListPage {

    constructor() {
        this.taskInput = '#task';
        this.sendTaskButton = '#sendTask';
        this.allButton = '#all';
        this.completedButton = '#completed';
        this.activeButton = '#active';
        this.removeAllButton = '#removeAll';
    };

    escribirTarea(tarea) {
        cy.get(this.taskInput).type(tarea);
    };

    clickSendButon() {
        cy.get(this.sendTaskButton).click();
    };

    retornarTarea(tarea) {
        return cy.contains(tarea);
    };

    retornarAllButton() {
        return cy.get(this.allButton);
    };

    retornarCompletedButton() {
        return cy.get(this.completedButton);
    };

    retornarActiveButton() {
        return cy.get(this.activeButton);
    };

    retornarRemoveAllButton() {
        return cy.get(this.removeAllButton);
    };
};