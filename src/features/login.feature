Feature: Login to Amazon website

    As a client of Amazon
    I want to login
    Because I need to be logged to view the products

    Background: Be on the home page

        Given I access Amazon Website

    Scenario: Login using a valid user
        When I click to the login button
        And  I input my "renatoreisqa123@gmail.com" "Reis21"
        And  I click to login
        Then I should see the welcome message with my name

    Scenario Outline: Login using a invalid user
        When I click to the login button
        And  I input my <email> <password>
        And  I click to login
        Then I should see the error message

        Examples:
        |   email                             | password |
        |   "iwanttobepartofomnigo@gmail.com" |"12312312"|