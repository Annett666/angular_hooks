import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
{

  @Input() value = 'Grand child value';

  constructor() {
    console.log('GRAND-CHILD constructor', this.value)
  }

  ngAfterViewChecked(): void {
    console.log('GRAND-CHILD AfterViewChecked', this.value)
  }

  ngAfterViewInit(): void {
    console.log('GRAND-CHILD AfterViewInit', this.value)
  }

  ngAfterContentChecked(): void {
    console.log('GRAND-CHILD AfterContentChecked', this.value)
  }

  ngAfterContentInit(): void {
    console.log('GRAND-CHILD AfterContentInit', this.value)
  }

  // component init
  ngOnInit(): void {
    console.log('GRAND-CHILD onInit', this.value)
  }

  // before deleting of component
  ngOnDestroy(): void {
    console.log('GRAND-CHILD onDestroy', this.value)
  }

  // when @Input params were changed
  ngOnChanges(changes: SimpleChanges): void {
    console.log('GRAND-CHILD onChanges', this.value, changes)
  }

  // anything changes inside the component
  ngDoCheck(): void {
    console.log('GRAND-CHILD DoCheck', this.value)
  }

}
