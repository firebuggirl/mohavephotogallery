import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

constructor(meta: Meta, title: Title) {

 title.setTitle('About Me Page');

     meta.addTags([
       { name: 'author',   content: 'Juliette Tworsey'},
       { name: 'keywords', content: 'kws, keywords, etc..'},
       { name: 'description', content: 'Woo hoooooooooo!' }
     ]);

    }

  ngOnInit() {
  }

}
