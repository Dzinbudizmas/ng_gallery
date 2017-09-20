import {Component, OnInit} from '@angular/core';

import { NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

const IMAGES: string[] = [
  './assets/images/beetle1small.jpg',
  './assets/images/beetle2small.jpg',
  './assets/images/beetle3small.jpg',
  './assets/images/beetle4small.jpg'
];

const IMAGESBIG: string[] = [
  './assets/images/beetle1big.jpg',
  './assets/images/beetle2big.jpg',
  './assets/images/beetle3big.jpg',
  './assets/images/beetle4big.jpg'
];

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
  providers: [NgbCarouselConfig]
})

export class GalleryComponent implements OnInit{
  images = IMAGES;
  bigImages = IMAGESBIG;
  selectedImage: string;
  selectedIndex = 0;

  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.interval = 0;
  }

  onSelect(img: string): void {
    this.selectedIndex = this.images.findIndex(x => x === img);
    this.selectedImage = img.replace('small', 'mid');
  }

  onNext(arrow: string): void {
    if (arrow === 'up') {
      if (this.selectedIndex === 0){
        this.selectedIndex = this.images.length;
      }
      this.selectedIndex -= 1;
      this.selectedImage = this.images[this.selectedIndex].replace('small', 'mid');
    } else {
      if (arrow === 'down') {
        this.selectedIndex += 1;
        if (this.selectedIndex === this.images.length) {
          this.selectedIndex = 0;
        }
        this.selectedImage = this.images[this.selectedIndex].replace('small', 'mid');
      }
    }
  }

  open(content) {
    const options: NgbModalOptions = {
      size: 'lg'
    };
    this.modalService.open(content, options);
  }

  ngOnInit(): void {
    this.onSelect(this.images[0]);
  }
}
