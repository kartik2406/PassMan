import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceDetails } from "../models/service-details";
@Component({
  selector: "app-add-password-modal",
  templateUrl: "./add-password-modal.component.html",
  styleUrls: ["./add-password-modal.component.scss"]
})
export class AddPasswordModalComponent implements OnInit {
  @Output() save: EventEmitter<ServiceDetails> = new EventEmitter<ServiceDetails>();
  private addPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.creatForm();
  }

  creatForm(){
    this.addPasswordForm = this.fb.group({
      service: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  show() {
    var modal = document.getElementById("add-password-modal");
    var body = document.querySelector("body");
    //console.log(modal);
    modal.style.display = "block";
    body.style.overflow = "hidden";
  }
  close() {
    var modal = document.getElementById("add-password-modal");
    var body = document.querySelector("body");
    //console.log(modal);
    modal.style.display = "none";
    body.style.overflow = "scroll";
    this.addPasswordForm.reset();
  }
  emitSave() {
    this.save.emit({
      service: this.addPasswordForm.controls.service.value,
      username: this.addPasswordForm.controls.username.value,
      password: this.addPasswordForm.controls.password.value
    });
    this.close();
  }
}
