import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
    {
      title: 'ADN DEV Cloud',
      subtitle: 'Professional Portfolio',
      image: 'projects/adn-dev.png',
      description:
        'Personal portfolio developed with Angular, focused on responsive design, modern UI and professional presentation.',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.adn-dev.cloud'
    },
    {
      title: 'NeoRave Web',
      subtitle: 'Music Platform',
      image: 'projects/neorave-web.png',
      description:
        'Official NeoRave website featuring branding, multimedia content and responsive user experience.',
      technologies: [
        'Angular',
        'Responsive Design',
        'UI/UX'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.neorave-web.shop'
    },
    {
      title: 'Blood FL Shop',
      subtitle: 'Commercial Landing Page',
      image: 'projects/blood-fl.png',
      description:
        'Commercial website focused on digital presence, visual identity and customer engagement.',
      technologies: [
        'Angular',
        'CSS',
        'Bootstrap'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.blood-fl.shop'
    }
  ];

}