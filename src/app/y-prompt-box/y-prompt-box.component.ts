import {Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-y-prompt-box',
  templateUrl: './y-prompt-box.component.html',
  styleUrls: ['./y-prompt-box.component.css']
})
export class YPromptBoxComponent implements AfterViewInit {

  private sureCallback: any;
  private closeCallback: any;
  private subscription: Subscription;

  @Input() public message: string;

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
        //订阅释放
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
   * @param delay 延时关闭时间
   */

  public openDelay(message: string, closeFunc: any = null, delay: number = 2000) {
    timer(0).subscribe(() => {
      this.message = message;
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