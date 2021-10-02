# milestone-5

### 24-2 : How internet works, DNS server, hosting server, database
A DNS server – short for Domain Name System server – 
converts web addresses into IP addresses. Without a DNS server, 
you won't be able to connect to any websites. 
If you're having issues with your default DNS server, you can change it.

![App Screenshot](https://i.insider.com/602c130c2edd0f001a8d5ed9?width=900&format=jpeg&auto=webp)

![App Screenshot](https://i.ibb.co/C1m078m/image.png)

### 24-3 : 

## API

### Introduction To API :

Wow! This is an exciting day in your life. In this technology era by clicking the one you can book a ticket or order your delicious food. But how this can be possible from any place in the world. How does it happen? How does data get from here to there? How do different devices and applications connect with each other to allow us to place an order? 

#### Yes! this everything can be done by API.

What is an API?
API means Application Programming Interface. Methods to access data and workflow from an application without using the application itself.

### API examples :
Youtube API  
Twitter API  
Facebook API

Anyway, don't need to memorize the textbook definition of API. Now I will tell you an interesting example of API. And I am sure that it will be very easy to understand API.

### Story of a restaurant :
Suppose one day you went to a restaurant with some of your friends for breakfast. Then a waiter came to you and gave you a list of food. Then you had ordered your preferable food. Then the waiter took the menu and went straight to the kitchen. After a while, the food you ordered came to your table.
The food in the kitchen was already ready, hence the kitchen is the server. And you are the client. Again the waiter in the middle who is serving you the food is the API.
The API basically works with two things.
1. Request
2. Response

When you were ordering on the menu, the waiter did not know if the food you ordered was prepared in the kitchen or if it was finished. Even then he goes to the kitchen with the orders you have given. This is called sending a request from the client to the server.
After a while, the waiter comes back with the food you ordered. This is called sending a response from the server to the client.
So in the story of this restaurant, if you are the client, the waiter as the messenger is called API, and the kitchen is the server.

So, we can tell that  API  is the messenger that takes requests and tells the system what you want to do, and then returns the response back to you.

### A real example of API:
Just like the story of the restaurant, this time I will give you a real example of API. When you search for a video on Netflix or youtube. Many videos come together in the UI of your mobile or desktop. Actually, these videos are stored in the database. When you search by typing the name of a video, youtube API takes your request from the server to the database. After that, many videos of such titles are shown in the UI of your device as API responses. Then by clicking on a specific video, you can see our desired video.


## Why API?

I know, you browse a lot of websites every day. Grandma even told me that day that you now do a lot of shopping through the website. In this case, you use both desktop and mobile. When you are in front of the desktop, you shop through the website. Again, when using mobile, shop through the mobile app. So anyway, whether you use a website or a mobile APP, there are a lot of images of products out there. And if you want, you can order this thing of your choice with one click.

Ever wondered, how data go from the same database to different devices?
Yes, this is what the API does. Usually, we know that any data first goes from the database to the backend. Then the data from the backend is shown on the website. Which is a lot like that.



But now we will move the same data to different devices. So we have to format our data in such a way that it can be easily moved to different devices. And it succeeds only through the API. From now, we will tell backend as backend API. In this case, the request is first sent to the backend API from the desktop, Android, or ios. Then if the request is valid then the data from the backend API goes to the UI through the response. Which can be shown in this way.


So anyway, the data coming from the database to the backend API is in two special formats.

1. JSON - Javascript Object Notation  
2. XML - Extensible Markup Language

### JSON FORMATE DATA

Many new APIs have adopted JSON as a format because it's built on the popular Javascript programming language, which is ubiquitous on the web and usable on both the front- and back-end of a web app or service. JSON is a very simple format that has two pieces: keys and values. Keys represent an attribute about the object being described. A pizza order can be an object. It has attributes (keys), such as crust type, toppings, and order status. These attributes have corresponding values (thick crust, pepperoni, and out-for-delivery).
Let's see how this pizza order could look in JSON:
```bash
 {
    "crust": "original",
    "toppings": ["cheese", "pepperoni", "garlic"],
    "status": "cooking"
}
```




### XML FORMAT DATA

XML has been around since 1996 1. With age, it has become a very mature and powerful data format. Like JSON, XML provides a few simple building blocks that API makers use to structure their data. The main block is called a node.
Let's see what our pizza order might look like in XML:
```bash
<order>
    <crust>original</crust>
    <toppings>
        <topping>cheese</topping>
        <topping>pepperoni</topping>
        <topping>garlic</topping>
    </toppings>
    <status>cooking</status>
</order>
 ```
XML always starts with a root node, which in our pizza example is "order." Inside the order are more "child" nodes. The name of each node tells us the attribute of the order (like the key in JSON) and the data inside is the actual detail (like the value in JSON).

Now JSON format is very popular than XML for simplicity and for javascript objects like data.
Mcq:


### Display Data From API to UI

Here we will use a fake data API. At first, go to
### https://jsonplaceholder.typicode.com/  
Then scroll down and select /users. After clicking this URL you will see some JSON format data of 10 users. We will display the names of these users to UI using javascript.

Open your code editor. I am using vs code. You can use any code editor you preferred. Create a folder named fake API. Create a file named index.html also. Then write! sign and press the tab. You will find the code editor like this.

Then create a script tag and put this given code.

``` bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON</title>
</head>
<body>
    <h1>JSON - Javascript Object Notation</h1>
    <h2>All person From Json</h2>
    <ul id="userName"></ul> <!-- Giving an ID of UL to capture it. -->
    <script>
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(data => displayData(data));

        function displayData(data) {
            const usersNames = data.map(user => user.name);
            console.log(usersNames);
            const userName = document.getElementById('userName'); //capturing UL
            for (let i = 0; i < usersNames.length; i++) {
                const username = usersNames[i];
                const li = document.createElement('li'); // Creating Li to use in UL
                li.innerText = username; // Inputting username in LI
                userName.appendChild(li); // Selecting LI as UL's Child
            }
        }
    </script>
</body>
</html>
```
This code means that you are fetching/calling all user’s data using the fake data API URL which is given in fetch(URL). Which will give you a response. Then you will be able to get data using the response. Let’s console log the data and show the output.


Here you can see that, by console log data you have gotten 10 users’ data. Now our goal is to display the names of these users. For this, at first, we will map the users so that we can create an array of all users’ names. Then by using a loop we will be able to use all names one by one. Let’s do it.



After that, you have done your task. Let’s check if the data has been shown on the display or not.


## YAY! You have done it!

