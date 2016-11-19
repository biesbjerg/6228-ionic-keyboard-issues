import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	public constructor(protected _http: Http) {

	}

	public load(): Observable<{}> {
		return this._http
			.get('assets/data/data.json')
			.map(response => response.json());
	}

}
