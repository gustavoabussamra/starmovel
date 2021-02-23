import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  dados: any;
  plano: string;

  constructor(
    private menu: MenuController,
    public toastController: ToastController,
    private router: Router,
    private apiService: ApiService,
    private navController: NavController,
    private alertController: AlertController) {
    this.retornaDados()
  }

  ngOnInit() {
    this.retornaDados()
  }


  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async presentToast(x, n) {
    const toast = await this.toastController.create({
      message: x + n,
      duration: 2000,
      color: "dark",
      mode: "ios"
    });
    toast.present();
  }

  async Sair() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'STARNET MOVEL',
      message: 'Você deseja Sair?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        }, {
          text: 'Confirmar',
          handler: async () => {

            //localStorage.clear();
            localStorage.removeItem('nro_telefone');
            //localStorage.removeItem('config');
            localStorage.removeItem('contrato');
            localStorage.removeItem('num_card');
            localStorage.removeItem('dados');
            localStorage.removeItem('codCliente');

            this.navController.navigateRoot("login");//this.router.navigate(["login"]); //this.router.navigateByUrl("login");
          }
        }
      ],
      mode: "ios"
    });

    await alert.present();
  }

  FormataData(data) {

    var newDate = data.replace(/-/gi, '');

    var ano = newDate.substring(0, 4);
    var mes = newDate.substring(4, 6);
    var dia = newDate.substring(6, 8);
    var dataFormt = `${dia}/${mes}/${ano}`;
    return dataFormt
  }

  retornaDados() {
    this.apiService.retornaDados(localStorage.getItem('codCliente')).subscribe(
      (data) => {

        this.dados = data;

        if (data[0].produto == 493) {
          this.plano = "Plano 5 GB"
        }
        if (data[0].produto == 265) {
          this.plano = "Plano 10 GB"
        }
        if (data[0].produto == 488) {
          this.plano = "Plano 15 GB"
        }
        if (data[0].produto == 489) {
          this.plano = "Plano 30 GB"
        }
        if (data[0].produto == 2536) {
          this.plano = "Plano 60 GB"
        }
      });
  }

}
