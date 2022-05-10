describe('Happy flow - Login as Lender Korporasi', () => {
    it('Login with valid data email and password', () => {
        cy.mainURL();
        cy.validEmail();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.lenderCorpValidation();
        cy.klikLogout();
    });
});