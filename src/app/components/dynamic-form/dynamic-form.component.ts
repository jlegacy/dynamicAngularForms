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
  @ViewChild("radioButton") radioButton: TemplateRef<any>;
  @ViewChild("submitButton") submitButton: TemplateRef<any>;
  @ViewChild("checkBox") checkBox: TemplateRef<any>;
  @ViewChild("input") input: TemplateRef<any>;
  @ViewChild("date") date: TemplateRef<any>;
  @ViewChild("select") select: TemplateRef<any>;

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
