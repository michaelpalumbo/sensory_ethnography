var watch = require('node-watch');

var myFuncCalls = 0;

var util = require('util')
var exec = require('child_process').exec;
var child;
var child2;
var child3;
var child4;
var child5;


const delay = require('delay');


var files = [
  //'/path/to/file',
  'index.html'
];
 

 watch('index.html', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);

child5 = exec("ls -lR /Users/mp/thst6329/docs/*.html | wc -l", function (error, stdout, stderr)
{
	console.log(stdout + " number of files")
});

//{myFuncCalls++;}
//console.log(myFuncCalls);

// output current state of git to a .diff file
child = exec("git diff -U$(wc -l /Users/mp/thst6329/docs/index.html | xargs) > ethnography.diff")

//convert the .diff file to html using diff2html
child2 = exec("diff2html -i file ethnography.diff -F page" + myFuncCalls + ".html -- -M HEAD~1");
        // Executed after 200 milliseconds 

//couldn't get the 'promise' to work, so using just a delay, add the unstaged changes
delay(500)
   
    .then(() => {
    	child3 = exec("git add .");
    	
    });


//wait until end, then autocommit!
delay(1000)
    
.then(() => {
	child4 = exec("git commit -m \"autocommit " + myFuncCalls + " for the ethnography paper\"");
    console.log("autocommit " + myFuncCalls + " for the ethnography paper")

        // Executed after 200 milliseconds 
    });



});

 /*
var notifications = new Notify(files);
notifications.on('change', function (file, event, path) {
	
	{child = exec("git diff -U$(wc -l /Users/mp/thst6329/docs/index.html | xargs) > ethnography.diff");}


	{
myFuncCalls++;

}
  console.log(myFuncCalls);


});
 

 
// kill everything 
//notifications.close();

*/