import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from '@ionic/storage';

/**
 * Generated class for the PaginaCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-card',
  templateUrl: 'pagina-card.html',
})
export class PaginaCardPage {

  public pin = {pin:''}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage:Storage) {
                
                this.storage.get('FormPin').then((res)=>{
                this.pin = res
                })
  }              

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaCardPage');
  }

}
