import {Component, Input} from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styles: [`
   .modal-body{
    position:relative;
   }
    .caption{
    	position:absolute;
      height:90px;
    	width:100%;
    	top:410;
    	left:0;
    	opacity:0.9;
    	background-color:black;
    	color:white;
    	padding:5px;
    	font-family:verdana;
    	font-size:12px;
    }
    p {
       -webkit-margin-before: 5px !important;
       -webkit-margin-after: 5px !important;
    }
   .arrows{
    display: flex;
    justify-content: space-between;
    font-size:40px;
   }


  `]
})
export class GalleryComponent {


   @Input() datasource;
   selectedImage;

   setSelectedImage(image){
      this.selectedImage= image;
   }

     navigate(forward){
     var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
     if(index >= 0 && index < this.datasource.length){
        this.selectedImage = this.datasource[index];
     }



  }

  emoji = ['🎉', '😍', '😜', '👍'];
  activeEmoji: string;
  changeEmoji() {
      this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
  }

}
