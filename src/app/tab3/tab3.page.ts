import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  uploadProgress: Observable<number>;
  sourceUrl: string;

  constructor(private storage: AngularFireStorage) {
  }

  upload(event: any) {
    const file = event.target.files.item(0);
    const path = file.name + '_' + Math.random() * 100;
    const fileRef = this.storage.ref(path);
    const task = this.storage.upload(path, file);

    this.uploadProgress = task.snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));

    task.then(() => {
      const uploadedFileURL = fileRef.getDownloadURL();

      uploadedFileURL.subscribe(resp => {
        this.sourceUrl = resp;
      }, error => {
        console.error(error);
      });
    });
  }
}
