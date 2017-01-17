import { Component, OnInit } from '@angular/core';
import { Camper } from '../models/camper';
import { CamperDataService } from '../services/camper-data.service';

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  leaders: Array<Camper> = [];

  recent: boolean = true;
  alltime: boolean = false;

  constructor(private camperDataService: CamperDataService) { }

  loadRecentData() {
    this.camperDataService.getRecentData().subscribe((data) => {
      this.leaders = data;
    });
    this.alltime = false;
    this.recent = true;
  }

  loadAllTimeData() {
    this.camperDataService.getAllTimeData().subscribe((data) => {
      this.leaders = data;
    });
    this.alltime = true;
    this.recent = false;
  }

  ngOnInit() {
    this.loadRecentData();
  }
}
