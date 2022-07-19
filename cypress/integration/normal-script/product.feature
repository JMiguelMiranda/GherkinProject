Feature: Product

Scenario: Validate Amazon product
When A user opens an Amazon product
Then A user validates payment types
And A user validates product details
And A user validates product price
And A user validates product rating
And A user validates product title
And A user clicks the add to cart button
And A user clicks the buy button
Then The user will be on the cart page
And The user validates there are 2 products in the cart

Scenario: Validate eBay product
When A user opens an eBay product
Then A user validates payment types
And A user validates product details
And A user validates product price
And A user validates product rating
And A user validates product title
And A user clicks the add to cart button
And A user clicks the buy button
And The user will be on the cart page
And The user validates there are 2 products in the cart

Scenario: Validate Walmart product
When A user opens an Walmart product
Then A user validates payment types
And A user validates product details
And A user validates product price
And A user validates product rating
And A user validates product title
And A user clicks the add to cart button
And A user clicks the buy button
And The user will be on the cart page
And The user validates there are 2 products in the cart

Scenario: Validate Macy's product
When A user opens an Macy's product
Then A user validates payment types
And A user validates product details
And A user validates product price
And A user validates product rating
And A user validates product title
And A user clicks the add to cart button
And A user clicks the buy button
And The user will be on the cart page
And The user validates there are 2 products in the cart