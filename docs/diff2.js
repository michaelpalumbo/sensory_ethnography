var watch = require('node-watch');

var myFuncCalls = 0;

var util = require('util')
var exec = require('child_process').exec;
var child;
var child2;
var child3;
var child4;



var files = [
  //'/path/to/file',
  'index.html'
];
 

 watch('index.html', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
{
myFuncCalls++;

}
  console.log(myFuncCalls);

child = exec("git diff -U$(wc -l /Users/mp/thst6329/docs/index.html | xargs) > ethnography.diff");
child2 = exec("diff2html -i file ethnography.diff -F page" + myFuncCalls + ".html -- -M HEAD~1");
child3 = exec("git add .");

	
child4 = exec("git commit -m \"autocommit " + myFuncCalls + " for the ethnography paper");




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