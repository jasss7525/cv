import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  // constructor(private elementRef:ElementRef) { }

  // @HostListener('mouseover') onMouseOver() {
  //   this.elementRef.nativeElement.style.color = "red"
  // }

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set highlight(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
