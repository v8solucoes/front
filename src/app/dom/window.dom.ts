import {Injectable} from '@angular/core';

function _window(): any {
  // retorna objeto nativo do windows
  return window;
}

@Injectable()
export class WindowDom {
  
  get nativeWindow(): any {
    return _window();
  }
  
}