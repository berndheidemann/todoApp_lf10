import { Component } from '@angular/core';
import { routerTransition } from './animations/routing-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'MagicTodos';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
