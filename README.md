# StudentManager
Student Manager App with Spring Boot, MySQL, Vue.

## Database Connection:
In application.properties
* spring.datasource.url=jdbc:mysql://localhost:3306/your_database\\
* spring.datasource.username=your_mysql_username\\
* spring.datasource.password=your_mysql_password
* spring.jpa.hibernate.ddl-auto=update //For the first time, switch from update to create after that run.
* spring.jpa.properties.dialect=org.hibernate.dialect.MySQL8Dialect

## ToDo
Create Front End

## Run to run Front End 
- cd frontend
- npm run serve

## What are we using for Vue (front end)
- element UI (https://element.eleme.io/#/en-US/component/layout)
- scss
