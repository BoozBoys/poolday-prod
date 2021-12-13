import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  user$: Observable<any>;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.user$ = this.firestore.collection('user').valueChanges();
  }

}
