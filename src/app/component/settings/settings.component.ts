import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Isettings } from '@domain/interface';
import { DataService } from '@repository/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() icon: boolean = false;

  isActive = false;
  labelPosition: Isettings['theme'] = this.data.local.settings.theme;
  url = this.data.requestLast.lastUrlNoLanguage

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    public data: DataService
  ) {

  }
  ngOnInit(): void {
  }

  public colorTheme(theme: Isettings['theme']): void {
    const remove = theme == 'dark' ? 'light-theme' : 'dark-theme'
    const add = theme == 'dark' ? 'dark-theme' : 'light-theme'
    this.document.documentElement.classList.remove(remove);
    this.document.documentElement.classList.add(add);
    this.data.local.settings.theme = theme
  }

  setSize(tipo: 'system' | 'increment' | 'decremente') {

  /*   --font-size-mt-15: 15px;
    --font-size-mt-24: 24px;
    --font-size-mt-26: 26px;
    --font-size-mt-38: 38px; */

    const valor = tipo == 'system' ? 0 : tipo == 'increment' ? 1 : -1
    const size = tipo == 'system' ? 0 : this.data.local.settings.fontSize + valor + 1

/*     document.documentElement.style.setProperty('--menu-size', 300 + size + 'px') */
    document.documentElement.style.setProperty('--font-size-mt-14', 14 + size + 'px')
    document.documentElement.style.setProperty('--font-size-mt-15', 15 + size + 'px')
    document.documentElement.style.setProperty('--font-size-mt-24', 24 + size + 'px')
    document.documentElement.style.setProperty('--font-size-mt-26', 26 + size + 'px')
    document.documentElement.style.setProperty('--font-size-mt-38', 38 + size + 'px')

    this.data.local.settings.fontSize = size
  }

}
