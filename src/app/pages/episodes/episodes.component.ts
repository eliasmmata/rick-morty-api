import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodesList:any = [];
  info:any = {}

  constructor(private episodesService:EpisodesService) { }

  

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((episode) => {
      this.episodesList = episode.results;
      this.info = episode.info;
    })
  }
  public nextPage() {
    console.log('pagina siguiente')
    if(this.info.next) {
        this.episodesService.getLocationByPages(this.info.next).subscribe((episode) => {
        this.episodesList= episode.results
        this.info = episode.info
        // console.log(episode.info.next)
        if(episode.info.next === null) {
          episode.info.next = 'https://rickandmortyapi.com/api/episode?page=1'
          console.log('vuelvo a la primera pagina')
        }
      })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  public previousPage() {
    console.log('pagina anterior')
    if(this.info.prev) {
        this.episodesService.getLocationByPages(this.info.prev).subscribe((episode) => {
        this.episodesService= episode.results
        this.info = episode.info
        console.log(episode.info)
      })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}

