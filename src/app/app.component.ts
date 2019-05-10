import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ZConfirmationBoxComponent } from './z-confirmation-box/z-confirmation-box.component';
import {ZPromptBoxComponent} from "./z-prompt-box/z-prompt-box.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Tour of Heroes';
  show: string;

  @ViewChild(ZConfirmationBoxComponent) public confirmationBox: ZConfirmationBoxComponent;
  @ViewChild(ZPromptBoxComponent) public promptBox: ZPromptBoxComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  public onLoginoutClick() {
    this.confirmationBox.open('确认退出?', () => {
      this.confirmationBox.close();
      this.show = '已确定';
    }, '提示', '确定',
      () => {
        this.show = '已取消';
    });
  }

  public onLoginoutDelay() {
    this.promptBox.open('保存成功', () => {
        this.promptBox.close();
        this.show = '已自动关闭';
      });
  }

}

