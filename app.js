const tasks = require('./tasks')
const path = require('path');
const cors = require('cors');
const express = require('express');
const { dirname } = require('path');
var nn= require('./imp.js').f1('good job today');
var man= require('./imp.js').man;
//console.log(person.firstName);
//f1('hfdfdellobxdgdfrgdgfd');
const student = {'name':'john','age':10}
const {COMPUTERNAME} = process.env;
console.log(nn);
console.log(man);
console.log(COMPUTERNAME);
const app = express();
app.use(cors());
const PORT = 3010;
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server!");
});
// Without middleware
app.get('/json', function (req, res) {
	///
	//const cc = mars;
	let PLANETS_INFO = {
		mercury: {
		  title: "Mercury",
		  description:
			"Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.",
		},
	  
		venus: {
		  title: "Venus",
		  description:
			"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
		},
	  
		earth: {
		  title: "Earth",
		  description:
			"Earth is the third planet from the Sun and the only object in the Universe known to harbor life.",
		},
	  
		mars: {
		  title: "Mars",
		  description:
			'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet".',
		},
	  };
	  console.log("gggggggggggg")
	  const john = "earth";
	  console.log(PLANETS_INFO[john].description)
	  console.log("gggggggggggg")
	///
	
	//let data = { user: 'geek',name:'john',subject:['maths','English'] };
	let data1= { user: 'geek',
	name:'john',
	subject:['maths','English'],father:{name:'paul'},
	novel:[{title:'things fall apart',description:'african story',author:'chinua achebe'},
	{title:'African child',description:'african story',author:'unknwon'},{title:'African Night Entertainment',description:'african story',author:'knwon'}] }
	//******** */
	let tt=['man','woman']
	let data2 = { user: 'nerd',
	name:'james',
	subject:['Physics','English'],father:{name:'peter'} }
	let data = [ data1	,data2	]
	console.log(data[0].subject[1]);
    res.json(data1);
	const tte= [...tt,data1.novel];
	const gg=data1.novel.filter(fil=>fil.author ==='knwon');
	const vchange=data1.novel.map((fil)=>fil.author ==='knwon'?{...fil,author:'john africa'}:fil);
	console.log("***********");
	//console.log(vchange);
	console.log(Math.floor(Math.random()*3));
	// changing a member of an object using spread operator
	const tee= {...student,name:'peter'};
	console.log(tee);
	console.log(tee?.position);

	console.log("***********");
	const nn =
		{
			title : 'fff',
			description:'fgeg',
			author:'ffgf'

		}
	
	//data1.novel.push(nn);
	console.log(data1.novel[2]);

	console.log(data1.novel);
	req.user = 'john';
	
	req.header("Content-Type");
	req.header("Content-Length");
	req.header("user-agent");
	req.header("Authorization");
});
 
////////
app.get('/tt', (req, res)=>{
    res.status(200);
    res.json(tasks);
	console.log(req.method);
});
const coin =2;
exports.coin = coin;

app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
		//console.log(module);
	}
);
