import { animate, animation, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

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
            '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(0)',
              height: '50px'
            })
          ),
        ])
      ),
      transition(
        '* => void',
        animation([
          style({
            backgroundColor: '#fafafa',
            height: '50px'
          }),
          animate(
            '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(-25%,0)',
              height: '50px'
            })
          ),
        ])
      ),
    ]),
  ]
})
export class ListComponent implements OnInit, AfterViewInit {
  isIniting = true;
  items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  editTop = '0px';
  editWidth = '0px';
  edit = false;
  constructor() {
    this.items = this.items.reverse();
  }
  ngAfterViewInit(): void {
    this.isIniting = false;
  }

  ngOnInit() {
  }

  addRow() {
    this.edit = false;
    this.items.unshift({id: this.items.length + 1});
  }

  remove(item: any) {
    this.edit = false;
    console.log(item);
    const i = this.items.findIndex(x => x.id === item.id);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
  }

  rowClick($event: any, i: any) {
    // todo animation увеличить высоту;
    const rect = $event.target.getBoundingClientRect();
    this.editTop = rect.top.toString() + 'px';
    this.editWidth = (rect.width).toString() + 'px';
    console.log($event.target.getBoundingClientRect());
    this.edit = true;
  }

  id(index: number, item: any) {
    return item.id; 
  }

}
