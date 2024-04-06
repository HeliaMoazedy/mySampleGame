import { Component, EventEmitter, Output } from '@angular/core';
import { difficultyLevel } from '../models/difficulty-level.type';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-choose-level',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './choose-level.component.html',
  styleUrl: './choose-level.component.css',
})
export class ChooseLevelComponent {
  @Output() levelSelected = new EventEmitter<{
    type: difficultyLevel;
    num: number;
  }>();

  onLevelSelect(level: difficultyLevel) {
    switch (level) {
      case 'easy':
        this.levelSelected.emit({ type: 'easy', num: this.getRandomInt(5) });
        break;
      case 'medium':
        this.levelSelected.emit({ type: 'medium', num: this.getRandomInt(10) });
        break;
      case 'hard':
        this.levelSelected.emit({ type: 'hard', num: this.getRandomInt(20) });
        break;
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
