import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
  // shoppingItems: { name: string; price: number; quantity: number }[] = [];
  // total: number = 0;
  // newItemName: string = '';
  shoppingItems: { name: string; price: number; quantity: number }[] = [];
  total: number = 0;
  newItemName: string = '';
  totalLimit: number = 0;
  constructor() {}
//   updateTotal() {
//     this.total = this.shoppingItems
//       .map((item) => item.price * item.quantity)
//       .reduce((acc, curr) => acc + curr, 0);
//   }

//   addItem() {
//     if (this.newItemName && this.newItemName.trim() !== '') {
//       this.shoppingItems.push({ name: this.newItemName.trim(), price: 0, quantity: 0 });
//       this.newItemName = '';
//       this.updateTotal();
//     }
//   }
updateTotal() {
  this.total = this.shoppingItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
}

addItem() {
  if (this.newItemName && this.newItemName.trim() !== '') {
    this.shoppingItems.push({ name: this.newItemName.trim(), price: 0, quantity: 0 });
    this.newItemName = '';
    this.updateTotal();
  }
}
removeItem(index: number) {
  this.shoppingItems.splice(index, 1);
  this.updateTotal();
}

clearList() {
  this.shoppingItems = [];
  this.total = 0;
  this.newItemName = '';
  this.totalLimit = 0;
}
}

