import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  kennung = '';
  vorname = '';
  nachname = '';

  constructor(private firestore: AngularFirestore, private alertController: AlertController) {}

  saveUser() {
    this.firestore.collection('user').doc().set({
      kennung: this.kennung,
      vorname: this.vorname,
      nachname: this.nachname
    }).then(() => this.showAlert());
  }

  private showAlert() {
    this.alertController.create({
      header: 'Erfolgreich',
      message: 'Das Speichern war erfolgreich'
    }).then(alert => alert.present());
  }

}
