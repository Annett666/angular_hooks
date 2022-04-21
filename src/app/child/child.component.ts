import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {GrandChildComponent} from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
{

  @Input() value = 'Initial value';

  // get the template element
  // @ts-ignore
  @ViewChild('foo') content: ElementRef;

  // finding the first GrandChildComponent
  // @ts-ignore
  @ViewChild(GrandChildComponent) grandChild: GrandChildComponent;

  // array of GrandChildComponent
  // @ViewChildren(GrandChildComponent) grandChild: GrandChildComponent;

  constructor() {
    // @ts-ignore
    console.log('CHILD constructor', this.value, this.grandChild, this.content)
  }

  ngAfterViewInit(): void {
    console.log('CHILD AfterViewInit', this.value, this.grandChild, this.grandChild.value, this.content)
  }

  ngAfterViewChecked(): void {
    console.log('CHILD AfterViewChecked', this.value, this.grandChild, this.content)
  }

  ngAfterContentInit(): void {
    console.log('CHILD AfterContentInit', this.value, this.grandChild, this.content)
  }

  ngAfterContentChecked(): void {
    console.log('CHILD AfterContentChecked', this.value, this.grandChild, this.content)
  }

  // component init
  ngOnInit(): void {
    console.log('CHILD onInit', this.value, this.grandChild, this.content)
  }

  // before deleting of component
  ngOnDestroy(): void {
    console.log('CHILD onDestroy', this.value, this.grandChild, this.content)
  }

  // when @Input params were changed
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD onChanges', this.value, changes, this.grandChild, this.content)
  }

  // anything changes inside the component
  ngDoCheck(): void {
    console.log('CHILD DoCheck', this.value, this.grandChild, this.content)
  }

}
