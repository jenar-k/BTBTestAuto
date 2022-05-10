describe('Happy flow - Register as Lender Korporasi', () => {
    it('Register with inputting Valid data and checklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.validPasswordRegister();
        cy.validPasswordConfirmRegister();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
        cy.xpath('//*[@role="dialog"]')
            .should('exist');
    });
});