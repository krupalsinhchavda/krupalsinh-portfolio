import { Component, OnInit } from '@angular/core';
import { SplashScreenService } from './splash-screen/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  splashScreenVisible = true;

  constructor(private splashScreenService: SplashScreenService) {}

  ngOnInit() {
    // Show the splash screen
    this.splashScreenService.show();

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      // Hide the splash screen after the delay
      this.splashScreenService.hide();
      this.splashScreenVisible = false;
    }, 1500); // Change the delay time as needed
  }
}