import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.page.html',
  styleUrls: ['./fatura.page.scss'],
})
export class FaturaPage implements OnInit {


  Faturas: string[];
  load: boolean = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.RetornaFaturas();
  }

  RetornaFaturas() {
    this.load = true;
    this.apiService.RetornaFaturas().subscribe(data => {
      this.Faturas = data;
      this.load = false;
    })
  }

  FormataData(data) {

    var newDate = data.replace(/-/gi, '');

    var ano = newDate.substring(2, 4);
    var mes = newDate.substring(4, 6);
    var dia = newDate.substring(6, 8);
    var dataFormt = `${dia}/${mes}/${ano}`;
    return dataFormt
  }

}
