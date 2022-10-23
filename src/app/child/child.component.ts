import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter,Renderer2, Input, OnChanges, OnInit, Output, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit {
  @ViewChild('el') span:ElementRef;
  @ContentChild('head') cardHead:ElementRef;    /* ContentChild is used to get values of template Variables */
  @Input() data: string = "";
  init:number = 0
  content:boolean = true
  constructor(private renderor:Renderer2) { }

  ngOnInit(): void {
    this.init++

  //   this.promise.then((success) => {
  //     console.log(success,"SUCCESS");
  // }).catch((err)=> {
  //   console.log("errrr",err)
  // })

  }
  ngAfterContentInit() {

    // this.renderor.setStyle(this.cardHead.nativeElement,"color","red")   /* this is used to change or manipulate view coming from parent through ng-content   */

}
ngAfterViewInit() {
  // this.span.nativeElement.classList.add('highlight')

}
  ngOnChanges() {

  }
  @Output() someEvent:EventEmitter<any> = new EventEmitter();
  // raiseSomeEvent() {
  //   this.someEvent.emit("args");
  //  }

  viewC() {
    return "hello "
  }
  // @HostListener('input', ['$event.target'])  /* is used to get any DOm Event */
  // clicked() {
  //   alert('ddddd')
  //   this.someEvent.emit(",,,,,,")
  // }

  // callBAck function

     isChange:boolean = true;

  //     promise = new Promise((resolve, reject) => {
  //     if(this.isChange == false) {
  //       setTimeout(() => {
  //         resolve("it is resolved")
  //       }, 4000);
  //     } else {
  //       reject('rejected it is')
  //     }
  // })




}
