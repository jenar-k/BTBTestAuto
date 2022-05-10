describe('Happy flow - Login as Partnership', () => {
    it('Login with valid data email and password', () => {
        cy.mainURL();
        cy.validEmail();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.partnershipValidation();
        cy.klikLogout();
    });
});