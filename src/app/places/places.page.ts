import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []

  constructor(private placeService: PlacesService) {

  }

  ngOnInit() {
    this.places = this.placeService.getPLaces()
    console.log(this.places);
  }
  ionViewWillEnter() {
    this.places = this.placeService.getPLaces()
  }
}
