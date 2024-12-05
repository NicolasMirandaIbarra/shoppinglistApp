import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController, ItemReorderEventDetail, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public shoppingList: ShoppingItemsService, private alertController: AlertController, private menuController: MenuController) {}

  async eliminarItem(item: string) {
    const alerta = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Esta seguro de eliminar el item?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.shoppingList.quitarItem(item);
          }
        },
        {
          text: 'Cancelar', 
          handler: () => {
            alerta.dismiss();
          }
        }
      ]
    })
    await alerta.present();
  }

  onRenderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const item = this.shoppingList.items.splice(event.detail.from, 1)[0];
    this.shoppingList.items.splice(event.detail.to, 0, item);
    event.detail.complete();
  }

  async eliminarTodo() {
    const alerta = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Esta seguro de eliminar todos los items?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.shoppingList.quitarTodosItems();
            this.menuController.close();
          }
        },
        {
          text: 'Cancelar', 
          handler: () => {
            alerta.dismiss();
          }
        }
      ]
    })
    await alerta.present();
  }

}
