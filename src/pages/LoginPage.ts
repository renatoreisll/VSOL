/** 
 * file: LoginPage.ts
 * Author: Renato Reis
 * Date: 07/04/2020
 */


import Page from './Page';

class LoginPage extends Page {
    /**
    * define elements
    */

    get emailInput() { return $('input#ap_email'); }
    get continueButton() { return $('input#continue'); }
    get passwordInput() { return $('input#ap_password'); }
    get signinSubmit() { return $('input#signInSubmit'); }
    get keepSignedBox() { return $('form[name="signIn"] label > span'); }
    get validationMessage() { return $('div#auth-error-message-box h4'); }
    get errorMessage() { return $('div#auth-error-message-box span'); }

    /**
     * define or overwrite page methods
     */

    open() {
        browser.url('/ap/signin');

    }

    emailText(email) {
        this.emailInput.waitForDisplayed();
        this.emailInput.setValue(email);
    }

    continueClick() {
        this.continueButton.waitForDisplayed();
        this.continueButton.click();
    }

    passwordText(password) {
        this.passwordInput.waitForDisplayed();
        this.passwordInput.setValue(password);
    }

    keepSignedBoxClick() {
        this.keepSignedBox.waitForDisplayed();
        this.keepSignedBox.click();
    }

    signinSubmitClick() {
        this.signinSubmit.waitForDisplayed();
        this.signinSubmit.click();
    }

    validationMessageValue() {
        this.validationMessage.waitForDisplayed();
        let validateMsg = this.validationMessage.getText();
        return validateMsg;
    }

    errorMessageValue() {
        this.errorMessage.waitForDisplayed();
        let errorMsg = this.errorMessage.getText();
        return errorMsg;
    }
}

export default new LoginPage();