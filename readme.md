# About the project

Hi! This prototype was made for the backend developer test, and it completes the basic requirements for the test.


# How to get the enviroment variables

### DATABASE_URL

The Postgres database url is pretty simple, and I've already placed an example in the.env.exemple file. You can change the string like this to match your environment.

"postgresql://**{your_user}**:**{your_password}**@**{your_postgres_host}**:**{postgres_port}**/**{database}**?schema=**{schema}**"

example: `"postgresql://postgres:root@localhost:5432/project?schema=public"`

### AUTH_HASH_SECRET
This is a random hash that you need to generate that is going to work as the application passcode.

You can generate one of these hashes at this link: https://www.devglan.com/online-tools/hmac-sha256-online.

example: `62a71c4a184f20c272f8d9ba63afcbd82ea8d9ead2c47692a1975c2e4f777cf7`

### SMTP_EMAIL_USER

Since the application is using the Gmail SMTP, you set your own email for this variable.

example: jonh.doe@gmail.com

### SMTP_EMAIL_PASSWORD

On this variable, you can use the same password that you used to login to your email account that you used on the past variable, or you can create an app password on your Google dashboard and use it instead.

To get an app password, follow these steps:

1. Go to Manage Your Google Account  
2. After that, go to the security page.  
3. Then click on 2-step verification.  
4. Then login to your account.  
5. On the bottom of the page, you are going to find the app passwords section, where you can create a password.

## About the database dump

You can find the database dump sql file in the root folder of the project. You just need to create the database with the name that you specified in the DATABASE_URL variable and apply the dump. (It already comes with some data!)

## About the Postman colletion

The postman collection can also be found in the root folder of the project, and you only need to import it on your postman. If you want to, you can change the global variable called baseUrl. (Also, you don't need to worry about setting the token global variable; it is automatically set when you create an account or sign in.)

## Running the project


To run the project, you need to make sure that you have completed the steps above. Then, you can follow these steps:

1. Run `yarn` on your terminal to download the project dependencies.  
2. Run `yarn server` to start the project.