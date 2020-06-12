import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router : Router
    ) {

  }

  ngOnInit() {
  }

  public openPage(page){
    this.router.navigate(['/'+page]);
    this.modalCtrl.dismiss();
  }

  public dismiss(){
    this.modalCtrl.dismiss();
  }

}
