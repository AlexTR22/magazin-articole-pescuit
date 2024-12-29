import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  imports: [FormsModule, MatIconModule, MatToolbarModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  
}
