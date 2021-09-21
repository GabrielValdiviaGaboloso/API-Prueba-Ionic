import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://img.fotocommunity.com/tour-eiffel-3c8a9a3e-4098-4964-8815-07246844353b.jpg?height=400',
      comments: ['awoseme place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Estatua libertad',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE1vi6PWjEJS9zZZ_2i-n1oLIIaLDWFd9aw&usqp=CAU',
      comments: ['muy lindo', 'hermosa experiencia']
    },
    {
      id: '3',
      title: 'Awesone Place',
      imageURL: 'https://previews.123rf.com/images/seaonweb/seaonweb1401/seaonweb140100528/26188666-hachikoas-en-tokyoa-es-la-estaci%C3%B3n-de-ferrocarril-de-shibuya.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPLaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }

  }

  addPLace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

}
