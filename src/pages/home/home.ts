import { Component, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: SafeResourceUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, private sanitizer: DomSanitizer) {

  }


  //snap a photograph
  grabPhoto() {

    const { Camera } = Plugins

    Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.Base64
    }).then((result) => {
      console.log(result);
      this.image = result.base64Data
    }).catch((err) => {
      console.log(err);
      console.log('Sorry pal, not going to happen');
      alert("Sorry Bro, is Not Going To Work")
    });
  }

}
