import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing';

  constructor(public router: Router) {
  }

  public performSimpleRedirect() {
    this.router.navigateByUrl('/simple');
  }

  public goToUserPage() {
    const obtainedUserId = '456';
    this.router.navigate(['user', obtainedUserId]);
  }
}
