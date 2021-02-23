import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {

  final: string;
  inicial: string;
  erro: string;
  Extrato: string[];
  load: boolean = false;

  Movel: string;
  Sms: string;
  Duracao: string;

  isShow = 'ligacoes';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  showExtrato(show) {
    this.isShow = show;
  }

  Consultar() {

    if (!this.inicial || !this.final) {
      this.erro = "Definas as Datas!";
    } else {
      this.erro = null;
      this.load = true;

      this.apiService.Extrato(
        this.inicial.substring(0, 10),
        this.final.substring(0, 10),
        localStorage.getItem('contrato')
      )
        .subscribe(data => {

          if (data.extrato) {

            this.Extrato = data.extrato;

          } else {
            this.Movel = "Sem registro";
            this.presentAlert();
          }

          this.load = false;

        });
    }
  }


  FormataData(data) {

    var newDate = data.replace(/-/gi, '');

    var ano = newDate.substring(0, 4);
    var mes = newDate.substring(4, 6);
    var dia = newDate.substring(6, 8);
    var dataFormt = `${dia}/${mes}`;
    return dataFormt
  }

  FormataHora(hora) {
    return hora.substring(0, 5);
  }

  FormataDuracao(duracao) {

    if (duracao < 59) {
      return duracao + ' s'
    } else {
      var min_float = duracao / 60;
      var min_text = min_float.toString();
      var seg_text = min_text.split(".")[1];

      var min = min_text.split(".")[0];
      var seg = ((parseFloat(seg_text) * 60) / 10).toString();

      if (Number.isNaN(parseFloat(seg)) == true) {
        return min + ' m'
      } else {
        return min + ' m ' + seg.substring(0, 2) + ' s'
      }

    }
  }

  FormataDados(dados) {
    return ((dados / 1024) / 1024).toFixed(2) + ' MB'
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'Extrato',
      message: 'Sem consumo durante o período informado!',
      buttons: ['OK'],
      mode: "ios"
    });

    await alert.present();
  }
}
