import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url: string = 'http://186.251.225.174/api_mobile/';

  constructor(private _http: HttpClient) { }

  retornaDados(codCliente) {
    return this._http.get<any>(this.Url + `retorna_cadastro.php?codigo=${codCliente}`);
  }

  retornaPlano(codCliente) {
    return this._http.get<any>(this.Url + `retorna_plano.php?codigo=${codCliente}`);
  }

  Login(usuario, senha) {
    return this._http.get<any>(this.Url + `login_mk_movel.php?usuario=${usuario}&senha=${senha}`);
  }

  Extrato(dtInicial, dtFinal, contrato) {
    return this._http.get<any>(this.Url + `extrato.php?data_inicial=${dtInicial}&data_final=${dtFinal}&contrato=${contrato}`);
  }

  AtivarSimCard(card) {
    return this._http.get<any>(this.Url + `ativar.php?card=${card}&contrato=${localStorage.getItem('contrato')}`);
  }

  ConsultarSaldo(contrato) {
    return this._http.get<any>(this.Url + `saldo.php?contrato=${contrato}`);
  }

  AddPacotes(qtd, info) {
    return this._http.get<any>(this.Url + `comprar_pacote.php?card=${localStorage.getItem('num_card')}&qtd=${qtd}&contrato=${localStorage.getItem('contrato')}&cd_cliente=${localStorage.getItem('codCliente')}&info=${info}&numero=${localStorage.getItem('nro_telefone')}`);
    //localStorage.getItem('nro_telefone')
  }

  AbreChamado(info) {
    return this._http.get<any>(this.Url + `chamado.php?cd_cliente=${localStorage.getItem('codCliente')}&info=${info}&numero=${localStorage.getItem('nro_telefone')}`);
    //localStorage.getItem('nro_telefone')
  }

  RetornaChamado(status) {
    return this._http.get<any>(`http://186.251.225.174/api_mobile/retorna_chamados.php?codigo=${localStorage.getItem('codCliente')}&status=${status}`);
    //localStorage.getItem('nro_telefone')
  }

  RetornaFaturas() {
    return this._http.get<any>(`http://186.251.225.174/api_mobile/retorna_faturas.php?codigo=${localStorage.getItem('codCliente')}`);
    //localStorage.getItem('nro_telefone')
  }
}
