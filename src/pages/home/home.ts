import { Component } from '@angular/core';

import 'rxjs/add/operator/do';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data: any;

  constructor(protected _dataService: DataService) {

  }

  public loadData(): void {
    this._dataService.load()
      .do(data => console.log('DATA LOADED', data))
      .do(data => this.data = data)
      .subscribe();
  }

}
