import { Component } from '@angular/core';
import { Metrics } from '../../core/metrics/metrics';

@Component({
  selector: 'app-about',
  imports: [Metrics],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
