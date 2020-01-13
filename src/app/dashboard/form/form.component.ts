import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    qualification: new FormControl(''),
    query: new FormControl('')
  });

  constructor(private api:DataService) { }

  ngOnInit() {
  }

  submit(){
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
