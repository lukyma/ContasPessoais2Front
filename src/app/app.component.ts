import { Component, OnInit } from '@angular/core';
import { parse, stringify } from 'flatted/esm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ContasPessoaisFront';

  ngOnInit(): void {
    const a = [{one: '1', two: '3'}];
    // a[0].a = a;
    // a is the main object, will be at index '0'
    // {one: 1} is the second object, index '1'
    // {two: '2'} the third, in '2', and it has a string
    // which will be found at index '3'

    console.log(stringify(a));
  }
}
