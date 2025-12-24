import { Component } from '@angular/core';
import { HasPermissionDirective } from '../../core/directives/has-permission.directive';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-location',
  imports: [MaterialModule, HasPermissionDirective],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class Location {
  data = ['BLR', 'DEL'];
  cols = ['name', 'actions'];

}
