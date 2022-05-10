describe('Happy flow - Register as Borrower korporasi', () => {
    it('Register with inputting Valid data and checklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPeminjam();
        cy.registerPageValidation();
        cy.registerKorporasiButton();
        cy.validEmailRegister();
        cy.validPasswordRegister();
        cy.validPasswordConfirmRegister();
        cy.checklistTNC();
        cy.klikSubmitButton();
        cy.xpath('//*[@role="dialog"]')
            .should('exist');
    });
});