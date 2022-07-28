Feature: Cart

Scenario: Cart - Change product amount
Given a user adds AMZ product "B000FZX93K" to the cart
And is in the cart page
And changes the quantity value
When clicks the 'Actualizar carrito' button
Then the quantity field should be different
And the product price should be equivalent to the quantity of products

Scenario: Cart - Delete product button
Given a user adds AMZ product "B000FZX93K" to the cart
And is in the cart page
When clicks the 'Eliminar' button
Then the cart should be empty

Scenario: Cart - Apply coupon
Given a user adds AMZ product "B000FZX93K" to the cart
And is in the cart page
And enters coupon code "TESTSCOUPON"
When clicks the 'Aplicar' button
Then coupon applied successfully message exist
And discount has been properly applied