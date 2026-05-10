Feature: Saucedemo Login and Add to Cart

  Scenario: Login and add a product to the cart
    Given I open the Saucedemo website
    When I login with valid credentials
    And I add the first product to the cart
    Then the cart should show 1 item

