import {Component} from '@angular/core';
import {DialogsService} from "./common/dialog/confirm-dialog.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {
  private chartData: Array<any>;

  constructor(private dialogsService: DialogsService) {}

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  openDialog(item) {
    this.dialogsService
      .confirm('Вход в систему', 'Вы уверены, что хотите продолжить?')
      .subscribe(yes => {if(yes){ }});
  }


  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

}
