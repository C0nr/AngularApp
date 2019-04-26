import { Component, OnInit } from '@angular/core';
import {LyTheme2, shadowBuilder, ThemeVariables} from "@alyle/ui";

const STYLES = (theme: ThemeVariables) => ({
  container: {
    padding: '16px',
    textAlign: 'center',
    background: 'white',
    boxShadow: shadowBuilder(1),
    borderRadius: '0 30px 30px 0',
    height: '100%'
  }
});

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);

  login: string = "If you want to sign in please go to the ";
  registration: string = "If you want to sign up please go to the";

  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
