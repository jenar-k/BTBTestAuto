describe('Happy flow - Register as Lender Individual', () => {
    it('Register with inputting Valid data and checklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerIndividuButton();
        cy.validEmailRegister();
        cy.validPasswordRegister();
        cy.validPasswordConfirmRegister();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
        cy.xpath('//*[@role="dialog"]')
            .should('exist');
    });
});