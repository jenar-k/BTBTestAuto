describe('Unhappy flow - Register as Lender Korporasi', () => {
    it('Register without inputting any data and unchecklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.submitButtonDisable();
    });

    it('Register without inputting any data and checklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register only inputting email data', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register only inputting password data', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validPasswordRegister();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting invalid format email data', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.invalidFormatEmailRegister();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting invalid format password data(No Capital Char)', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNC();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting invalid format password data(No Lower case letter Char)', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNL();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting invalid format password data(No Numeric)', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNN();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting invalid format password data(No Special Char)', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNSC();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting invalid format password data(< 8 Char)', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterB8();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });

    it('Register with inputting valid format password but password confirmation is different', () => {
        cy.mainURL();
        cy.klikRegisterPendana();
        cy.registerPageValidation();
        cy.registerKorporasiduButton();
        cy.validEmailRegister();
        cy.validPasswordRegister();
        cy.passwordConfirmDifferent();
        cy.checklistTNC();
        cy.klikSubmitButtonRegister();
    });
    
});