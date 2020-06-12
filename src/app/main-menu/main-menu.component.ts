import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';
import { myEnterAnimation } from '../animations/enter';
import { myLeaveAnimation } from '../animations/leave';
import { createAnimation } from '@ionic/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  /* Variable for title that will be displayed in the toolbar */
  private title;

  @Input() isMobile : boolean;

  constructor( private modalCtrl: ModalController) {
    this.title = '';
  }

  ngOnInit() {}

  async openMenuModal() {
    const modal = await this.modalCtrl.create({
      component: MenuPage,
      cssClass: 'menu-custom-css',
      swipeToClose: true,
    });
    return await modal.present();
   }

  // private animation = createAnimation()
  // .addElement(MenuPage)
  // .duration(1000)
  // .fromTo('opacity', '1', '0.5');

}
