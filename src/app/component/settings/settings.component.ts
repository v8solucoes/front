import { Isettings } from './../../../../../domain/src/shared/interface';
import { DataService } from './../../repository/data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  public theme: string;
  isActive = false;
  labelPosition: Isettings['theme']  = this.data.local.settings.theme;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    public data: DataService) {
    
    this.data
      this.theme = this.document.documentElement.classList.contains(SettingsComponent.DARK_THEME_CLASS) ? SettingsComponent.DARK_THEME_DARK : SettingsComponent.DARK_THEME_LIGHT;
  }
  ngOnInit(): void {
  }

  public colorTheme(theme: Isettings['theme']): void {
    const remove = theme== 'dark' ? 'light-theme' : 'dark-theme'
    const add = theme== 'dark' ? 'dark-theme' : 'light-theme'
    this.document.documentElement.classList.remove(remove);
    this.document.documentElement.classList.add(add);
    this.data.local.settings.theme = theme
  }
  
  setSize(tipo: 'system' | 'increment' | 'decremente') {
  
  const valor = tipo=='system' ? 0 : tipo== 'increment' ? 1 : -1
      const size = this.data.local.settings.fontSize + valor
      console.log(this.data.local.settings.fontSize)
      document.documentElement.style.setProperty('--fonte-material', 15 + size + 'px')
      document.documentElement.style.setProperty('--fonte-14', 14 + size + 'px')
      document.documentElement.style.setProperty('--fonte-16', 16 + size + 'px')
      document.documentElement.style.setProperty('--fonte-17', 16 + size + 'px')
      document.documentElement.style.setProperty('--fonte-20', 20 + size + 'px')
      this.data.local.settings.fontSize = size
  }
  
}
