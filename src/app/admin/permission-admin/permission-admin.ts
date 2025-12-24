import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permission-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './permission-admin.html',
  styleUrl: './permission-admin.scss',
})
export class PermissionAdmin {
  // perms: any;
  // constructor(private auth: AuthService) {
  //   this.perms = structuredClone(this.auth.user()?.permissions || []);
  // }


  // save() {
  //   this.auth.updatePermissions(this.perms);
  // }
}
