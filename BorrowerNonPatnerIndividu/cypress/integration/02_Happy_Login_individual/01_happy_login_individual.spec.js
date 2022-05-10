describe('Happy flow - Login as Borrower Individual', () => {
    it('Login with valid data email and password', () => {
        cy.mainURL();
        cy.validEmail();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.borrowerIndvValidation();
        cy.klikLogout();
    });
});