import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const IMAGES: string[] = [
  './assets/images/big1.jpg',
  './assets/images/big2.jpg',
  './assets/images/big3.jpg',
  './assets/images/big4.jpg'
];

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css']
})

export class GalleryComponent implements OnInit{
  images = IMAGES;
  selectedImage: string;

  constructor(private modalService: NgbModal) {}

  onSelect(img: string): void {
    this.selectedImage = img;
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.selectedImage = this.images[0];
  }

}
