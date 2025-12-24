import { Component } from '@angular/core';
import { SideBar } from '../side-bar/side-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-component',
  imports: [SideBar, RouterOutlet],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {

}
