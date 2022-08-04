Feature: Checkout

Scenario: Success payment
<<<<<<< Updated upstream
Given a user does the login and verifies it has an empty cart
And the user adds AMZ product "B000FZX93K" to the cart
And the user goes to the checkout
When the user fills the shipping adress data
And clicks the buy button
=======
Given a user adds AMZ product "B000FZX93K" to the cart
And the user tries to go to the checkout but makes the login first
And now the user is redirected to checkout
And the user fills the shipping adress data
When the user makes a credit card payment
>>>>>>> Stashed changes
Then the order was successfully made