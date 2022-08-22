import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InameValidatorLocal, Irequest } from '@domain/interface';
import { ValidatorsLocal } from '@domain/validator-local';

@Directive({
  selector: '[appFormMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>FormMaskDirective),
      multi:true
  }
  ]
})
export class FormMaskDirective implements ControlValueAccessor {

  @Input() request?: Irequest;
  @Input() validatorName?: InameValidatorLocal;
 
  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef) { 

    }
  
  set value(v: string) {
  /*   console.log('MASK')
    console.log(v)
    console.log(this.request) */

    const req = this.request!
    req.validator!.value = v
    req.validator!.name = this.validatorName!
    
/*     console.log(req.validator!) */
    const validator = new ValidatorsLocal(req)
  
    this.writeValue(validator[this.validatorName!].applyMaskView)
    this.onChangeCb(validator[this.validatorName!].applyMaskData)
  }

  onTouchedCb: (_: any) => void = ()=> {};
  onChangeCb: (_: any) => void = () => { };

  writeValue(v: any): void {
    this._elementRef.nativeElement.value = v
  }
  registerOnChange(fn:any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn:any): void {
    this.onTouchedCb = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: KeyboardEvent) {
    this.value = this._elementRef.nativeElement.value
  }
}

