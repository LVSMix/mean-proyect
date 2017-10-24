/* app.js */

// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
/*const posts = [{
        id: 1,
        author: 'John',
        title: 'Templating with EJS',
        body: 'Blog post number 1'
    },
    {
        id: 2,
        author: 'Drake',
        title: 'Express: Starting from the Bottom',
        body: 'Blog post number 2'
    },
    {
        id: 3,
        author: 'Emma',
        title: 'Streams',
        body: 'Blog post number 3'
    },
    {
        id: 4,
        author: 'Cody',
        title: 'Events',
        body: 'Blog post number 4'
    }
]*/

// set the view engine to ejs
app.set('view engine', 'pug')


app.get('/', function(req, res) {
    res.render(
        'index', { title: 'Hey Hey Hey!', message: 'Yo Yo' })
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})