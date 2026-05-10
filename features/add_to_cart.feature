Feature: Add product to cart

  Scenario: User adds a product to the cart successfully
    Given the user is on the login page
    When the user logs in with valid credentials
    And the user adds a product to the cart
    Then the product should appear in the cart
