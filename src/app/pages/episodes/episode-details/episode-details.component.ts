import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  public episodeDetail: any = {}

  constructor(private route:ActivatedRoute, private episodeServices:EpisodesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idEpisode = Number(params.get('id'))
      this.episodeServices.getEpisodeById(idEpisode).subscribe((episode) => {
        this.episodeDetail = episode;
        console.log(episode)
      })
    })
  }

}
