import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pacote',
  templateUrl: './pacote.page.html',
  styleUrls: ['./pacote.page.scss'],
})
export class PacotePage implements OnInit {

  Gb: number = 0;
  Preco: any;
  Load: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private apiService: ApiService,
    private loadingController: LoadingController) {
    this.presentLoading()
  }

  ngOnInit() {

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  Pacote(x) {
    if (x == "add") {
      this.Gb++;
    } else {
      if (this.Gb <= 0) {
        this.Gb = 0;
      } else {
        this.Gb--;
      }
    }
  }

  async presentAlert() {

    this.Preco = (this.Gb * 8.60).toFixed(2).replace('.', ',');

    if (this.Gb == 0) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Adicionar Pacote',
        message: 'Informe um valor maior que zero "0"',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Adicionar Pacote!',
        message: `Você deseja comprar ${this.Gb} GB de Internet? 
        O valor acrescentado na sua próxima fatura será de: 
        <h6>R$ ${this.Preco} </h6>`,
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {

            }
          }, {
            text: 'Confirmar',
            handler: async () => {
              this.Load.present();
              this.apiService.AddPacotes(this.Gb, `Cliente+comprou+Dados+adicionais:+${this.Gb}+GB+-+R$+${this.Preco}`)
                .subscribe(data => {
                  this.Load.dismiss();
                  if (data.status == "OK") {
                    this.AlertMensagem('Pacote comprado com sucesso!');
                  } else {
                    this.AlertMensagem('Erro ao comprar Pacotes, entre em contato conosco!');
                  }
                }
                )
            }
          }
        ],
        mode: "ios"
      });
      await alert.present();
    }
  }

  async AlertMensagem(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Compra de Pacotes',
      subHeader: 'Status',
      message: msg,
      buttons: ['OK'],
      mode: "ios"
    });

    await alert.present();
  }

  async presentLoading() {
    this.Load = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por Favor, Aguarde...',
      mode: "ios"
    });
  }
}
