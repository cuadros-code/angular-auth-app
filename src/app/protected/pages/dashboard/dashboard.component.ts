import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get userInfo() {
    return this.authService.user
  }

  logout(){
    this.authService.logout();
  }

}
