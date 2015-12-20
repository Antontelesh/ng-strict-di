# ng-strict-di

Angular patch to warn when no `$inject` is defined.
Usable for angular 1.2, where native `ngStrictDI` mode is not available.

## Installation

The package can be simply installed via npm:

```
npm install ng-strict-di --save
```

## Usage

This module exports only one function named `ngStrictDI`.
The function accepts only one argument — `angular` and registers new angular module,
returning its name.

It modifies `angular.module` API, so use it only in development environment.

## Example

```
import {ngStrictDI} from 'ng-strict-di';

angular.module('MyModule', [
  ngStrictDI(angular),
  // your dependencies here
])
```
