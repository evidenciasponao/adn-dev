import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metrics',
  imports: [CommonModule],
  templateUrl: './metrics.html',
  styleUrl: './metrics.css'
})
export class Metrics {

  metrics = [
    {
      value: '3+',
      label: 'Live Projects'
    },
    {
      value: '10+',
      label: 'Technologies'
    },
    {
      value: '24/7',
      label: 'Cloud Hosted'
    },
    {
      value: 'Real',
      label: 'Client Work'
    }
  ];

}