import {SyncService} from './base/sync.service';
import {ApiService} from './base/api.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {ISyncItem} from '../models/contracts/syncItem.interface';
import 'rxjs/add/operator/map'

@Injectable()
export class SyncServiceRef extends SyncService {
    constructor(private _apiService: ApiService) {
        super();
    }

    public sync(collection: Array<ISyncItem>): Observable<Array<ISyncItem>> {
        return this._apiService.post('sync', collection).map(result => result);
    }
}
