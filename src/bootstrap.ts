///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { bootstrap } from 'angular2/platform/browser';
import { App } from './app/app'

bootstrap(App)
  .catch(err => console.log(err));
