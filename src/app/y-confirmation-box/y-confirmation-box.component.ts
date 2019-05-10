import {Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-y-confirmation-box',
  templateUrl: './y-confirmation-box.component.html',
  styleUrls: ['./y-confirmation-box.component.css']
})
export class YConfirmationBoxComponent implements AfterViewInit {

  private sureCallback: any;
  private closeCallback: any;
  private subscription: Subscription;

  @Input() public message: string;

  @Input() public sureName: string;

  @Input() public title: string;

  @ViewChild('promptDiv') public promptDiv: ElementRef;


  /**
   * 模态框消失，如果有关闭回调则执行，释放订阅。
   */
  public ngAfterViewInit() {
    $(this.promptDiv.nativeElement).on('hidden.bs.modal', () => {
      if (this.closeCallback) {
        const temp = this.closeCallback;
        this.closeCallback = null;
        this.sureCallback = null;
        this.subscription && this.subscription.unsubscribe();
        temp();
      }
    });
  }

  /**
  * 确定按钮触发，判断是否有确定回调方法，有则执行。
  * */
  public submit() {
    if (this.sureCallback) {
      const temp = this.sureCallback;
      this.closeCallback = null;
      this.sureCallback = null;
      temp();
    }
  }

  /**
  * 取消按钮触发关闭模态框，释放订阅。
  * */
  public close() {
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
}
