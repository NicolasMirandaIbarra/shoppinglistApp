import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  public items: string[];
  public isEmpty: boolean;

  constructor() {
    this.items = [];
    this.isEmpty = true;
  }

  anadirItem(item: string) {
    this.items.push(item);
    this.isEmpty = false;
  }

  quitarItem(item: string) {
    let index = this.items.findIndex(it => it.toUpperCase().trim() === item.toUpperCase().trim());
    if (index != -1) {
      this.items.splice(index, 1)
      if (this.items.length == 0) {
        this.isEmpty = true;
      }
    }
  }

  quitarTodosItems() {
    this.items = [];
    this.isEmpty = true;
  }

  validarItemExistente(item: string) {
    const itemEncontrado = this.items.find(it => it.toUpperCase().trim() === item.toUpperCase().trim());
    return itemEncontrado;
  }

}
