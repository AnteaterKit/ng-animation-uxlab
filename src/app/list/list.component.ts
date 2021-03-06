import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ANIMATIONS_DURATION } from '../animation/animation-tokens';
import { fadeExplainEditMotion, fadeExplainMotion, listEnterMotion } from '../animation/fade-explain';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [fadeExplainMotion, fadeExplainEditMotion, listEnterMotion],
})
export class ListComponent implements OnInit, AfterViewInit {
  isIniting = true;
  items = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  details = [{id: 1}, {id: 2}, {id: 3}, {id: 4},  {id: 4},  {id: 4},  {id: 4},  {id: 4}];
  editTop = '0px';
  editWidth = '0px';
  edit = false;
  editIndex = -1;
  showDetail = false;

  animation = {
    value: '', params: { 
      duration: this.duration
    }
  };

  animatiomList = {value: this.details.length, params:{delay: 1 * 100 + 500 }};

  constructor(@Inject(ANIMATIONS_DURATION) private readonly duration: number,) {
    console.log('duration ', duration);
    this.items = this.items.reverse();
  }
  ngAfterViewInit(): void {
    this.isIniting = false;
  }

  ngOnInit() {
  }

  addRow() {
    this.showDetail = false;
    this.edit = false;
    this.editIndex = -1;
    this.items.unshift({id: this.items.length + 1});
  }

  remove(item: any) {
    this.edit = false;
    this.showDetail = false;
    this.editIndex = -1;
    console.log(item);
    const i = this.items.findIndex(x => x.id === item.id);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
  }

  rowClick($event: any, i: any) {
    console.log($event.target);
    this.edit = true;
    this.editIndex = i;
    setTimeout(() => {
      const rect = $event.target.parentNode.getBoundingClientRect();
      this.editTop = (rect.top.toString() + 30) + 'px';
      this.editWidth = (rect.width).toString() + 'px';
      console.log($event.target.getBoundingClientRect());
    }, 100);
    
    
  }

  detail($event: any) {
    this.showDetail = !this.showDetail;;
  }

  accept() {
    this.edit = false;
    this.editIndex = -1;
  }

  isEdit(i: number) {
    return  i === this.editIndex;
  }

  id(index: number, item: any) {
    return item.id; 
  }

}
