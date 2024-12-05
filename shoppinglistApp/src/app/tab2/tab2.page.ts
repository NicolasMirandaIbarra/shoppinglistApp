import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string = '';

  constructor(private shoppingList: ShoppingItemsService, private alertController: AlertController) {
  }

  agregarItem() {
    if(!this.shoppingList.validarItemExistente(this.item)) {
      this.shoppingList.anadirItem(this.item);
      this.item = '';
      this.alertaCorrecta();
    } else {
      this.alertaError();
    }
  }

  async alertaCorrecta() {
    const alerta = await  this.alertController.create({
      header: '!Enorabuena!',
      message: 'Se ha añadido el item',
      buttons: ['Aceptar']
    })
    await alerta.present();
  }

  async alertaError() {
    const alerta = await  this.alertController.create({
      header: '!Atención!',
      message: 'El item ya esta ingresado',
      buttons: ['Aceptar']
    })
    await alerta.present();
  }
  
}
