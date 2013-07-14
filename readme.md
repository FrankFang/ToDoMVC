# TodoMVC 

This is a todo app built using **Backbone** and **RequireJS**.

To run the app, just open [index.html](./index.html).

The data was stored at localStorage.

## Unit Test

I do unit test via QUnit.

You can get the result of unit tests by opening [test/index.html](./test/index.html) in a browser.

I intend to run the unit tests via nodejs, but I got a problem. It seems to be [a bug of grunt-contrib-qunit](http://babble.byvernacchia.com/2013/06/05/qunit-grunt-and-require-problems.html).

But it doesn't master, QUnit can run in a browser.

## Documentation

Generated via YUIDoc, see [doc/index.html](doc/index.html)

## Build

I use grunt to compress file and generate documentation.

	cd ToDoMVC
	npm install
	grunt # grunt will compress js file under ./js/ and copy the compressed file to js_dist
	grunt doc # generate docomentation
	grunt dev # grunt will watch all js files under ./js/. Once the files are changed, grunt do the compressing task.
	grunt test # grunt run the unit tests and show the result. But it doesn't work somehow.

## Todo

 - [x] add a task.
 - [x] check / uncheck all tasks. ( checked task means done )
 - [x] clear completed.
 - [-] show all / active / completed tasks.
 - [x] delete one task.
 - [x] rename a task.
 - [x] auto save tasks.
 - [x] auto load tasks.