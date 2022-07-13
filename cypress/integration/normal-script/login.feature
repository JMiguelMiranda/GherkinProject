Feature: Login

Scenario: Success Login
Given A user opens the login page
And A user enters the username: "test@yopmail.com"
And A user enters the password: "Aa123123"
And A user clicks the login button
Then The user will be logged in

Scenario: Failed Login - Incorrect passowrd
Given A user opens the login page
And A user enters the username: "test@yopmail.com"
And A user enters the password: "12312312"
And A user clicks the login button
Then The user will receive the error message: "El email y contraseña son incorrectas o tu cuenta está temporalmente deshabilitada. Intente nuevamente mas tarde."