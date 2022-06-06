import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formPipe'
})
export class FormPipePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {
    return value?.toLocaleUpperCase();
  }

}
