# Portfolio
My portfolio website was built with React and Django. I am hosting my website on AWS.
View my live site [here](http://www.emilior.com/).

### Technical details
##### Frontend
- React displays my project cards using the react-masonry-component. This means that the website automatically scales based on your screen size. 
- I use bootstrap in order to create a nice UI and to style my website nicely.
- On each project, I upload a markdown file to be displayed seperately.

##### Backend
- Django is used in order to serve a REST API.
- The Django Admin interface allows me to update and manage my backend easily.
- From the admin interface, I am able to customize each component of the frontend.


### Run locally

##### Install and run Virtualenv (Linux)
```sh
$ pip install virtualenv
$ virtualenv env
```
##### Install dependicies
```sh
$ pip install virtualenv
$ virtualenv env
$ source env/bin/activate
```

##### Install dependicies
```sh
(env) $ pip install -r requirements.txt
```

##### Run!
```sh
(env) $ cd src/
(env) src/ $ python manage.py runserver
```
View at [127.0.0.1:8000](http://127.0.0.1:8000)

License
----

MIT


