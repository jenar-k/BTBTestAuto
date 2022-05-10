describe('Unhappy flow - Register as Partnership', () => {
    it('Register without inputting any data and unchecklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    

    it('Register without inputting any data and checklist TnC', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register only inputting email data', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register only inputting password data', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validPasswordRegister();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting invalid format email data', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.invalidFormatEmailRegister();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting invalid format password data(No Capital Char)', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNC();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting invalid format password data(No Lower case letter Char)', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNL();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting invalid format password data(No Numeric)', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNN();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting invalid format password data(No Special Char)', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterNSC();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting invalid format password data(< 8 Char)', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.invalidPasswordRegisterB8();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.fieldValidation();
    });

    it('Register with inputting valid format password but password confirmation is different', () => {
        cy.mainURL();
        cy.klikRegisterPartnership();
        cy.registerPageValidation();
        cy.validEmailRegister();
        cy.validPasswordRegister();
        cy.passwordConfirmDifferent();
        cy.checklistTNC();
        cy.xpath('//*[@class="MuiButton-label"]')
            .click();
        cy.klikSubmitButton();
        cy.wrongPasswordConfirmValidation();
    });
    
});