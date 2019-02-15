[![Build Status][travis-image]][travis-url]

# express-https-skeleton
an express, https web application

## toc
* [installation](#installation)
    * [install dependencies](#install-dependencies)
    * [config](#config)
    * [local ssl](#local-ssl)
* [run the application locally](#run-the-application-locally)
* [running behind a proxy](#running-behind-a-proxy)

## installation
```sh
git clone https://github.com/dan-nl/express-https-skeleton.git
```

### install dependencies
```sh
npm i
```

### config
create the following config files based on their `.example` files and alter the contents as necessary:

* `config/app/config.js`
* `config/cookie/config.js`

### local ssl
you’ll need to create a local ssl certificate if you don’t already have one; here’s [an article][ssl-article] that walks you through setting one up on a mac.

you can then add the ssl certificate and key to your local environment, so that they’re available to the application config. here’s an example of how you can add the environment variables using the `.bash_profile` file in your user directory.

```sh
# ssl env
[ -f $HOME/ssl/server.key ] && export SSL_KEY=$HOME/ssl/server.key
[ -f $HOME/ssl/server.crt ] && export SSL_CRT=$HOME/ssl/server.crt
```

## run the application locally
the npm start script will:

* start the express webserver on the port specified in `config/app/config.js`, which is set to `3001` in the `.example` file; https://localhost:3001/

```javascript
npm start
```

## running behind a proxy
the `./bin/www` script will:

* start the express webserver on the port specified in `config/app/config.js`, which is set to `3001` in the `.example` file.

### pm2
on your web server, behind a proxy, you could use [pm2][pm2-url] to start the application:

```javascript
pm2 start ./bin/www
```

## license
[MIT License][mit-license]

[mit-license]: https://raw.githubusercontent.com/dan-nl/express-https-skeleton/master/license.txt
[pm2-url]: https://pm2.io/doc/en/runtime/overview/
[ssl-article]: https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec
[travis-image]: https://travis-ci.org/dan-nl/express-https-skeleton.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/express-https-skeleton
