var watch = require('node-watch');

var count = 0; //this is the total number of .html files already in the folder. 

var util = require('util')
var exec = require('child_process').exec;
var child;
var child2;
var child3;
var child4;
var child5;
var child6;

const delay = require('delay');

var files = [
  //'/path/to/file',
  'index.html'
];

watch('index.html', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);

//child5 = exec("ls -lR /Users/mp/thst6329/docs/*.html | wc -l", function (error, stdout, stderr)
//{ count = stdout
//	console.log(count) //need to make this global...
//});


{count++;}

// output current state of git to a .diff file
child = exec("git diff -U$(wc -l /Users/mp/thst6329/docs/index.html | xargs) > ethnography.diff")

child6 = exec("cp /Users/mp/thst6329/docs/index.html /Users/mp/thst6329/docs/index" + count + ".html")
//convert the .diff file to html using diff2html
child2 = exec("diff2html -i file ethnography.diff -F page" + count + ".html -- -M HEAD~1");
console.log("page" + count + ".html")
        // Executed after 200 milliseconds 

//couldn't get the 'promise' to work, so using just a delay, add the unstaged changes
delay(500)
   
    .then(() => {
    	child3 = exec("git add .");
    	
    });


//wait until end, then autocommit!
delay(1000)
    
.then(() => {
	child4 = exec('git commit -m "autocommit " + count + " for the ethnography paper"');
    console.log("autocommit " + count + " for the ethnography paper")

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