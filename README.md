# Image upload example with HTML form, Node.js, ExpressJS, Heroku and Cloudinary
This project demonstrates how to implement image uploading by using Express web framework,
Heroku app hosting and Cloudinary image hosting. 

The project is a node.js express app, which serves a simple html page (/static) with a form that can be used to send an image to the app (/upload). 

The upload route in thr server app uses multer middleware to receive files incoming with form/multipart format.
Cloudinary (http://cloudinary.com/) is used as a target host, where the images are stored. The app uploads the received image to cloudinary and 
returns the upload information from cloudinary in JSON format. 

## Installation
It is assumed you have installed git and Heroku CLI and have a Heroku account.  

- Clone this project
- Create a new Heroku app
  - 'heroku create'
- Add "Cloudinary" addon to your Heroku app
  - 'heroku addons:create cloudinary:starter'
- Install the npm dependencies 
  - 'npm install'
- Deploy to Heroku 
  - 'git push heroku master'
- Open your heroku app with the /static prefix (for example https://yourappname.herokuapp.com/static) to see the HTML form for uploading

    