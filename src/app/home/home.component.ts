import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

  trigger('explainerAnim', [
     transition('* => *', [
       query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

       query('.col', stagger('500ms', [
         animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
       ])),

       query('.col', [
         animate(1000, style('*'))
       ])

     ])
   ])
]
})
export class HomeComponent implements OnInit {

images;
constructor(meta: Meta, title: Title) {

 title.setTitle('My Spiffy Home Page');

     meta.addTags([
       { name: 'author',   content: 'Coursetro.com'},
       { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
       { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
     ]);

     this.images = [
{
  "url":"assets/img/desertyucca2.jpg",
  "title":"Desert Yucca",
  "caption":"Yucca Tree in the Mohave Desert."
},
  {
  "url":"assets/img/desertplant.jpg",
  "title":"Cholla Cactus",
  "caption":"A Cholla Cactus decorates the Mohave landscape."
  },
  {
  "url":"assets/img/deserttree.jpg",
  "title":"Desert Tree",
  "caption":"The view from my workspace."
  },
  {
  "url":"assets/img/frontview.jpg",
  "title":"Front View",
  "caption":"View from home."
  },
  {
  "url":"assets/img/frontyardsundown.jpg",
  "title":"Front Yard Sundown",
  "caption":"Gazing out into the West."
  },
  {
  "url":"assets/img/frontyardsunset2.jpg",
  "title":"Western Sunset",
  "caption":"The view to the West."
  },
  {
  "url":"assets/img/highdesertlandscape.jpg",
  "title":"Joshua Trees",
  "caption":"The Joshua Tree landscape."
  },
  {
  "url":"assets/img/pappyharrietsskyfire.jpg",
  "title":"Sunset at Pappy and Harriet's",
  "caption":"Sunset in Pioneer Town CA."
  },
  {
  "url":"assets/img/pappyssunsetlandscape.jpg",
  "title":"Sunset at Pappy and Harriet's",
  "caption":"Sunset in Pioneer Town CA."
  },
  {
  "url":"assets/img/pappysunset.jpg",
  "title":"Sunset at Pappy and Harriet's",
  "caption":"Sunset in Pioneer Town CA."
  },
  {
  "url":"assets/img/sky.jpg",
  "title":"Western Night Sky",
  "caption":"Sundown in the Mohave Desert."
  },
  {
  "url":"assets/img/virgilhomeaug.jpg",
  "title":"King of the World",
  "caption":"Virgil dog contemplating a world takeover!"
  },
  {
  "url":"assets/img/virgilpappyandharrietsmedium.jpg",
  "title":"Virgil Dog",
  "caption":"Where are my treats?!"
  },
  {
  "url":"assets/img/yardflowers.jpg",
  "title":"Purple Schrub Tree",
  "caption":"Front yard Shrub Tree"
  },
  {
  "url":"assets/img/yuccacamp.jpg",
  "title":"Yucca Trees",
  "caption":"Yucca Trees in the Mohave"
  },
  {
  "url":"assets/img/yuccavalleysunset.jpg",
  "title":"Pioneer Town Sunset",
  "caption":"Pioneer Town Sunset looking West"
  }
     ];
}







  ngOnInit() {
  }

}
