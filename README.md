# Giphie
A single-page application (SPA) using Angular with JavaEE as its back-end.

This repository includes both the source codes for the SPA created using Angular as well as the java servlets. Java servlets are needed to create the necessary APIs for the front-end application to communicate with the mysql database server. These APIs will allow the user to save a GIF of his/her choosing (depending on their custom-defined name - default will be set as 'Default'), retrieve a list of their saved GIFs and remove any previously saved (aka 'liked') GIFs.

List of GIFs are retrieved using Giphy's public API.

<br />
Instructions:


Setting up the Angular application

1. Create an api key with Giphy at https://developers.giphy.com

2. Clone the repository and install all dependencies by entering:

>>npm install

3. Open 'giphy.service.ts' file located in src/app/components. [Replace the string for the constant variable named 'api_key' with your developer's api key from Giphy]

4. To run, enter the following:

>>ng serve


<br /><br />
General techincal information:
Angular <br />
JavaEE7 with Payara Server 4.1.2.174 <br />
MySql Server <br />
