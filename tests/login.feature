Feature: Google Search
  Scenario: Search for Playwright
    Given I am on "https://google.com"
    Then the title should contain "Google"
