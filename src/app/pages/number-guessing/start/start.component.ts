import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {
  @Output() guessedNumber = new EventEmitter<number>();
  @ViewChild('inputGuessedNum', { static: true }) inputGuessedNum: ElementRef;
  isHidden: boolean = true;
  disableStart : boolean = false
  onGuessNumber() {
    const num = this.inputGuessedNum.nativeElement.value;
    this.guessedNumber.emit(+num);
    this.inputGuessedNum.nativeElement.value = '';
  }
  onStart() {
    this.isHidden = false;
    this.disableStart = true
  }
}
