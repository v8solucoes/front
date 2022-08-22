import { Injectable } from '@angular/core';
import { DataLocalDomain } from '@domain/repository'

@Injectable({
  providedIn: 'root'
})

export class DataLocal extends DataLocalDomain {}
