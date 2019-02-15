var app = new Framework7({
// App root element
root: '#app',
// App Name
name: 'My App',
// App id
id: 'com.myapp.test',
// Enable swipe panel
panel: {
swipe: 'left',
},
// Add default routes
routes: [
{
path: '/teams/',
url: 'teams.html',
},

{
path: '/sponsors/',
url: 'sponsors.html',
},

{
path: '/schedule/',
url: 'schedule.html',
},

{
path: '/committee/',
url: 'committee.html',
},

{
path: '/registration/',
url: 'registration.html',
},

{
path: '/venue/',
url: 'venue.html',
},

],
// ... other parameters
});
var mainView = app.views.create('.view-main');

