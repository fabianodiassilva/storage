import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Storage} from '@ionic/storage';
import { ModalController, NavController } from 'ionic-angular';

/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  public FormPin: FormGroup

  constructor(public fb:FormBuilder,
              public viewCtrl: ViewController,
              public storage: Storage,
              public navCtrl: NavController) {

    this.FormPin = fb.group({

      pin:[null,Validators.required]
  })  
   
  }

  fechaModal(){
    this.viewCtrl.dismiss()
  }

  salvarPIN(){
    this.storage.set('FormPin',this.FormPin.value)
    this.navCtrl.push('PaginaCardPage')
  }

}
