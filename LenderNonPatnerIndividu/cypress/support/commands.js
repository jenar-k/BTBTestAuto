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
    cy.visit('https://lender-staging.batumbu.id/');
    cy.viewport(1280, 800);
    //Assertion URL
    cy.url()
        .should('include', 'https://lender-staging.batumbu.id/');
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
        .type('fordemo_5@yopmail.com')
        .should('have.value', 'fordemo_5@yopmail.com');
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
        .type('Testing1234%')
        .should('have.value', 'Testing1234%');
});

// ************************************ WRONG PASSWORD ************************************
Cypress.Commands.add('wrongPassword', () => {
    cy.get('[placeholder="Kata Sandi"]')
        .type('Test123%_WRONG')
        .should('have.value', 'Test123%_WRONG');
});

// ************************************ VALID PASSWORD REGISTER ************************************
Cypress.Commands.add('validPasswordRegister', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[1]')
        .type('Test123%')
        .should('have.value', 'Test123%');
});

// ************************************ PASSWORD CONFIRM REGISTER DIFFERENT ************************************
Cypress.Commands.add('passwordConfirmDifferent', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[2]')
        .type('Test@123%')
        .should('have.value', 'Test@123%');
});

// ************************************ INVALID PASSWORD REGISTER (NO CAPITAL)************************************
Cypress.Commands.add('invalidPasswordRegisterNC', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[1]')
        .type('test123%')
        .should('have.value', 'test123%');
});

// ************************************ INVALID PASSWORD REGISTER (NO LOW CASE LETTER)************************************
Cypress.Commands.add('invalidPasswordRegisterNL', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[1]')
        .type('TEST123%')
        .should('have.value', 'TEST123%');
});

// ************************************ INVALID PASSWORD REGISTER (NO NUMERIC)************************************
Cypress.Commands.add('invalidPasswordRegisterNN', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[1]')
        .type('Testing%')
        .should('have.value', 'Testing%');
});

// ************************************ INVALID PASSWORD REGISTER (NO SPECIAL CHAR)************************************
Cypress.Commands.add('invalidPasswordRegisterNSC', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[1]')
        .type('Testing123')
        .should('have.value', 'Testing123');
});

// ************************************ INVALID PASSWORD REGISTER (<8 CHAR)************************************
Cypress.Commands.add('invalidPasswordRegisterB8', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[1]')
        .type('Test12%')
        .should('have.value', 'Test12%');
});

// ************************************ VALID PASSWORD CONFIRMATION REGISTER ************************************
Cypress.Commands.add('validPasswordConfirmRegister', () => {
    cy.xpath('(//*[@placeholder="Kata Sandi"])[2]')
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

// ************************************ KLIK SUBMIT BUTTON REGISTER************************************
Cypress.Commands.add('klikSubmitButtonRegister', () => {
    cy.xpath('(//*[@type="button"])[6]')
        .click();
});




///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              HOME PAGE VALIDATION                                 //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ LENDER INDIVIDUAL VALIDATION ************************************
Cypress.Commands.add('lenderIndvValidation', () => {
    // Assertion Logo Batumbu
    cy.get('[alt="Logo Batumbu"]')
        .should('exist')
    //Lender type validation
    cy.get('[class="css-20o9ok"]')
        .contains('Pendana Individual')
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              LOGOUT BUTTON                                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ KLIK LOGOUT ************************************
Cypress.Commands.add('klikLogout', () => {
    cy.contains('Keluar')
        .click();
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              LOGIN VALIDATION                                     //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ ERROR LOGIN VALIDATION ************************************
Cypress.Commands.add('errorLoginValidation', () => {
    cy.get('[id="alert-dialog-description"]')
        .should('have.text', 'Kata sandi atau email yang Anda masukkan salah');
    cy.contains('OK')
        .click();
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              REGISTER BUTTON                                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ KLIK REGISTER BUTTON ************************************
Cypress.Commands.add('klikRegisterPendana', () => {
    cy.xpath('(//span[@class="MuiTouchRipple-root"])[5]')
        .click({force: true})
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              REGISTER PAGE VALIDATION                             //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ REGISTER PAGE VALIDATION ************************************
Cypress.Commands.add('registerPageValidation', () => {
    cy.contains('Pendaftaran Pendana')
        .should('exist');
});

// ************************************ KLIK INDIVIDU BUTTON ************************************
Cypress.Commands.add('registerIndividuButton', () => {
    cy.contains('Individu')
        .click();
});

// ************************************ SUBMIT BUTTON DISABLE ************************************
Cypress.Commands.add('submitButtonDisable', () => {
    cy.xpath('(//*[@type="button"])[6]')
        .should('be.disabled')
});


///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                              TnC CHECKLIST ACTION                                 //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
// ************************************ CHECKLIST TnC ************************************
Cypress.Commands.add('checklistTNC', () => {
    cy.xpath('//*[@name="tncCheck"]')
        .click();
});