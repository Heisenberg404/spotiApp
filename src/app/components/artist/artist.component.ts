import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  songs: any[];

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(params => params['id']).subscribe(id => {
      console.log(id);
      this.spotifyService.getArtist(id).subscribe(data => this.artist = data);
      this.spotifyService.getArtistTop(id).subscribe(data => this.songs = data);
    });
  }

}
