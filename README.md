

# TopReposApp
===============================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
## Table of Contents

* [About](#about)
* [Installing](#installing)
* [Features](#features)
* [Pagination](#pagination)
* [Libraries](#libraries)
* [APIs](#api)

## About

A small webapp that will list the most starred Github repos that were created in the last 30 days.
 
## Installing

1- Clone the repo.

2- run `npm install`.

3- run `npm start`.

4- Navigate to `http://localhost:4200/`.

## Features

1- List top starred repos from 30 days.

2- Paginate on scroll.

3- Display spinner on API call.

4- Display Error alert on error

## Pagination

Number of items per page is 10, to easily fire infinite scroll.

## Libraries

1- ngx-ui-loader
This package provides very nice UI spinners with many options, and is very easy to implement.  
[ngx-ui-loader](https://github.com/t-ho/ngx-ui-loader).

2- Bootstrap 4
The very popular CSS framework for layout and styling.  
[Bootstrap 4](https://github.com/t-ho/ngx-ui-loader).

3- ngx-infinite-scroll
Provides pagination on scrolling with direct implementation.  
[ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll).


## APIs

1- `https://docs.github.com/en/rest/reference/search#search-repositories`
