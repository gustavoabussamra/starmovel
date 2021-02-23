import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PacotePage } from '../pacote/pacote.page';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  celular: string;
  nome: string;
  cpf: string;

  contrato: string;
  simCard: string;
  produto: string;
  status: string;

  saldo: string;
  plano: string;

  porcent_usado: number;

  Load: any;
  AlertChip: any;

  slideOpts = {
    slidesPerView: 3,
    speed: 400,
    autoplay: {
      delay: 4000,
    }
  }

  constructor(
    private menu: MenuController,
    private apiService: ApiService,
    private router: Router,
    private modalController: ModalController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController) {
    //this.presentLoading();
    //this.AtivarChip();
  }

  ngOnInit() {
    this.retornaDados();

  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  OpenExtrato() {
    this.router.navigateByUrl("extrato");
  }

  OpenFatura() {
    this.router.navigateByUrl("fatura");
  }

  OpenChamado() {
    this.router.navigateByUrl("chamado");
  }

  async OpenPacote() {
    const modal = await this.modalController.create({
      component: PacotePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      },
      mode: "ios"
    });
    return await modal.present();
  }

  Saldo(plano, saldo) {

    let $ = document.querySelector.bind(document);

    var saldo_disponivel = saldo;
    var saldo_usado = plano - saldo_disponivel;
    var porcent_usado = saldo_usado * 100 / plano;

    this.porcent_usado = porcent_usado;

    let percent = porcent_usado;
    let deg = 360 * percent / 100;

    /*
    if (percent > 50) {
      $('.progress-pie-chart').classList.add("gt-50");
    }
    $(".ppc-progress-fill").style.transform = "rotate(" + deg + "deg)";
    */

  }

  PorcentSaldo() {
    return this.porcent_usado;
  }

  retornaDados() {
    this.apiService.retornaDados(localStorage.getItem('codCliente')).subscribe(
      (data) => {
        console.log(data)
        this.nome = data[0].nome;
        this.cpf = data[0].cpf;
        this.contrato = data[0].numero_contrato;
        this.simCard = data[0].num_card;
        this.produto = data[0].produto;
        this.status = data[0].status;
        this.celular = data[0].nro_telefone;

        localStorage.setItem('dados', JSON.stringify(data));
        localStorage.setItem('dados', JSON.stringify(data));
        localStorage.setItem('nro_telefone', data[0].nro_telefone);
        localStorage.setItem('contrato', data[0].numero_contrato);
        localStorage.setItem('num_card', data[0].num_card);

        this.apiService.Extrato('2000-01-01', '2000-01-01', data[0].numero_contrato).subscribe(
          data => {

            if (Number.isNaN(parseFloat((data.retorno.PlanoAtual_Gb - data.retorno.Saldo_Gb).toFixed(2))) == true) {
              this.saldo = '0';
            } else {
              this.saldo = (data.retorno.PlanoAtual_Gb - data.retorno.Saldo_Gb).toFixed(2);
            }
            if (data.retorno.PlanoAtual_Gb == null) {
              this.plano = '0'
            } else {
              this.plano = data.retorno.PlanoAtual_Gb;
            }
            this.Saldo(data.retorno.PlanoAtual_Gb, data.retorno.Saldo_Gb);
          }
        )
      });
  }

  async AtivarChip() {
    this.AlertChip = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ativar Chip',
      message: 'Informe o número do SimCard',
      inputs: [
        {
          name: 'card',
          type: 'number',
          placeholder: 'Numero do SimCard'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ativar',
          handler: async (data) => {
            this.presentLoading();
            this.apiService.AtivarSimCard(data.card)
              .subscribe(data => {
                this.Load.dismiss();
                if (data.mensagem == 'SUCESSO') {
                  this.Alert('Ativar Chip', data.mensagem);
                  this.navController.navigateRoot("/login")
                } else {
                  this.Alert('Ativar Chip', data.mensagem);
                }
              });
          }
        }
      ],
      mode: "ios"
    });

    this.AlertChip.present();
  }

  async presentLoading() {
    this.Load = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por Favor, Aguarde...',
      mode: "ios"
    });

    this.Load.present();
  }

  async Alert(header, msg) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: msg,
      buttons: [{
        text: 'OK',
        handler: () => {
          if (msg != 'SUCESSO') {
            this.AtivarChip();
          } else {
            this.AlertChip.dismiss();
          }
        }
      }],
      mode: "ios"
    });

    await alert.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.retornaDados();
      event.target.complete();
      this.presentToast();
    }, 2000);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Dados atualizados com sucesso!',
      duration: 2000,
      color: "dark",
      mode: "ios"
    });
    toast.present();
  }
} 