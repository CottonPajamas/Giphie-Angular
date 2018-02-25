# Giphie
A single-page application (SPA) using Angular 5 with JavaEE as its back-end.

This repository includes both the source codes for the SPA created using Angular as well as the java servlets. Java servlets are needed to create the necessary APIs for the front-end application to communicate with the mysql database server. These APIs will allow the user to save a GIF of his/her choosing (depending on their custom-defined name - default will be set as 'Default'), retrieve a list of their saved GIFs and remove any previously saved (aka 'liked') GIFs.

List of GIFs are retrieved using Giphy's public API.

<br />
Features:<br />
Implemented the SPA using bootstrap.<br />
Able to be converted into a mobile web application from any mobile browser.<br />
Used Angular Material for various components and functionalities.<br />
  -Tabs<br />
  -Cards<br />
  -Input<br />
  -Dialog<br />
  -Form<br />
  -Buttons<br />
Used hammerjs for swiping right and left when in mobile mode.<br />
Employed the use of infinite-scroll (as opposed to loading the entire list of data on the screen all at once).<br />


<br />
<br />
<br />
Screenshots:<br /><br />



![](/Screenshots/NavigationBar.jpg)





![](/Screenshots/SearchEntry.jpg)





![](/Screenshots/SearchResult.jpg)


<br />
<br />
<br />
Instructions:<br /><br />


Setting up the Angular application

1. Create an api key with Giphy at https://developers.giphy.com

2. Clone the repository and install all dependencies by entering:

>>npm install

3. Open 'giphy.service.ts' file located in src/app/components. [Replace the string for the constant variable named 'api_key' with your developer's api key from Giphy]

4. To run, enter the following:

>>ng serve

5. Open your browser and enter this url link:

>>http://localhost:4200/TestServer

6. If you wish to change your username, simply click the 'User' tab in the navigation bar which will bring up a dialog for you to change your username.

7. To like a GIF, simply click the 'Like' button. Click again if you wish to un-like it.

8. To deploy to your server, run the following:
>>ng build --prod --aot --deploy-url TestServer

9. Copy all the files in the newly created 'dist' folder in your Giphie project to TestServer's 'web' folder.

10. Clean and deploy your server.


<br /><br />
Note: In the event that you face issues connecting to the java server due to your chrome's origin policy, run this in cmd (if on windows). This will open a browser with web security disabled allowing you to access the TestServer. (Replace the directory according to wherever your chrome browser is installed.)
>>"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security<br />


<br /><br /><br />
Setting up the Java server

1. Ensure that you are using the correct Java SDK (7 and above).

2. Create the required database by importing the .sql file located in the 'myDatabase' folder to your mysql database.

3. Deploy your server.


<br /><br /><br />
General technical information:<br />
Angular 5<br />
JavaEE7 with Payara Server 4.1.2.174 <br />
MySql Server <br />
