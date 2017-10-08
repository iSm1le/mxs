import {Component, OnInit, AfterViewInit, HostListener} from '@angular/core';

import { Router, NavigationEnd  } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, AfterViewInit {

  sidebarOpened = false;

  constructor(private auth: AuthService,
              public router: Router,
              public toast: ToastComponent) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && PanelComponent.getSidebarStatus()) {
        this.toggleSidebar();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 992 && PanelComponent.getSidebarStatus()) {
      this.toggleSidebar();
      this.sidebarOpened = true;
    } else if (event.target.innerWidth > 992 && this.sidebarOpened) {
      this.sidebarOpened = false;
      this.toggleSidebar();
    }
  }

  static setSidebarStatus(status: boolean) {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('sidebar', `${status}`);
  }

  static getSidebarStatus() {
    const body = document.getElementsByTagName('body')[0];
    if (body.hasAttribute('sidebar')) {
      return body.getAttribute('sidebar') === 'true';
    }
    return true;
  }

  toggleSidebar() {
    let isSidebarToggled: boolean = PanelComponent.getSidebarStatus();
    const sidebar = document.getElementById('sidebar-wrapper');
    const content = document.getElementById('main-content');
    isSidebarToggled = !isSidebarToggled;
    if (isSidebarToggled) {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
    } else {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
    }
    PanelComponent.setSidebarStatus(isSidebarToggled);
  }

  ngAfterViewInit() {
    PanelComponent.setSidebarStatus(PanelComponent.getSidebarStatus());
  }

  ngOnInit() {
    if (!this.auth.loggedIn) {
      this.router.navigate(['/auth']);
    }
  }

  logout() {
    this.auth.logout();
  }

}
