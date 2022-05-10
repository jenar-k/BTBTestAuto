const { faker } = require('@faker-js/faker');

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              VISIT PAGE                                           //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ VISIT URL ************************************
Cypress.Commands.add('mainURL', () => {
    // Visit Batumbu web
    cy.visit('https://lender-staging.batumbu.id/partner/login');
    cy.viewport(1280, 800);
    //Assertion URL
    cy.url()
        .should('include', 'https://lender-staging.batumbu.id/partner/login');
    //Assertion Textbox Email Should be exist
    cy.get('[placeholder="Alamat Email"]')
        .should('exist');
    //Assertion Textbox Password Should be exist
    cy.get('[placeholder="Kata Sandi"]')
        .should('exist');
    //Assertion Login Button Should be exist
    cy.get('[type="submit"]')
        .should('exist');
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                                  EMAIL                                            //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ VALID EMAIL ************************************
Cypress.Commands.add('validEmail', () => {
    cy.get('[placeholder="Alamat Email"]')
        .type('testingpartner1@yopmail.com')
        .should('have.value', 'testingpartner1@yopmail.com');
});

// Comment bagian atas kemudian uncomment bagian bawah untuk proses onboarding
/* 
Cypress.Commands.add('validEmail', () => {
    cy.get('[placeholder="Alamat Email"]')
        .type('alamatemailuntukonboarding@email.com')
        .should('have.value', 'alamatemailuntukonboarding@email.com');
}); 
*/

// ************************************ UNREGISTERED EMAIL ************************************
Cypress.Commands.add('unregisteredEmail', () => {
    cy.get('[placeholder="Alamat Email"]')
        .type('unregistered_email@yopmail.com')
        .should('have.value', 'unregistered_email@yopmail.com');
});

// ************************************ INVALID FORMAT EMAIL ************************************
Cypress.Commands.add('invalidFormatEmail', () => {
    cy.get('[placeholder="Alamat Email"]')
        .type('invalid_format_email')
        .should('have.value', 'invalid_format_email');
});

// ************************************ INVALID FORMAT EMAIL FOR REGISTER ************************************
Cypress.Commands.add('invalidFormatEmailRegister', () => {
    cy.get('[placeholder="Email"]')
        .type('invalid_format_email')
        .should('have.value', 'invalid_format_email');
});

// ************************************ VALID EMAIL FOR REGISTER ************************************
Cypress.Commands.add('validEmailRegister', () => {
    cy.get('[placeholder="Email"]')
        .type(randomEmail)
        .should('have.value', randomEmail);
});

// Comment bagian atas kemudian uncomment bagian bawah untuk proses onboarding
/* 
Cypress.Commands.add('validEmailRegister', () => {
    cy.get('[placeholder="Email"]')
        .type('alamatemailuntukonboarding@email.com')
        .should('have.value', 'alamatemailuntukonboarding@email.com');
}); 
*/


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                                  PASSWORD                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ VALID PASSWORD ************************************
Cypress.Commands.add('validPassword', () => {
    cy.get('[placeholder="Kata Sandi"]')
        .type('Test123%')
        .should('have.value', 'Test123%');
});

// ************************************ WRONG PASSWORD ************************************
Cypress.Commands.add('wrongPassword', () => {
    cy.get('[placeholder="Kata Sandi"]')
        .type('Test123%_WRONG')
        .should('have.value', 'Test123%_WRONG');
});

// ************************************ VALID PASSWORD REGISTER ************************************
Cypress.Commands.add('validPasswordRegister', () => {
    cy.xpath('//*[@placeholder="Password"]')
        .type('Test123%')
        .should('have.value', 'Test123%');
});

// ************************************ PASSWORD CONFIRM REGISTER DIFFERENT ************************************
Cypress.Commands.add('passwordConfirmDifferent', () => {
    cy.xpath('//*[@placeholder="Konfirmasi Password"]')
        .type('Test@123%')
        .should('have.value', 'Test@123%');
});

// ************************************ INVALID PASSWORD REGISTER (NO CAPITAL)************************************
Cypress.Commands.add('invalidPasswordRegisterNC', () => {
    cy.xpath('//*[@placeholder="Password"]')
        .type('test123%')
        .should('have.value', 'test123%');
});

// ************************************ INVALID PASSWORD REGISTER (NO LOW CASE LETTER)************************************
Cypress.Commands.add('invalidPasswordRegisterNL', () => {
    cy.xpath('//*[@placeholder="Password"]')
        .type('TEST123%')
        .should('have.value', 'TEST123%');
});

// ************************************ INVALID PASSWORD REGISTER (NO NUMERIC)************************************
Cypress.Commands.add('invalidPasswordRegisterNN', () => {
    cy.xpath('//*[@placeholder="Password"]')
        .type('Testing%')
        .should('have.value', 'Testing%');
});

// ************************************ INVALID PASSWORD REGISTER (NO SPECIAL CHAR)************************************
Cypress.Commands.add('invalidPasswordRegisterNSC', () => {
    cy.xpath('//*[@placeholder="Password"]')
        .type('Testing123')
        .should('have.value', 'Testing123');
});

// ************************************ INVALID PASSWORD REGISTER (<8 CHAR)************************************
Cypress.Commands.add('invalidPasswordRegisterB8', () => {
    cy.xpath('//*[@placeholder="Password"]')
        .type('Test12%')
        .should('have.value', 'Test12%');
});

// ************************************ VALID PASSWORD CONFIRMATION REGISTER ************************************
Cypress.Commands.add('validPasswordConfirmRegister', () => {
    cy.xpath('//*[@placeholder="Konfirmasi Password"]')
        .type('Test123%')
        .should('have.value', 'Test123%');
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              SUBMIT BUTTON                                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ KLIK SUBMIT BUTTON ************************************
Cypress.Commands.add('klikSubmitButton', () => {
    cy.get('[type="submit"]')
        .click();
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              HOME PAGE VALIDATION                                 //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ PARTNERSHIP VALIDATION ************************************
Cypress.Commands.add('partnershipValidation', () => {
    // Assertion Logo Batumbu
    cy.get('[alt="Logo Batumbu"]')
        .should('exist')
    //Borrower type validation
    cy.xpath('(//*[@href="/partner-dashboard"])[1]')
        .contains('Patnership Dashboard')
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              LOGOUT BUTTON                                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ KLIK LOGOUT ************************************
Cypress.Commands.add('klikLogout', () => {
    cy.contains('Logout')
        .click();
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              LOGIN VALIDATION                                     //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ ERROR LOGIN EMAIL VALIDATION ************************************
Cypress.Commands.add('errorLoginValidation1', () => {
    cy.xpath('(//*[@class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"])[1]')
        .should('exist');
});

// ************************************ ERROR LOGIN PASSWORD VALIDATION ************************************
Cypress.Commands.add('errorLoginValidation2', () => {
    cy.xpath('(//*[@class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"])[2]')
        .should('exist');
});

// ************************************ ERROR LOGIN VALIDATION ************************************
Cypress.Commands.add('errorLoginValidation3', () => {
    cy.xpath('//*[@class="MuiDialogContent-root MuiDialogContent-dividers"]')
        .should('have.text', 'Username or Password Invalid');
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              REGISTER BUTTON                                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ KLIK REGISTER BUTTON ************************************
Cypress.Commands.add('klikRegisterPartnership', () => {
    cy.contains('Daftar Sekarang')
        .click({force: true})
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              REGISTER PAGE VALIDATION                             //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ REGISTER PAGE VALIDATION ************************************
Cypress.Commands.add('registerPageValidation', () => {
    cy.contains('Welcome to Batumbu Patnership System')
        .should('exist');
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              TnC CHECKLIST ACTION                                 //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ CHECKLIST TnC ************************************
Cypress.Commands.add('checklistTNC', () => {
    cy.xpath('//*[@class="MuiFormControlLabel-root"]')
        .click();
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                          ALLERT IN REGISTER PAGE                                  //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ FIELD VALIDATION ************************************
Cypress.Commands.add('fieldValidation', () => {
    cy.xpath('(//p[@class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"])[1]')
        .should('exist')
});

// ************************************ PASSWORD CONFIRMATION IS NOT MATCH ************************************
Cypress.Commands.add('wrongPasswordConfirmValidation', () => {
    cy.xpath('(//*[@class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled"])[1]')
        .should('exist')
        .should('have.text', 'password mismatch');
});