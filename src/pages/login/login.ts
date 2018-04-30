import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalComponent } from '../../components/modal/modal';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public FormLogin: FormGroup

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb:FormBuilder,
              public modal:ModalController,
              public alertCtrl: AlertController
              ) {

      this.FormLogin = fb.group({

          usuario:[null,Validators.required],
          senha:[null,Validators.compose(
                                          [
                                            Validators.required,
                                            Validators.minLength(3)
                                          ])]
      })                
  }

  logar(){

    if ((this.FormLogin.value.usuario == 'unipam') && (this.FormLogin.value.senha == 123)){
     
      let confirm = this.alertCtrl.create({
        title: 'Indique a opção desejada',
        message: 'Deseja ir para a página de cadastro do PIN?',
        buttons: [
          {
            text: 'SIM',
            handler: () => {
              this.criarModal()
            }
          },
          {
            text: 'NÃO',
            handler: () => {
            }
          }
        ]
      });
      confirm.present();

    }else{
      
      let alert = this.alertCtrl.create({
        title: 'Usuário/Senha incorretos!',
        subTitle: '',
        buttons: ['OK']
      });
      alert.present();

    }

  }

  criarModal(){
    let modalLogin = this.modal.create(ModalComponent)
    modalLogin.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
