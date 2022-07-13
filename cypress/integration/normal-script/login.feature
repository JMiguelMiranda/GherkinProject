Feature: Login

Scenario: Success Login
Given A user opens the login page
When A user enter the username "standard_user"
And A user enter the password "secret_sauce"
And A user clicks the login button
Then A user will be logged in

Scenario: Failed Login
Given A user opens the login page
When A user enter the username "locked_out_user"
And A user enter the password "secret_sauce"
And A user clicks the login button
Then A user will be receiving a failed message
