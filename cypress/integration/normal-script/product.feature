Feature: Product

Scenario: Buy a product Amazon
Given A user opens the the product page with AMZ
And A user validates all information
And A user clicks the buy button
Then The user will be on the cart page

Scenario: Add a product to my cart Amazon
Given A user opens the the product page with AMZ
And A user validates all information
And A user clicks the add product button
Then The user will see success label message

Scenario: Buy a product Ebay
Given A user opens the the product page with Ebay
And A user validates all information
And A user clicks the buy button
Then The user will be on the cart page

Scenario: Add a product to my cart Ebay
Given A user opens the the product page with Ebay
And A user validates all information
And A user clicks the add product button
Then The user will see success label message

Scenario: Buy a product Waltmart
Given A user opens the the product page with WRT
And A user validates all information
And A user clicks the buy button
Then The user will be on the cart page

Scenario: Add a product to my cart Waltmart
Given A user opens the the product page with WRT
And A user validates all information
And A user clicks the add product button
Then The user will see success label message