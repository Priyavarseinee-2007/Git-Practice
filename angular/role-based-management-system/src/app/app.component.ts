import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink , RouterLinkActive} from '@angular/router';
import { RoleService } from './services/role.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public roleService: RoleService) {}

  get currentRole() {
    return this.roleService.getRole();
  }

  logout() {
    this.roleService.clearRole();
  }
}
