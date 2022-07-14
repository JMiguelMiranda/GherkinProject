Feature: Checkout

Scenario: Success payment
Given a user does the login and verifies it has an empty cart
And the user adds AMZ product "B000FZX93K" to the cart
And the user goes to checkout