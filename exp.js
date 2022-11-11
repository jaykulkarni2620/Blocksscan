/*const express = require('express');

const app = express();

app.get = ('/',(req, res) =>{
	
	res.send('Hello this is jay');
	
});

//port

const port = process.env.PORT || 3000;

app.listen(port,()=> console.log(`Listening on port ${port}...`));*/


//Route Parameters 1.

/*const express = require ('express');
const app = express();

app.get('/api/courses/:id',(req,res) => {
	res.send(req.params.id);
});

const port =  process.env.PORT ||3000;
app.listen(port,()=> console.log(`listening port ${port}`));

*/

//2.Route parameter

/*const express = require('express');
const app = express();

app.get('/api/posts/:month/:years',(req , res)=> {
	res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`the port ${port}`));
*/

//----------------Handling http get request-----------------------GET-Getting data, POST-creating data, PUT- updating data, DELETE - deleting data

const express = require('express');
const app = express ();

app.use(express.json());

const courses = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'akshay'},
];

app.get('/api/courses',(req , res )=> {
	res.send(courses);
});

app.get('/api/courses/:id',(req , res)=> {
const course = courses.find(c => c.	id === parseInt(req.params.id));

if(!course) res.status(404).send("404 Not Founded");
res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`the port ${port}`));


/*const express = require('express');

const app = express();

app.get = ('/',(req, res) =>{
	
	res.send('Hello this is jay');
	
});

app.get = ('/api/courses',(req,res) => {
	
	res.send([1,2,3]);
	
});

const port = process.env.PORT || 3000;

app.listen(3000, console.log("Listening on port 3000..."));*/



app.post = ('/api/courses', (req , res) =>{
	
	const course = {
		
		id: courses.length + 1,
		name : req.body.name
	};
	
	courses.push(course);
	res.send(course);
	
});

