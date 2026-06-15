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
      title: 'Blood FL Shop',
      subtitle: 'Fullstack E-commerce',
      image: 'projects/blood-fl.png',
      description:
        'Fullstack e-commerce for BLØØD Death Metal CO. Angular frontend with SSR, REST API in .NET Core, JWT authentication, Azure SQL database, CI/CD with GitHub Actions and custom domain on Azure Static Web Apps.',
      technologies: [
        'Angular',
        'SSR',
        '.NET Core',
        'JWT Auth',
        'Entity Framework',
        'Azure SQL',
        'GitHub Actions',
        'Azure'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.blood-fl.shop'
    },
    {
      title: 'BloodFl API',
      subtitle: 'REST API — .NET Core',
      image: 'projects/bloodfl-api.png',
      description:
        'Production REST API built with ASP.NET Core. Handles product management, JWT-based authentication, DTOs, Entity Framework migrations and Azure SQL Server. Deployed on Azure App Service.',
      technologies: [
        'ASP.NET Core',
        'C#',
        'JWT',
        'Entity Framework',
        'Azure SQL',
        'Azure App Service'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.blood-fl.shop'
    },
    {
      title: 'Apolo Manillas',
      subtitle: 'E-commerce Landing Page',
      image: 'projects/apolo-manillas.png',
      description:
        'E-commerce for a handmade bracelet brand. Product catalog, interactive modals, WhatsApp sales integration, responsive design and deployment on Azure with custom domain and HTTPS.',
      technologies: [
        'Angular',
        'TypeScript',
        'CSS3',
        'Azure'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.apolo-manillas.shop'
    },
    {
      title: 'NeoRave Web',
      subtitle: 'Artist Platform',
      image: 'projects/neorave-web.png',
      description:
        'Official platform for NeoRave DJ/Producer. SoundCloud and YouTube integrations, visual art gallery, event dates, Ko-fi support page and full responsive design deployed on Azure.',
      technologies: [
        'Angular',
        'SoundCloud API',
        'YouTube API',
        'Ko-fi',
        'Azure'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.neorave-web.shop'
    },
    {
      title: 'ADN DEV Cloud',
      subtitle: 'Professional Portfolio',
      image: 'projects/adn-dev.png',
      description:
        'Personal portfolio showcasing fullstack projects, technical skills, academic background and professional experience. Built with Angular, responsive design and deployed on Azure with custom domain.',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Azure'
      ],
      year: '2026',
      status: 'Live',
      url: 'https://www.adn-dev.cloud'
    }
  ];

}