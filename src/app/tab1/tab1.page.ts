import { Component } from '@angular/core';
import { Router } from '@angular/router';
// importando rota para atroca de paginas
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}
  ir2() {
    this.router.navigateByUrl('/tabs/tab2');
  }
 ir3() {
    this.router.navigateByUrl('/tabs/tab3');
  }
}
