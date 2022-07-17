Feature: Checkout

Scenario: Success payment
Given a user adds AMZ product "B000FZX93K" to the cart
And the user tries to go to the checkout but makes the login first
And now the user is redirected to checkout
When the user fills the shipping adress data
And clicks the buy button
Then the order was successfully made