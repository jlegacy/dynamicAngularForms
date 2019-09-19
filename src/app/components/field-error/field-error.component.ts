import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css']
})
export class FieldErrorComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
