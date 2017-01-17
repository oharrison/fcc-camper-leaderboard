export class Camper {
  username: string;
  imageUrl: string;
  alltimePoints: number;
  recentPoints: number;

  constructor(data: any) {
    this.username = data.username;
    this.imageUrl = data.img;
    this.alltimePoints = data.alltime;
    this.recentPoints = data.recent;
  }
}
