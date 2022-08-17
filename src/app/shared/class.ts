import { Injectable } from '@angular/core';
import { DataLocalDomain } from '@shared-library/repository'

@Injectable({
  providedIn: 'root'
})

export class DataLocal extends DataLocalDomain {}
