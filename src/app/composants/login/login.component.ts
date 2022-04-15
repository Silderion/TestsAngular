import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Mark";
  password = "1234";
  message = false;

  constructor(private router:Router, private ps:ProduitsService) { }

  ngOnInit(): void {
  }

  login(loginForm:any){
    if((loginForm.value.username == this.username) && (loginForm.value.password == this.password)){
      this.ps.isAuthenticated = true;
      this.router.navigate(["product"]);
    } else {
      this.message = true;
    }
  }

}
