import { Component, Inject } from '@angular/core';
import { ANIMATIONS_DURATION } from './animation/animation-tokens';
import { fadeExplainMotion } from './animation/fade-explain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeExplainMotion],
  providers: [
    { provide: ANIMATIONS_DURATION, useValue:  300, multi: true }
  ],
})
export class AppComponent {
  title = 'ng-animation-uxlab';
  animation = {
    value: '', params: { 
      duration: this.duration
    }
  };

  constructor(@Inject(ANIMATIONS_DURATION) private readonly duration: number){
    
  }
}
