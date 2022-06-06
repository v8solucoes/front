import { Directive, ElementRef, forwardRef, HostListener, InjectionToken, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  innerValue: any
  
  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef) { }
  
  get value() {
    return this.innerValue
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v
      this.onChangCb(v)
    }

  }

  onTouchedCb: (_: any) => void = ()=> {};
  onChangCb: (_: any) => void = () => { };
  protected setProperty(key: string, value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  setDisabledState(isDisabled: boolean): void {
    this.setProperty('disabled', isDisabled);
  }

  writeValue(v: any): void {
    this.value = v
  }
  registerOnChange(fn:any): void {
    this.onChangCb = fn;
  }
  registerOnTouched(fn:any): void {
    this.onTouchedCb = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: KeyboardEvent) { 

    this._elementRef.nativeElement.value.toLocaleUpperCase()
    this.value = this._elementRef.nativeElement.value.toLocaleUpperCase()

   /*  console.log(this._elementRef.nativeElement.value.toLocaleUpperCase())
    this.value(this._elementRef.nativeElement.value.toLocaleUpperCase()) */
  }
  
/*   @HostListener('blur', ['$event'])
  onBlur($event: any) {

    console.log(this._elementRef.nativeElement.value.toLocaleUpperCase())
    this.writeValue(this._elementRef.nativeElement.value.toLocaleUpperCase())
  } */
}

