Feature: Checkout

Scenario: Success payment
Given the user adds AMZ product "B000FZX93K" to the cart
And the user tries to go to the checkout but makes the login first
And now the user is redirected to checkout
And the user fills the shipping adress data
When the user makes a credit card payment
Then the order was successfully made