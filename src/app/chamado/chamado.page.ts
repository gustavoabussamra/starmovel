import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.page.html',
  styleUrls: ['./chamado.page.scss'],
})
export class ChamadoPage implements OnInit {

  erro: string;
  mensagem: string;
  Load: any;
  Chamados: String;
  load: boolean = false;

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController) {
    this.RetornaChamado('N');
    this.presentLoading();
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


  async SendChamado() {


    if (!this.mensagem) {
      this.erro = "Preencha o campo de Mensagem!";

    } else {

      this.erro = null;

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirmar?',
        message: 'Deseja abrir esse chamado?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Enviar',
            handler: async () => {
              this.Load.present();
              this.apiService.AbreChamado(this.mensagem)
                .subscribe(data => {
                  this.Load.dismiss();
                  if (data.status == "OK") {
                    this.AlertMensagem('Seu chamado foi aberto com sucesso!');
                    this.mensagem = "";
                    this.RetornaChamado('N');
                  } else {
                    this.AlertMensagem('Erro ao enviar um chamado, entre em contato conosco!');
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

  RetornaChamado(status) {
    this.load = true;
    this.apiService.RetornaChamado(status).subscribe(data => {
      this.Chamados = data;
      this.load = false;
      console.log(data)
    })
  }

  async AlertMensagem(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Abertura de Chamado',
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

  FormataTexto(x) {

    return x.substring(61).split("+").join(" ");
  }

  FormataData(data) {

    var newDate = data.replace(/-/gi, '');
    var ano = newDate.substring(0, 4);
    var mes = newDate.substring(4, 6);
    var dia = newDate.substring(6, 8);
    var dataFormt = `${dia}/${mes}`;
    return dataFormt
  }
}
