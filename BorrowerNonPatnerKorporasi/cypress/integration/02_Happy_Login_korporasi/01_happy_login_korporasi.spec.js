describe('Happy flow - Login as Borrower korporasi', () => {
    it('Login with valid data email and password', () => {
        cy.mainURL();
        cy.validEmail();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.borrowerCorpValidation();
        cy.klikLogout();
    });
});