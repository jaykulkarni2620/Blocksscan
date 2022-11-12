// -----------morgan---------------

const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.urlencoded());  

app.get('/',(req,res)=>{
  res.send('Hello world this is jay');
});

const courses = [
  {id:1 , name: 'course1' },
  {id:2 , name: 'course2' },
  {id:3 , name: 'course3' },
]

app.get('/api/courses',(req,res)=>{
  res.send(courses);
});

const port = process.env.PORT || 4200
app.listen(port,()=> console.log(`listening on port${port}`));