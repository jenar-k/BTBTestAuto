describe('Happy flow - Register as Partnership', () => {
    it('Register without inputting Valid data and unchecklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.validPasswordRegister();
        cy.validPasswordConfirmRegister();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.xpath('//*[@role="dialog"]')
            .should('exist');
    });
});