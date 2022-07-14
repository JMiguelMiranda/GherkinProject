Feature: Checkout

Scenario: Success payment
Given a user does the login and verifies it has an empty cart
And the user adds AMZ product "B000FZX93K" to the cart
And the user goes to the checkout
When the user fills the shipping adress data
And clicks the buy button
Then the order was successfully made