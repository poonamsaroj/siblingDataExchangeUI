import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() myEvent = new EventEmitter();

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    qualification: new FormControl(''),
    query: new FormControl('')
  });

  constructor(private api:DataService) { }

  ngOnInit() {}

  submit(){
    this.myEvent.emit(this.form.value);
    this.api.setUserDetails(this.form.value)
    .subscribe(  
      data  => {
        console.log("POST Request is successful ", data);
        this.form.reset();
      },
      error  => {        
        console.log("Error", error);        
      }
    );
  }


}
