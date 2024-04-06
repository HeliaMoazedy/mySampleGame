import { Component } from '@angular/core';
import { StartComponent } from './start/start.component';
import { ScoresComponent } from './scores/scores.component';
import { ChooseLevelComponent } from './choose-level/choose-level.component';
import { difficultyLevel } from './models/difficulty-level.type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-number-guessing',
  standalone: true,
  templateUrl: './number-guessing.component.html',
  styleUrl: './number-guessing.component.css',
  imports: [StartComponent, ScoresComponent, ChooseLevelComponent],
})
export class NumbergGuessing {
  gessedNum = 0;
  generatedNum = 0;
  level = '';
  easyScore: number = 0;
  mediumScore: number = 0;
  hardScore: number = 0;
  isHidden = true
  constructor(private toastr: ToastrService) {}
  

  handleLevelSelected(data: { type: difficultyLevel; num: number }) {
    this.generatedNum = data.num;
    this.level = data.type;
    console.log(data.type + ' ' + data.num);
  }
  checkNumber(usernum: number) {
    this.gessedNum = usernum;
    if (usernum && this.generatedNum) {
      if (usernum == this.generatedNum) {
        this.toastr.success('You win!');
        this.isHidden = false
        switch (this.level) {
          case 'easy':
            this.easyScore++;
            break;
          case 'medium':
            this.mediumScore++;
            break;
          case 'hard':
            this.mediumScore++;
            break;
          default:
            break;
        }
      } else {
        this.toastr.error('You Lost', ' Error', {
          timeOut: 3000,
        });
      }
    }
    else{
      this.toastr.error('Select difficulty level or enter input ' , ' Error', {
        timeOut: 3000,
      });
    }
  }
}
