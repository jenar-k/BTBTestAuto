describe('Happy flow - Login as Lender Individual', () => {
    it('Login with valid data email and password', () => {
        cy.mainURL();
        cy.validEmail();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.lenderIndvValidation();
        cy.klikLogout();
    });
});