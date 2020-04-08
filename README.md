# WebdriverIO | CucumberJS | Typescript | Selenium

## Introduction
This project was created by Renato Reis to run automated tests on Amazon.com.br.

#### Funcionalities:
-   Allure Reporter
-   Typescript PageObjects
-   Typescirpt Cucumber step decorators
-   Chai For assertions
-   Selenium Standalone with Chrome and Firefox capabilities in headless mode (for now, you can't run in Ghost Mode because issue with the captcha )
-   VsCode launch configuration to debug tests

## To start:

#### Precondition
1. NodeJS installed globally on the operating system. Please install the stable version;
2. Git installed;
3. Google Chrome installed;
4. JAVA SDK installed;
5. Text Editor (I strongly recommend you to use VS Code)
6. If you're using MacOS, install [Xcode](https://developer.apple.com/xcode/) or use Apple Store to do this.

To do this:
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
sudo xcodebuild -license accept

7. Install the [Allure Framework](https://docs.qameta.io/allure/). This framework allow you view a report with the results of the tests in HTML. 

-> Note: if you are using MacOS, you can do this using [Homebrew](https://brew.sh)

```
brew install allure
```

## Usage
    npm install   --> use this command to install Node
    npm run test:debug  --> this is the command to run the tests  =)
    npm run allure-report  --> use this command to see the report (in HTML)

### Dependencies

Java must be installed to run allure reports, okay?

## Notes

If you run the test more than 3 or 4 times, Amazon.com.br will ask you "if you are a human" (captcha) during the sign in. My advice for you is create another account to access the website or wait few hours to run again (or use the accounts below).

Here, it's a list of 3 accounts to use during the test:

renatoreisqa123@gmail.com  ||  Reis21
renatoreisqa122@gmail.com  ||  Reis21
renatoreisqa121@gmail.com  ||  Reis21


Please change it on:

src > feature > login.feature:  lines 13 and 25
src > feature > shoppingCart.feature: line 10


Questions? Mail me:  renatoreis@live.com

=)