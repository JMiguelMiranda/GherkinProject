Feature: Login

Scenario: Success Login
Given A user opens the login page
And A user enters the login email: "test@yopmail.com"
And A user enters the login password: "Aa123123"
When A user clicks the login button
Then The user will be logged in
And Will be on the home page

Scenario: Failed Login - Incorrect passowrd
Given A user opens the login page
And A user enters the login email: "test@yopmail.com"
And A user enters the login password: "12312312"
When A user clicks the login button
Then The user will receive the error message: "El email y contraseña son incorrectas o tu cuenta está temporalmente deshabilitada. Intente nuevamente mas tarde." at the login page

Scenario: Success Register
Given A user opens the register page
And A user enters the name: "test"
And A user enters the lastname: "test"
And A user enters the dynamic register email
And A user enters the register password: "Aa123123"
And A user enters the register password confirmation: "Aa123123"
When The user clicks the register button
Then The user will be logged in
And Will be on the home page