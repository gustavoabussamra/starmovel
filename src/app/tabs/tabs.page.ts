import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.VerificaLogin()
  }

  VerificaLogin() {

    if (localStorage.getItem('codCliente') != null) {
      this.router.navigate([""]); //this.router.navigateByUrl("");
    } else {
      this.router.navigate(["login"]); //this.router.navigateByUrl("login");
    }
  }

}
