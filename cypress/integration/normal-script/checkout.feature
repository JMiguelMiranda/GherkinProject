Feature: Checkout

Scenario: Success payment
Given a user adds AMZ product "B000FZX93K" to the cart
And the user tries to go to the checkout but makes the login first
And now the user is redirected to checkout
And the user fills the shipping adress data
When clicks the buy button
Then the order was successfully made