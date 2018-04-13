import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-password-modal',
  templateUrl: './add-password-modal.component.html',
  styleUrls: ['./add-password-modal.component.scss']
})
export class AddPasswordModalComponent implements OnInit {
  constructor() { 
   
   
  }

  ngOnInit() {
  }
  show(){
    var modal = document.getElementById('add-password-modal');
    var body = document.querySelector('body');
    //console.log(modal);
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
  }
  close(){
    var modal = document.getElementById('add-password-modal');
    var body = document.querySelector('body');
    //console.log(modal);
    modal.style.display = 'none';
    body.style.overflow = 'scroll';
  }
}
