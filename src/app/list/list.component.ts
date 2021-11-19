import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('addStateTrigger', [
      transition(
        ':enter',
        animation([
          style({
            transform: 'translate(25%,0)',
            backgroundColor: '#fafafa',
            height: '10px'
          }),
          animate(
            '0.5s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(0)',
              height: '50px'
            })
          ),
        ])
      ),
    ])
  ]
})
export class ListComponent implements OnInit {

  items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  constructor() {
    this.items = this.items.reverse();
  }

  ngOnInit() {
  }

  addRow() {
    this.items.unshift({id: this.items.length + 1});
  }

  id(index: number, item: any) {
    return item.id; 
  }

}