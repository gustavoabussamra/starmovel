import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { SuportePage } from '../suporte/suporte.page';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nome: any = JSON.parse(localStorage.getItem('dados'))[0].nome;
  cpf: any = JSON.parse(localStorage.getItem('dados'))[0].cpf;

  constructor(private menu: MenuController,
    private router: Router,
    private navController: NavController,
    private alertController: AlertController,
    private modalController: ModalController) {
  }

  openMenu() {
    this.menu.open('start');
  }

  async presentAlert(config) {

    if (config == "apn") {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Descrição',
        message:
          'Sigla para Access Point Name (ponto de acesso). '
          + 'Esta configuração deve ser feita para que sua internet movel funcione corretamente. '
          + 'Este recurso intermédia a conexão do seu celular com a rede da operadora',        
        buttons: ['OK'],
        mode: "ios"
      });

      await alert.present();
    }
    if (config == "rede") {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Descrição',
        message:
          'Você pode configurar seu aparelho para selecionar uma rede automaticamente, ' +
          'ou então, você mesmo pode selecionar uma rede. Se você selecionar manualmente ' +
          'seu aparelho irá perder a conexão quando a rede selecionada estiver fora de alcance.',
        buttons: ['OK'],
        mode: "ios"
      });

      await alert.present();
    }
  }

  async presentModal(so, n, titulo) {
    const modal = await this.modalController.create({
      component: SuportePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'sistema': so,
        'n': n,
        'titulo': titulo
      },
      mode: "ios"
    });
    return await modal.present();
  }

}
