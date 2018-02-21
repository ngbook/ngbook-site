import {
    Http, Response,
    Headers, RequestOptions
} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { demos } from '../../demo.conf';

@Injectable()
export class GetDemosService {

    getDemos() {
        return Observable.of(demos);
    }
}
