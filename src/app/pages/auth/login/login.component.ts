import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  email = ''
  clave = '';

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private http: HttpClient,
              // private data: DataService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      clave: ['', Validators.required]
    });

  }

  login(){
    let authorizationData = 'Basic ' + btoa(this.email + ':' + this.clave);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': authorizationData
      })
    };

    // if (this.email != '' && this.clave != '') {
    //   const data = localStorage.setItem("basic", authorizationData)
    //   this.data.login(httpOptions)
    //   .subscribe(
    //       async data => { // json data
    //           if(data["success"] == true){
    //             localStorage.removeItem("basic");
    //             localStorage.setItem("nombre", data["result"]["nombre"])
    //             localStorage.setItem("token", data["result"]["token"])
    //             this.snackbar.open('Ingreso exitoso!', null, {
    //               horizontalPosition: "center",
    //               duration: 5000
    //             });
    //             // location.reload()
    //             this.router.navigate(['/dashboard']);
    //           } else {
    //             this.snackbar.open('Error al ingresar!', null, {
    //               horizontalPosition: "center",
    //               duration: 5000
    //             });
    //           }
    //       },
    //       error => {
    //           this.snackbar.open(error.error.message, null, {
    //             horizontalPosition: "center",
    //               duration: 5000
    //           });
    //       });
    // } else {
    //   this.snackbar.open('Las credenciales ingresadas son inválidas!', null, {
    //     horizontalPosition: "center",
    //     duration: 5000
    //   });
    // }

 
  }

  send() {
    this.router.navigate(['/apps/aio-table']);
    this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
      duration: 10000
    });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
