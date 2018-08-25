import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitFilterValuesService {
  emitSelectedfilterValues: Subject<any> = new Subject<any>();
  constructor() { }
}
