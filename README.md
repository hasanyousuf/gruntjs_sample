# A gruntjs project sample code

This sample is based on gruntjs which can simple your redundant task. This sample code is written using ubuntu linux. It can be executed on Windows machine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Your need to have nodejs and any web server listening on port 80 through http://localhost:80 on your computer. You need to place index.html at root of web server so file should be accessible using ttp://localhost:80. If donot have nodejs installed only on ubuntu.

```
sudo apt-get install nodejs
```

### Installing

A step by step series of examples that tell you have to get a development env running

```
git clone https://github.com/hasanyousuf/gruntjs_sample.git
cd grunt_sample
npm install
```
It will install all dependencies automatically on your development

To execute the project

```
grunt
```

To see that program is watching any change in project. Use one terminal and execute the following command

```
grunt watch
```

And in other terminal window, make a change in any file. Project will be executed automatically as soon as it will find any change in project files.

## Authors

* **Hasan Naqvi ** - *Initial work* - (https://github.com/HasanYousuf)
