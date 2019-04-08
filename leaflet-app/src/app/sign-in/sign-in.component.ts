import { Component, OnInit } from '@angular/core';
import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  item: {
    padding: '16px',
    textAlign: 'center',
    background: 'white',
    boxShadow: shadowBuilder(1),
    borderRadius: '4px',
    height: '100%'
  }
});

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);

  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
