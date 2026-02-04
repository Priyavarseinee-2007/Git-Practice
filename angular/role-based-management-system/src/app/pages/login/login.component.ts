import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email = '';
password = '';
loginError ='';
  
  constructor(
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit() {
    // If role already exists, skip login
    if (this.roleService.getRole()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login(form: any) {
     if (form.invalid) {
    this.loginError = 'Please fix the errors before logging in';
    return;
  }
    if (this.email === 'admin@test.com') {
      this.roleService.setRole('admin');
    } else if (this.email === 'manager@test.com') {
      this.roleService.setRole('manager');
    } else {
      this.roleService.setRole('employee');
    }
    this.router.navigate(['/dashboard']);
  }
}
