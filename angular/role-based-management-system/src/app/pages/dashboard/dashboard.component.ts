import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router , RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { RoleService, } from '../../services/role.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private roleService: RoleService, private router: Router) {}

  selectRole(role: 'admin' | 'manager' | 'employee') {
    this.roleService.setRole(role);
    this.router.navigate(['/dashboard', role]);
  }
ngOnInit() {
  const role = this.roleService.getRole();

  if (role) {
    this.router.navigate(['/dashboard', role]);
  }
}

   get currentRole() {
    return this.roleService.getRole();
   }

   changeRole(){
    this.roleService.clearRole();
    this.router.navigate(['/dashboard']);
   }
  

}