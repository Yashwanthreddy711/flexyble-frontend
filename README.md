This is an assignment for Flexmoney Internship

Problem Statement : Assume that you are the CTO of an outsourcing firm which has been chosen to build an admission form for the Yoga Classes which happen every month. Requirements for the admission form are:

Only people within the age limit of 18-65 can enroll for the monthly classes and they will be paying the fees on a month on month basis. I.e. an individual will have to pay the fees every month and he can pay it any time of the month.
They can enroll any day but they will have to pay for the entire month. The monthly fee is 500/- Rs INR.
There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The participants can choose any batch in a month and can move to any other batch next month. I.e. participants can shift from one batch to another in different months but in the same month they need to be in the same batch.
Teck Stack Used: React,Tailwindcss,Express,Mysql server



ER Diagram:



![ER Diagram](https://github.com/Yashwanthreddy711/flexyble-frontend/assets/99392805/2b639899-5902-441d-9ce3-5f6ad4f3e366)


SQL Tables:

Users:




![image](https://github.com/Yashwanthreddy711/flexyble-frontend/assets/99392805/f5c81c92-5569-453b-8223-461a9cba93dc)

Payment:




![image](https://github.com/Yashwanthreddy711/flexyble-frontend/assets/99392805/31b992ac-90a1-408a-aa88-4f3e1c8a4961)







To clone the Application:
git clone https://github.com/Yashwanthreddy711/flexyble-frontend.git


Implementation Details:

Frontend:

Admission Form:
Developed a user-friendly admission form that captures essential details:

First Name
Last Name
Email
Phone Number
Age (strictly between 18 and 65)
Date of Joining
Slot Selection (6-7AM, 7-8AM, 8-9AM, 5-6PM)
Implemented client-side validation to ensure data integrity, especially enforcing age constraints.

Upon form submission, an API call is made to store the participant's details in the MySQL database.

Payment Page:
After successful form submission, users are redirected to the Payment Page.

The Payment Page collects the following information for processing:

Card Number
Cardholder Name
Slot Selection
Amount to Pay
Another API call is made to store the payment details in the database.

Backend:

Established a connection between the application and the MySQL server to facilitate data storage.

Utilized Express.js to create HTTP endpoints for handling various requests.

Created specific API endpoints to interact with the database:

Admission Form API: Receives and stores participant details.
Payment API: Processes and stores payment information.

Note: Ensure that the database schema accommodates both user and payment details and the necessary relationships between them





