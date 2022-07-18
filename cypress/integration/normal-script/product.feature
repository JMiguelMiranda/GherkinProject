Feature: Product

Scenario: Buy a product Amazon
Given A user opens an Amazon product
And A user validates product information
And A user clicks the buy button
Then The user will be on the cart page

Scenario: Add a product to my cart Amazon
Given A user opens an Amazon product
And A user validates product information
And A user clicks the add to cart button
Then The user will see success label message

Scenario: Buy a product Ebay
Given A user opens an eBay product
And A user validates product information
And A user clicks the buy button
Then The user will be on the cart page

Scenario: Add a product to my cart Ebay
Given A user opens an eBay product
And A user validates product information
And A user clicks the add to cart button
Then The user will see success label message

Scenario: Buy a product Waltmart
Given A user opens an Walmart product
And A user validates product information
And A user clicks the buy button
Then The user will be on the cart page

Scenario: Add a product to my cart Waltmart
Given A user opens an Walmart product
And A user validates product information
And A user clicks the add to cart button
Then The user will see success label message