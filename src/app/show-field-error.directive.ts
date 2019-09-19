import { FieldErrorComponent } from "../app/components/field-error/field-error.component";
import { NgControl } from "@angular/forms";
import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from "@angular/core";
import { HostListener } from "@angular/core";
/* import { EventSubscribeService } from "../services/event-service.service"; */

@Directive({
  selector: "[showFieldError]"
})
export class ShowFieldErrorDirective implements OnInit, OnDestroy {
  subscribeClearFormErrors: any;
  ngOnDestroy(): void {
    if (this.subscribeFieldErrorCheck)
    this.subscribeFieldErrorCheck.unsubscribe();

    if (this.subscribeClearFormErrors)
    this.subscribeClearFormErrors.unsubscribe();
  }
  subscribeFieldErrorCheck: any;
  ngOnInit(): void {
 /*    this.subscribeFieldErrorCheck = this.eventService.announceUpdateFormFieldError$.subscribe(
      x => {
        if (x)
        this.checkFieldError(x);
      }
    ); */

 /*    this.subscribeClearFormErrors = this.eventService.announceClearFormError$.subscribe(
      x => {
          this.clearFormErrors();
      }
    ); */
  }

  @Output() errMsgEvent = new EventEmitter<any>();
  @Input() label: string;

  public errorText = "";

  constructor(
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef,
    private hostElement: ElementRef,
    private control: NgControl
  ) {}

  private clearFormErrors() {
        this.viewContainer.clear();
        this.renderer.removeClass(this.hostElement.nativeElement, "error");
  }

  private checkFieldError(field) {
    if ((!field) || (field === this.control.name))
    {
      if (this.control.invalid) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          FieldErrorComponent
        );
        this.viewContainer.clear();
        let componentRef = this.viewContainer.createComponent(componentFactory);
        (<FieldErrorComponent>(
          componentRef.instance
        )).data = this.buildErrorMessageObj(this.control.errors);
        this.renderer.addClass(this.hostElement.nativeElement, "error");
      } else {
        this.viewContainer.clear();
        this.renderer.removeClass(this.hostElement.nativeElement, "error");
      }
    }
  }

  @HostListener("input", ["$event"])
  onkeyup($event) {
    this.checkFieldError(null);
  }

  buildErrorMessageObj(errors: any) {
    let data: any = {};
    data.hintText = "";
    data.errorText = "";

    if (errors.valid === false) {
      //If you use custom validator and have a message//
      if (errors.message) {
        data.errorText = errors.message;
      } else {
        data.errorText = this.label + " is invalid";
      }
    }
    if (errors.required === true) {
      data.errorText = this.label + " is required";
    }
    if (errors.minlength) {
      data.errorText = this.label + " must be at least " + errors.minlength.requiredLength + " chars";
    }
    return data;
  }
}
