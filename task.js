const   axios  = require("axios");
// const express = require ('express');
// const app = express();
var nodemailer = require('nodemailer');

 
async function getUrl(){
		
	try {
		let config = {
			method: "get",
			url: `https://blocksscan.io`,
		};
		let data = await axios(config);
		
		console.log(data.status)
		//  res.send(data);

		//NodeMailer to send mail alert

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
			user: 'kulkarnijay722@gmail.com',
			pass: 'lrpyjhjdrxbhvpfp'
			}
		  });
		  
		//   var textBody = {
		// 	text: "Testing Nodemailer",
		// 	stat: `${data.statusText}`

		//   }

		  var mailOptions = {
			from:'kulkarnijay722@gmail.com',
			to:'kulkarnijay76@gmail.com',
			subject: 'RPC Network Alert',
			text: `Testing Nodemailer \n Status: ${data.status} \n StatusText: ${data.statusText}`
		  };		  		
		  
		setInterval(function () 
		
		{
			transporter.sendMail(mailOptions, function(error , info){
			// console.log(info)
			
			// if else condition for status

			if (data.status === 200) {
			console.log('Email sent: ' + info.response);
			} else {
			console.log(error);
			}
		});
	
		},
		60000); //30 seconds

	}
	catch(error){
		console.log(error)
	}
}

getUrl()
// app.get("/",function(req,res){
		 
// res.send(data)
// getUrl()

// })


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`listening on port ${port}...`));