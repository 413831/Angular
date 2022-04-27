import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css> 
    <br>

    <app-clases></app-clases> 
    <br>

    <p [appResaltado]="'red'">
      Hola mundo
    </p>

    <br>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked,
                                      AfterViewInit, AfterViewChecked, OnDestroy  
{

  constructor() { 
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }



}
