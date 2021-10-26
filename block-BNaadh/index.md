writeCode

Q. write express generator command with varying options to generate express app with following features:

- using ejs as template engine
express --view=ejs App1
- no views for express application
express --no-view App2
- express app with gitignore
express --git App3
- express app with sass support for styling.
express --css==sass App4
- ejs as template engine and sass for styling
express --view=ejs --css=sass App5
- pug as template engine and gitignore together
express --view=pug --git App5
