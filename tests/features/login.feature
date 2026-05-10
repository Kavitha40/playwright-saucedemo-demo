Feature: Login
  Scenario: Successful login
    Given I open the SauceDemo website
    When I login with valid credentials
    Then I should see the Products page
