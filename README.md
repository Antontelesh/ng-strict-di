# ng-strict-di

Angular patch to warn when no `$inject` is defined.
Usable for angular 1.2, where native `ngStrictDI` mode is not available.

## Installation

The package can be simply installed via npm:

```
npm install ng-strict-di --save
```

## Usage

This module exports only one function named `patch`.
The function accepts only one argument — `angular`.
It modifies `angular.module` API, so use it only in development environment.

## Example

```
import {patch} from 'ng-strict-di';

// here `angular` is a global variable
patch(angular);
```
