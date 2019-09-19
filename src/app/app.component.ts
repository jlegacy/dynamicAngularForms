import { Component, ViewChild, OnInit, OnDestroy, ContentChild } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { EventService } from "./event.service";
import { HttpClient } from "@angular/common/http";
import { GridApi } from "ag-grid-community/dist/lib/gridApi";
import { GridOptions } from "ag-grid-community";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild("dynamicForm") dynamicForm: DynamicFormComponent;

  getHttpClientService: any;


  private gridApi: GridApi;
  public gridColumnApi: any;

  columnDefs=[];
  rowData= [];

  ngOnDestroy(): void {
    if (this.getHttpClientService)
      this.getHttpClientService.unsubscribe();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.getHttpClientService = this._httpClient.get("http://legtec.mockable.io/dynamicAgGrid").subscribe(data => {
      for (let z of data['data']['headers']) {
        this.columnDefs.push({ headerName: z['headerName'], field: z['field'] })
      }
      this.gridApi.setColumnDefs(this.columnDefs);
      this.rowData = data['data']['rows'];     
    })
  }

  ngOnInit(): void {
    this.columnDefs = [];

    this.dynamicForm.setProfileForm = this.fb.group({
      myRadioButton: ["", [Validators.required]],
      myCheckBox: ["", [Validators.required]],
      myInput1: ["", [Validators.required]],
      myInput2: ["", [Validators.required]],
      myInput3: ["", [Validators.required]],
      myDate: ["", [Validators.required]],
      mySelect: ["", [Validators.required]]
    });

    //i know right!!//
    setTimeout(() => {
      this.dynamicForm.rows = [
        {
          fields: [
            { name: "radioButton", context: { options: [1, 2, 3, 4, 5], label: "mytest", formControl: "myRadioButton" } },
            { name: "checkBox", context: { label: "mytest", formControl: "myCheckBox" } },
            { name: "input", context: { label: "myinput1", formControl: "myInput1", type: "text", placeholder: "input1" } },
            { name: "input", context: { label: "myinput2", formControl: "myInput2", type: "text", placeholder: "input2" } },
            { name: "input", context: { label: "myinput3", formControl: "myInput3", type: "text", placeholder: "input3" } },
            { name: "date", context: { label: "myDate", formControl: "myDate" } },
            { name: "select", context: { options: [1, 2, 3, 4, 5], label: "mytest", formControl: "mySelect" } },
            { name: "submitButton", context: { label: "Submit" } }
          ]
        }
      ];
    }, 0);
  }

  constructor(private _eventService: EventService, private fb: FormBuilder, private _httpClient: HttpClient) {
  }

  onDropSelected($event) {
    alert('selected!!!');
  }

  submit(value: any) { }
}
