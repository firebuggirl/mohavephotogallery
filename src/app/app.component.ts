import {Component, OnInit } from '@angular/core';
import {TweenMax} from "gsap";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { environment } from './../environments/environment';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  trigger('listAnimation', [
      transition('* => *', [

        query('.links', style({ opacity: 0 }), {optional: true}),

        query('.links', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

]
})

export class AppComponent implements OnInit {

//apiUrl = environment.apiUrl;

constructor() {



    }


ngOnInit() {

}
}
