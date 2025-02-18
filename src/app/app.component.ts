import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Volleyball-Scoreboard';
  team1Score: number = 0
  team2Score: number = 0

  incrementScore(teamName: string): void
  {
    if(teamName == 'team1') {this.team1Score++;}
    else {this.team2Score++;}
  }

  decrementScore(teamName: string): void
  {
    if(teamName == 'team1') {
      if(this.team1Score != 0) {this.team1Score--;}
    }
    else {
      if(this.team2Score != 0) {this.team2Score--;}
    }
  }

  resetScores(): void
  {
    this.team1Score = 0, this.team2Score = 0;
  }
}
