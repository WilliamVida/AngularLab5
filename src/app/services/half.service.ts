import { Injectable } from '@angular/core';
import { AppPage } from 'e2e/src/app.po';
import { HalfService } from '../services/half.service';

@Injectable({
  providedIn: 'root'
})
export class HalfService {

  constructor() { }

  getHalf(mynum:number):number {
    return mynum/2;
  }
}
