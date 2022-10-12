import { Injectable } from '@angular/core';
import { DataLocal as Data} from '@domain/repository'

@Injectable({
  providedIn: 'root'
})

export class DataLocal extends Data {}
