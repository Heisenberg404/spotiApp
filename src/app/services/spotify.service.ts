import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any [] = [];
  urlSearch: String = 'https://api.spotify.com/v1/search';
  urlArtist: String = 'https://api.spotify.com/v1/artists';

  constructor(private http: Http) { }

  getArtists(parameter: String) {
    let query = `?q=${parameter}&type=artist`;
    let url = this.urlSearch + query;
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBNidm_2IBy36-v8wZ5QLjbjIrx438UnPsGGkcPfZM38I2nl5umLvAJzZpp5EK4V0y2Vc_Euv1_sPOI63UiHQ');
    return this.http.get(url, {headers} ).map( res => {
      // console.log(res.json().artists);
      this.artists = res.json().artists.items;
      console.log(this.artists);
      // return this.artists;
    });
  }
}
