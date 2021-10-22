import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodesList:any = [];
  info:any = {};

  constructor(private episodesService:EpisodesService) { }

  

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((episode) => {
      this.episodesList = episode.results;
      this.info = episode.info;
    })
  }

}

