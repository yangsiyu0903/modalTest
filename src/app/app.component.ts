import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ConfirmationBoxComponent } from './confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Tour of Heroes';
  show: string;

  @ViewChild(ConfirmationBoxComponent) public confirmationBox: ConfirmationBoxComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  public onLoginoutClick() {
    this.confirmationBox.open('确认退出?', () => {
      this.confirmationBox.close();
      this.show = '已确定';
    }, '提示！', '确定',
      () => {
        this.show = '已取消';
    });
  }

  public onLoginoutDelay() {
    this.confirmationBox.openDelay('确认退出?', () => {
        this.confirmationBox.close();
        this.show = '已自动关闭';
      });
  }

}

