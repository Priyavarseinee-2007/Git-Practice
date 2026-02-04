import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private currentRole: 'admin' | 'manager' | 'employee' | null = null;

constructor(){
  const savedRole=localStorage.getItem('currentRole');
  if( savedRole==='admin' || savedRole==='manager' || savedRole==='employee'){
    this.currentRole=savedRole;
  }
}

  setRole(role: 'admin' | 'manager' | 'employee') {
    this.currentRole = role;
    localStorage.setItem('currentRole',role);
  }

  getRole() {
    return this.currentRole;
  }

  clearRole() {
    this.currentRole=null;
    localStorage.removeItem('currentRole');
  }
}