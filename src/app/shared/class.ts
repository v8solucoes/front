import { Injectable } from '@angular/core';
import { DataLocal as Data} from '@domain/repository'
import { _debug } from '@repositoryDomain/debug';

@Injectable({
  providedIn: 'root'
})

export class DataLocal extends Data {}
_debug
