# Google Myndir

A simple React app that uses Google Custom Search to search for Icelandic news images. <br/>
It was created with the *create-react-app* starter kit and uses client side rendering. <br/>
When creating the project, a *Mobile First* approach was used where we focus on the content for mobile site first and the implement for bigger devices afterwards.


## Setup

Here are instructions on how to run the project locally. Begin by cloning the repo:
```bash
> git clone https://github.com/davidpxn/google_news.git
> cd google_news
```

Install all necessary npm packages:
```bash
> npm install
```

Create file called `.env.local` in the root of the project. Copy the text from `.env.example` and paste it into the new file. This file contains the Google Custom Search API URL. You will need to replace *API_KEY* in the querystring of the URL with your own API key. <br/>

Now you are all set to run the project:
```bash
> npm start
```
<br/>


## Running instance

A running instance of the project is hosted on *Heroku* and can be found here: https://google-myndir.herokuapp.com/
