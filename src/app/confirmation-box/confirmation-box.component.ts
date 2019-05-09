import {Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements AfterViewInit {

  private sureCallback: any;
  private closeCallback: any;
  private subscription: Subscription;

  @Input() public message: string;

  @Input() public sureName: string;

  @Input() public title: string;

  @ViewChild('promptDiv') public promptDiv: ElementRef;

  public ngAfterViewInit() {
    $(this.promptDiv.nativeElement).on('hidden.bs.modal', () => {
      if (this.closeCallback) {
        const temp = this.closeCallback;
        this.closeCallback = null;
        this.sureCallback = null;
        // tslint:disable-next-line:no-unused-expression
        this.subscription && this.subscription.unsubscribe();
        temp();
      }
    });
  }

  public submit() {
    if (this.sureCallback) {
      const temp = this.sureCallback;
      this.closeCallback = null;
      this.sureCallback = null;
      temp();
    }
  }

  public close() {
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();
    $(this.promptDiv.nativeElement).modal('hide');
  }

  /**
   * 打开确认框
   * @param message 消息体
   * @param sureName 确认按钮文本(默认为确定)
   * @param sureFunc 确认回调
   * @param closeFunc 取消回调
   */
  public open(message: any, sureFunc: any, title: string = '提示', sureName: string = '确定', closeFunc: any = null) {
    this.message = message;
    this.sureName = sureName;
    this.sureCallback = sureFunc;
    this.closeCallback = closeFunc;
    this.title = title;
    timer(0).subscribe(() => {
      $(this.promptDiv.nativeElement).modal('show');
    });
  }

  public openDelay(message: string, closeFunc: any = null, title: string = '提示', sureName: string = '确定', delay: number = 2000) {
    timer(0).subscribe(() => {
      this.message = message;
      this.sureName = sureName;
      this.title = title;
      $(this.promptDiv.nativeElement).modal('show');
    });
    this.closeCallback = closeFunc;
    if (delay !== -1) {
      this.subscription = timer(delay).subscribe(() => {
        this.close();
      });
    }
  }
}
