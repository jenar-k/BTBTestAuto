describe('Unhappy flow - Login as Partnership', () => {
    it('Login without inputting data email and password', () => {
        cy.mainURL();
        cy.klikSubmitButton();
        cy.errorLoginValidation1();
        cy.errorLoginValidation2();
    });

    it('Login without inputting data email but inputting data password', () => {
        cy.mainURL();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.errorLoginValidation1();
    });

    it('Login without inputting data password but inputting data email', () => {
        cy.mainURL();
        cy.validEmail();
        cy.klikSubmitButton();
        cy.errorLoginValidation1();
    });

    it('Login with unregistered email', () => {
        cy.mainURL();
        cy.unregisteredEmail();
        cy.validPassword();
        cy.klikSubmitButton();
        cy.errorLoginValidation3();
    });

    it('Login with invalid format email', () => {
        cy.mainURL();
        cy.invalidFormatEmail();
        cy.validPassword();
        cy.klikSubmitButton();
    });

    it('Login with valid email but wrong password', () => {
        cy.mainURL();
        cy.validEmail();
        cy.wrongPassword();
        cy.klikSubmitButton();
        cy.errorLoginValidation3();
    });

    it('Login with invalid email and wrong password', () => {
        cy.mainURL();
        cy.unregisteredEmail();
        cy.wrongPassword();
        cy.klikSubmitButton();
        cy.errorLoginValidation3();
    });
    
});