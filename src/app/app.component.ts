import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './requests/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private api: ApiService
  ){}
  ngOnInit(): void {
    console.log('LoginComponent initialized');
    this.api.post('/auth/login', {'loginName':'admin','password':'1234'}).subscribe(
      (respose) => {
        console.log(respose)
      }
    )
    
  }
  title = 'frontend';
}
