Feature: Product

Scenario: Validate Amazon product
Given A user opens an Amazon product
And A user validates product information
And A user clicks the add to cart button
And A user clicks the buy button
Then The user will be on the cart page
And The user validates there are 2 products in the cart

Scenario: Validate eBay product
Given A user opens an eBay product
And A user validates product information
And A user clicks the add to cart button
And A user clicks the buy button
Then The user will be on the cart page
And The user validates there are 2 products in the cart

Scenario: Validate Walmart product
Given A user opens an Walmart product
And A user validates product information
And A user clicks the add to cart button
And A user clicks the buy button
Then The user will be on the cart page
And The user validates there are 2 products in the cart

Scenario: Validate Macy's product
Given A user opens an Macy's product
And A user validates product information
And A user clicks the add to cart button
And A user clicks the buy button
Then The user will be on the cart page
And The user validates there are 2 products in the cart