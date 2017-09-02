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
    headers.append('authorization', 'Bearer BQBs_8ksb_EeRief6YyJIU42reUXKvJWASUyzuKq9YzA2mTHaqTQ9gFu6ujc2PKxaf2Qfz9DLOEOWy6nabyIqw');
    return this.http.get(url, {headers} ).map( res => {
      // console.log(res.json().artists);
      this.artists = res.json().artists.items;
      console.log(this.artists);
      // return this.artists;
    });
  }

  getArtist(id: String) {
    let query = `/${id}`;
    let url = this.urlArtist + query;
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBs_8ksb_EeRief6YyJIU42reUXKvJWASUyzuKq9YzA2mTHaqTQ9gFu6ujc2PKxaf2Qfz9DLOEOWy6nabyIqw');
    return this.http.get(url, {headers} ).map( res => {
       //console.log(res.json());
      return res.json();
    });
  }

  getArtistTop(id: String) {
    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtist + query;
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBs_8ksb_EeRief6YyJIU42reUXKvJWASUyzuKq9YzA2mTHaqTQ9gFu6ujc2PKxaf2Qfz9DLOEOWy6nabyIqw');
    return this.http.get(url, {headers} ).map( res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    });
  }
}
