# Ang2-Starter
## Intro
This repository is the home for the Gikuyu Original Angular2 MEAN quick starter. I started this project to quickly scaffold a basic fully-MEAN project. Feel free to fork me and make your own changes!

## Getting Started
Clone this repository into an out of the way folder on your computer
*Example:*
*cd ~/Desktop/resources/*
*git clone https://github.com/gikuyunderitu/ang2-starter*

Then go to your home directory *ie. cd~* and open up up your bash-profile *ie. vim .bash_profile* and copy the functions in functions.txt to those files

Example function
```
function ang2starter() {
    mkdir -p "mean-"$1
    cd "mean-"$1
    cp -rf ~/Coding_projects/resources/ang2-starter/* .
    yarn install
    ng new $1 --routing --style sass --skip-git
    mv $1 public
    yarn add @angular/cli --dev
    echo node_modules/"\n"public/node_modules/ > .gitignore
    git init
    git add -A
    git commit -m "Ang2starter generated commit."
    mv proxy.conf.json public/
    jq '.scripts.start = "ng serve --proxy-config proxy.conf.json"' public/package.json > tmp.$$.json && mv tmp.$$.json public/package.json
}
```

### What Not to Expect
I'm no pro when it comes to the MEAN stack. I just do what can and can what I do. As such, not everything may be laid out in the perfect way. Feel free to refactor the folder structure to your heart's content

### What You Will Find
There a a few nice surprises in store that will allow you to get rolling pretty quickly with everything

## Features
### Aliases
Soo... as much as I love you guys for forking this repository and revisiting this page so much, the most effective way to get this stuff rockin and a rolling for development (even offline!)
Go ahead modify and include some of the aliases from the aliases.txt file to suit your needs

### Snippets
There's this AWESOME snippets file attached that I've found super helpful in the fast iteration of my projects. Some included snippets are for client side js, angular-infused html, and even pug (previously jade) html preprocessor support!

### Sass Preprocessor integration
Go ahead and globally install node-sass. It's a dependency for many of the aliases run. It's used to compile SASS (a CSS Preprocessor)


### TODO
Add angular cli to the dev dependencies of package.json
