//---------------EXPRESS-------------

/*const express = require('express')
const app = express();

app.get('/',(req,res)=>{
res.send('Hello world');
});

app.get('/api/courses', (req,res) =>{
res.send([1,2,3]);
});



const port = process.env.PORT || 3000  
app.listen(port,() => console.log(`listening on port ${port}...`));*/


//-------------EXPRESS(GET)---------------

/*const { response } = require('express');
const express = require('express');
const bpp = express();

const courses = [
  {id: 1, name:'course1'},
  {id: 1, name:'course2'},
  {id: 1, name:'course3'},
];*/

/*bpp.get('/api/courses',(req,res)=>{
  res.send([1,2,3]);
  });*/

  // All id
/*bpp.get('/api/courses',(req,res)=>{
res.send(courses);
});

//particular ID
bpp.get('/api/courses/:id',(req,res)=>{
  res.send(req.params.id);
  });*/

  //to provide addition data-----------hav te lihu shkto
/*bpp.get('/api/courses/:year/:month',(req,res)=>{
    res.send(req.params);
    });*/

  // sortBy=name  

/*bpp.get('/api/person',(req,res)=>{

  let personName = req.query.name;
  let age = req.query.age;
  res.json({name:personName,age});
});*/

/*
bpp.get('/api/posts/:year/',(req,res)=>{
res.send(req.query);
});
const port = process.env.PORT || 3000
bpp.listen(port,()=> console.log(`listening on port ${port}`))*/

//----------Handling http GET request

/*const express = require('express');
const lab = express();

const courses = [
  { id:1 , name:'course1'},
  { id:2 , name:'course2'},
  { id:3 , name:'course3'},
  { id:10 , name:'course10'},
];

lab.get('/api/courses',(req,res)=>{
res.send(courses);
});

lab.get('/api/courses/:id',(req,res)=>{
const course = courses.find(c => c.id === parseInt(req.params.id));

if(!course)res.status(404).send('the course with the given id was not found');
res.send(course);
});

const port = process.env.PORT || 3000
lab.listen(port,()=> console.log(`listening on port ${port}`));
*/

/*var express = require('express');
const meet = express();

var courses = [
  { id:1 , name:'course1'},
  { id:2 , name:'course2'},
  { id:3 , name:'course3'},
];

meet.get('/api/courses',(req,res)=>{
  res.send(courses);
});

meet.get('/api/courses/:id',(req,res)=>{
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)res.status(404).send('the course given id was not found');
  res.send(course);
});
*/



//-----------handling Post request--------------------
/*
const express = require('express');
const app = express();
app.use(express.json());

var courses = [
  { id:1 , name:'course1'},
  { id:2 , name:'course2'},
  { id:3 , name:'course3'},
];

app.post('/api/courses',(req,res)=>{
    const course = {
      id: courses.length + 1,
      name:req.body.name
    };

    courses.push(course);
    res.send(course);
});

app.post('/api/courses',(req,res)=>{
  const course = {
    id: courses.length + 1,
    name:req.body.name
  };

  courses.push(course);
  res.send(course);
})

const port = process.env.PORT ||5000 
app.listen(port,()=> console.log(`listening on port ${port}`));*/

//-----------------------------------------------------------
/*const  express = require('express');
const hill = express();

hill.use(express.json());

hill.get('api/courses/main',(req,res)=>{
  res.send("hello world");
});



hill.post('api/courses',(req,res)=>{
const course = {
  id: courses.length + 1,
  name: req.body.name
};

courses.push(course);
res.send(course);
});

const mort = process.env.PORT ||5000 
hill.listen(mort,()=> console.log(`listening on port ${mort}`));*/

//------------------------POST REQUEST--------------------------
/*
const express = require('express')
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

let courses = [
  {id:1 , name:'course1'},
  {id:2 , name:'course2'},
  {id:3 , name:'course3'}
];

app.get('/api/courses',(req,res) => {
  res.send(courses);
});

app.post('/api/courses',(req,res)=>{
const course = {
  id: courses.length + 1,
  name :req.body.name
};
  
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 4000

app.listen(port,()=> console.log(`listning on port ${port}`));*/

//---------MIDDLEWARE ---------------
/*
const express = require('express');
const man = express();

man.get('/home',(req,res)=>{
  console.log("jay calling");
});

const port = process.env.PORT || 4000
man.listen(port,()=> console.log(`listening on ${port}`));

man.use((req,res,next)=>{
  console.log(req.method, req.path, req.ip);
  next();
  });*/


//--------------Input Validation-----------
/*
const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const courses = [
  {id:1 , name:'courses1'},
  {id:2 , name:'courses2'},
  {id:3 , name:'courses3'},
]

console.log(courses);

app.get('/api/courses',(req,res)=>{
res.send(courses);
});


app.post('/api/courses',(req,res)=>{

const schema = {
  name: Joi.string() .min(3) .required()
};

const result = Joi.Validate(req.body,schema);
console.log(result);

const course = {
  id:courses.length + 1,
  name:req.body.name
};

  courses.push(course);
  res.send(course)
});


app.delete('/api/courses/:id',(req,res)=>{

  //Look up the course
  //not existing, return (404)
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)res.status(404).send('The course with given id does not found');

  //delete

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);

});

const port = process.env.PORT || 4000
app.listen(port,()=> console.log(`listeing on ${port}`));*/


//-----------Creating custom middlewear
/*
const express = require('express');
const app = express();
var bodyParser = require ('body-Parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const courses = [
  {id: 1 , name:'course1'},
  {id: 2 , name:'course2'},
  {id: 3 , name:'course3'},
];

app.get('/api/courses',(req,res)=>{
  res.send(courses);
});

app.post('/api/courses',(req,res)=>{
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };


  courses.push(course);
  res.send(course);

});

app.delete('/api/courses/:id',(req,res)=>{

  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)res.status(404).send('The course with given id does not found');

  const index = courses.indexOf(course);
  courses.splice(index,1);

  res.send(course);
});

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`listning on port ${port}`));*/


//-----------Middlewear----------------

// where client send request more (GLOBAL)

/*
const express = require('express');
const app = express();

const result = function(req,res,next){

    console.log('current route is', req.originalUrl);
    next();
};

  app.use(result);

app.get('/home',(req,res) =>{
  res.send('This is home page...');
});

app.get('/about',(req,res)=>{
  res.send('This is about page...');
});

app.get('/contact',(req,res)=>{
  res.send('This is contact page...');
});

const port = process.env.PORT || 3500
app.listen(port,()=> console.log(`listening on port${port}`));*/


// MOSH METHOD ()
/*
const express = require('express');
const app = express();
const logger = require('./connect')

app.use(express.json());
app.use(logger)

app.use(function(req,res,next){
  console.log('logger...');
  next();
});

app.get('/api/course',(req,res)=>{
  res.send('hey this is my starting...');
});


const port = process.env.PORT || 3500
app.listen(port,()=> console.log(`listening on port${port}`));
*/

//PARTICULAR MIDDLEWARE
/*
const express = require('express');
const router = express.Router();
let app = express();
app.use(express.json());

const result = function(req,res,next){
console.log("middleware woking");
next()
};

//app.use(logger); for global and now we are working with particular middleware

app.get('/',(req,res)=>{
  res.send("Hello world, jay");
}); 

app.get('/home',result,(req,res)=>{     //result is imp in particular method 
  res.send("Good morning for jay");
}); 

app.get('/about',(req,res)=>{
  res.send("Good evening");
});  

const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`listening on port ${port}`));*/


//Built in middleware
/*
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const courses = [
  {id:1 , name: 'course1' },
  {id:2 , name: 'course2'},
  {id:3 , name: 'course3' },
];

app.get('/',(req,res) =>{
res.send('Hello world');
});

app.get('/api/courses',(req,res) =>{
  res.send(courses);
  });


const port = process.env.PORT || 3000
app.listen(port,()=> console.log(`listning on port ${port}`))
*/

