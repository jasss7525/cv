import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  // @ViewChild(ChildComponent,{static:true}) child:ChildComponent;
  @ViewChild('para',{static:false}) para: ElementRef;
  @ViewChild('vc', {read:ViewContainerRef}) vc: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver,private renderor:Renderer2) {}
    ngOnInit() {
     
    }
    ngAfterViewInit() {
      const factory = this.resolver.resolveComponentFactory(ChildComponent);
      this.vc.createComponent(factory);
    }
  //   clicks() {
  //     console.log(this.para.nativeElement.innerHTML)
  //   this.para.nativeElement.innerHTML = "hi";
  // }



  
}
