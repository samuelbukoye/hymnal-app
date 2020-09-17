import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <main class="container-fluid" data-toggle="collapse" data-target=".navbar-collapse.show">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'rccg-hymn';
}
