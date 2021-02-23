import { Injectable } from "@angular/core";

let pega_variavel = "config";

@Injectable()
export class ConfigProvider {
  private config = {
    showSlide: false,
    name: "",
    username: "",
  };

  constructor() {}

  getConifgData(): any {
    return localStorage.getItem(pega_variavel);
  }

  setConfigData(showSlide?: boolean) {
    let config = {
      showSlide: false,
    };

    if (showSlide) {
      config.showSlide = showSlide;
    }

    localStorage.setItem(pega_variavel, JSON.stringify(config));
  }
}
