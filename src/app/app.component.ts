import { Component, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) {
    this.setBodyBackground("assets/images/haikyuu_season_1_background.webp");
  }

  setBodyBackground(imageURL: string) {
    this.renderer.setStyle(document.body, 'background', `url(${imageURL})`);
    this.renderer.setStyle(document.body, 'backgroundRepeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'backgroundPosition', 'center');
    this.renderer.setStyle(document.body, 'backgroundAttachment', 'center fixed');
    this.renderer.setStyle(document.body, 'backgroundSize', 'cover');
    this.renderer.setStyle(document.body, 'minHeight', '100vh');
    this.renderer.setStyle(document.body, 'width', '100%');
  }

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
