import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css',
})
export class ScoresComponent {
  @Input() easyScore: number;
  @Input() mediumScore: number;
  @Input() hardScore: number;

}
