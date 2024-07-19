import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginPagesComponent} from "./pages/login-pages/login-pages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'application';
}
