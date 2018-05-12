import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceDetails } from "../../models/service-details";
@Component({
  selector: "app-add-password-modal",
  templateUrl: "./add-password-modal.component.html",
  styleUrls: ["./add-password-modal.component.scss"]
})
export class AddPasswordModalComponent implements OnInit {
  @Output()
  save: EventEmitter<ServiceDetails> = new EventEmitter<ServiceDetails>();
  @Output()
  edit: EventEmitter<ServiceDetails[]> = new EventEmitter<ServiceDetails[]>();
  @Input() credential: ServiceDetails;
  addPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}
  showPassword: boolean = false;
  ngOnInit() {
    this.creatForm();
  }

  creatForm() {
    this.addPasswordForm = this.fb.group({
      service: [
        this.credential ? this.credential.service : "",
        Validators.required
      ],
      username: [
        this.credential ? this.credential.username : "",
        Validators.required
      ],
      password: [
        this.credential ? this.credential.plaintextPassword : "",
        Validators.required
      ]
    });
  }

  show(credential?: ServiceDetails) {
    if (credential) {
      this.credential = credential;
      this.creatForm();
      this.cd.detectChanges();
    }
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
    this.credential = null;
    this.showPassword = false;
  }
  emitSave() {
    this.save.emit({
      service: this.addPasswordForm.controls.service.value,
      username: this.addPasswordForm.controls.username.value,
      plaintextPassword: this.addPasswordForm.controls.password.value
    });
    this.close();
  }
  emitEdit() {
    let emitData: ServiceDetails[] = [];
    emitData.push(this.credential);
    emitData.push({
      service: this.addPasswordForm.controls.service.value,
      username: this.addPasswordForm.controls.username.value,
      plaintextPassword: this.addPasswordForm.controls.password.value
    });
    this.edit.emit(emitData);
    this.close();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
