import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @ViewChild("radioButton", {static:false}) radioButton: TemplateRef<any>;
  @ViewChild("submitButton", {static:false}) submitButton: TemplateRef<any>;
  @ViewChild("checkBox", {static:false}) checkBox: TemplateRef<any>;
  @ViewChild("input", {static:false}) input: TemplateRef<any>;
  @ViewChild("date", {static:false}) date: TemplateRef<any>;
  @ViewChild("select", {static:false}) select: TemplateRef<any>;

  form: FormGroup;
  rows: any;
  profileForm: any;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({});
   }

  get getFormBuilder() {
    return this.fb;
  }

  get getProfileForm() {
    return this.profileForm;
  }

  set setProfileForm(fb) {
    this.profileForm = fb;
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {}

}
