import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Imodel, IValidatorRequest } from '@shared-library/interface';
import { ValidateCompose } from '@shared-library/validator';

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

  @Input() model?: Imodel;
 
  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef) { 
    
    console.log('Directive')
    console.log(this.model)
    }
  
  set value(v: string) {
    console.log(v)
    console.log(this.model)

    const nameValidator = this.model?.validate.test as Imodel['validate']['test']
    const valueId = this.model?.id as Imodel['id']
    const req: IValidatorRequest = {
      value: v,
      valueAll: null,
      valueId,
      nameValidator,
      language: 'en'
    }
    const validator = new ValidateCompose(req)
  
    this.writeValue(validator[nameValidator].applyMaskView)
    this.onChangeCb(validator[nameValidator].applyMaskData)
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
    console.log(this.model)
    this.value = this._elementRef.nativeElement.value
  }
}

