import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    trigger('addStateTrigger', [
      transition(
        ':enter',
        animation([
          style({
            transform: 'translate(25%,0)',
          }),
          animate(
            '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(0)',
            })
          ),
        ])
      ),
    ])
  ]
})
export class ButtonComponent implements OnInit {
  addState: 'DEFAULT' | 'ADDED' = 'DEFAULT';
  isClick: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addState = 'ADDED';
    
    setTimeout(() => {
      this.addState = 'DEFAULT';
    }, 1000);
  }


}
