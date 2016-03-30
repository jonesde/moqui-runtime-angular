import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

// Add all operators to Observable
import 'rxjs/Rx';

import {appsComponent} from '../apps.ts';

bootstrap(appsComponent, [ROUTER_PROVIDERS]);
