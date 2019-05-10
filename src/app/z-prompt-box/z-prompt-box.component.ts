import {Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-z-prompt-box',
  templateUrl: './z-prompt-box.component.html',
  styleUrls: ['./z-prompt-box.component.css']
})
export class ZPromptBoxComponent implements AfterViewInit {

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
   * @param delay 延时关闭时间 (-1为不自动关闭,默认两秒)
   */

  public open(message: string, closeFunc: any = null, delay: number = -1) {
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
