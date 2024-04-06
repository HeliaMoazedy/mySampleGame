import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class AppComponent {
  title = 'games';
}
