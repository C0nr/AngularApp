import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationTypesService {

  page: string;
  properList: any;
  private placesCoordinates = [];
  private coordinates = new Subject<any>();
  item = {
    castles: [
      { name: 'Zamek krzyżacki w Malborku',
        description: 'Zamek w Malborku to słynny zamek krzyżacki z XIII wieku, jest on największy na świecie pod względem powierzchni i znajduje się na liście zabytków UNESCO.',
        photo: 'https://wczasypolskie.pl/zdjecia/zamek-malbork.jpg',
        coordinates: [54.039910, 19.028463],
        details: 'Details 1',},
      { name: 'Zamek Moszna',
        description: 'Pałac w Mosznej (niem. Schloss Moschen) – zabytkowa rezydencja położona we wsi Moszna, w województwie opolskim.',
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/02/3a/7f/7c/moszna-castle.jpg',
        coordinates: [50.441170, 17.767780],
        details: 'Details 2'},
      { name: 'Zamek Czocha',
        description: 'Zamek Czocha – obronny zamek graniczny położony w miejscowości Sucha (Czocha), gmina Leśna, nad Zalewem Leśniańskim na Kwisie w polskiej części ...',
        photo: 'http://www.zamkipolskie.com/czocha/26.jpg',
        coordinates: [51.030970, 15.303684],
        details: 'Details 3'},
      { name: 'Zamek Książ w Wałbrzychu',
        description: 'Książ – zespół rezydencjalny znajdujący się w Wałbrzychu przy ulicy Piastów Śląskich 1 w dzielnicy Książ, na terenie Książańskiego Parku Krajobrazowego na Pogórzu Wałbrzyskim. Znajduje się na Szlaku Zamków Piastowskich.',
        photo: 'http://cit.walbrzych.pl/img/2010/04/zamek-ksiaz.jpg',
        coordinates: [50.842431, 16.292018],
        details: 'Details 4',}
    ],
    monuments: [
      { name: 'Pomnik Ziemniaka',
        description: 'W miejscowości Biesiekierz, w województwie zachodniopomorskim postawiono najprawdopodobniej największy na świecie pomnik ziemniaka.',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipPLUnjXkT7sOG_jxrbMbr041FpFfe4bVIZAK6E8=w408-h544-k-no',
        coordinates: [54.133145, 16.040404],
        details: 'Details 1',},
      { name: 'Pomnik Grzyba XXI Wieku',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipPEa2cXChOYPzcyFi6gt2pYs5xApm_rCXxarvCH=w408-h544-k-no',
        coordinates: [52.601748, 16.215423],
        details: 'Details 2',},
      { name: 'Pomnik UFO',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipOC4kLLkYEy68vfv2AjRM0IN0DEPrHidzff3zQ2=w426-h240-k-no',
        coordinates: [51.134268, 22.039304],
        details: 'Details 3',},
      { name: 'Pomnik Dyrygenta Fal',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipMRKmohVLmU-bRCvMvcHIhCE4VuYFHzRQkwIW4_=w426-h240-k-no',
        coordinates: [54.517510, 18.557454],
        details: 'Details 4',},
    ],
    bridges: [
      { name: 'Most Świętokrzyski, Warszawa',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipPE8mOv-JYcIt6fVJuSdWdmHb_2T4koUUD9C4OL=w408-h306-k-no',
        coordinates: [52.241851, 21.034718],
        details: 'Details 1',},
      { name: 'Most Gdański, Warszawa',
        description: '',
        photo: 'https://geo1.ggpht.com/maps/photothumb/fd/v1?bpb=ChAKDnNlYXJjaC5UQUNUSUxFEiAKEgmjo9vYDMweRxGz9nssSKhXiSoKDQAAAAAVAAAAABoGCPABEJgD&gl=PL',
        coordinates: [52.261310, 21.010504],
        details: 'Details 2',},
      { name: 'Most Kotlarski, Kraków',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipN2mb8b_EvnH-M_tBA76M7SSxlk2SNSHIdyn4Lx=w408-h270-k-no',
        coordinates: [50.053128, 19.961206],
        details: 'Details 3',},
      { name: 'Most Tumski, Wrocław',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipMYht_yBFDluC7xSLP-5orBz5otQHqCwXFBI2v2=w426-h240-k-no',
        coordinates: [51.114910, 17.042434],
        details: 'Details 4',},
    ],
    parks: [
      { name: 'Babiogórski Park Narodowy',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipN8viNtjNMe8M-WzsInrlglj0eGSOOgcd6f3Q7F=w408-h272-k-no',
        coordinates: [49.593819, 19.531164],
        details: 'Details 1'},
      { name: 'Białowieski Park Narodowy',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipOPGL3L0YPa0etICprR6q6Ywgm092lyQYOj0m1V=w408-h272-k-no',
        coordinates: [52.716097, 23.845139],
        details: 'Details 2',},
      { name: 'Biebrzański Park Narodowy',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipPdzAZ9zIINrfSX3mvsBSNibeX8xJDadKffw7Rg=w408-h272-k-no',
        coordinates: [53.589398, 22.819421],
        details: 'Details 3',},
      { name: 'Bieszczadzki Park Narodowy',
        description: '',
        photo: 'https://lh5.googleusercontent.com/p/AF1QipPfz91fCuHs1epeIRD_RGEXgOhP95436yiXy9Ye=w408-h272-k-no',
        coordinates: [49.103564, 22.654719],
        details: 'Details 4',},
    ],
  };

  constructor() { }

  sendDataType() {
    switch(this.page) {
      case this.page = "castles":
        this.properList = this.item.castles;
        this.placesCoordinates = [1,2];
        break;
      case this.page = "bridges":
        this.properList = this.item.bridges;
        this.placesCoordinates = [10,20];
        break;
      case this.page = "monuments":
        this.properList = this.item.monuments;
        this.placesCoordinates = [15,25];
        break;
      default:
        this.properList = this.item.parks;
        this.placesCoordinates = [19,29];
    }
    this.coordinates.next(this.placesCoordinates);
  }

  getPage(page: string) {
    this.page = page;
  }

  getCoordinates(): Observable<any> {
    return this.coordinates.asObservable();
  }
}
