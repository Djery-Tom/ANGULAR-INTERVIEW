import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULAR-INTERVIEW';

  public menus :any = [
    {
      title: "Exercice 1",
      url: "/exercice1"
    },
    {
      title: "Exercice 2",
      url: "/exercice2"
    },
    {
      title: "Exercice 3",
      url: "/exercice3"
    },
    {
      title: "Exercice 4",
      url: "/exercice4"
    },
    {
      title: "Exercice 5",
      url: "/exercice5"
    },
    {
      title: "Exercice 6",
      url: "/exercice6"
    }
  ]

}
