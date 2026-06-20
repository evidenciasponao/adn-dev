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

      problem:
        'The band needed a complete online store with secure authentication, inventory management, product catalog and automated cloud deployment.',

      architecture:
        'Angular SSR → ASP.NET Core API → Azure SQL Database → Azure Static Web Apps',

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

      demoUrl: 'https://www.blood-fl.shop',

      repoUrl: 'https://github.com/evidenciasponao/blood-web'
    },

    {
      title: 'BloodFl API',
      subtitle: 'REST API — .NET Core',

      image: 'projects/bloodfl-api.png',

      problem:
        'A secure backend service was required to handle authentication, product management, order processing and database operations for the e-commerce platform.',

      architecture:
        'ASP.NET Core → Entity Framework → Azure SQL Server → Azure App Service',

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

      demoUrl: 'https://www.blood-fl.shop',

      repoUrl: 'https://github.com/evidenciasponao/bloodfl-api'
    },

    {
      title: 'Apolo Manillas',
      subtitle: 'E-commerce Landing Page',

      image: 'projects/apolo-manillas.png',

      problem:
        'The client needed an online presence to showcase products, increase sales and facilitate direct communication with customers.',

      architecture:
        'Angular → Responsive UI → WhatsApp Integration → Azure Hosting',

      technologies: [
        'Angular',
        'TypeScript',
        'CSS3',
        'Azure'
      ],

      year: '2026',

      status: 'Live',

      demoUrl: 'https://www.apolo-manillas.shop',

      repoUrl: 'https://github.com/evidenciasponao/apolo-manillas'
    },

    {
      title: 'NeoRave Web',
      subtitle: 'Artist Platform',

      image: 'projects/neorave-web.png',

      problem:
        'The artist required a centralized platform to promote music, events, visual content and fan support channels from a single website.',

      architecture:
        'Angular → SoundCloud API → YouTube API → Azure Hosting',

      technologies: [
        'Angular',
        'SoundCloud API',
        'YouTube API',
        'Ko-fi',
        'Azure'
      ],

      year: '2026',

      status: 'Live',

      demoUrl: 'https://www.neorave-web.shop',

      repoUrl: 'https://github.com/evidenciasponao/neorave-web'
    },

    {
      title: 'ADN DEV Cloud',
      subtitle: 'Professional Portfolio',

      image: 'projects/adn-dev.png',

      problem:
        'A professional platform was needed to showcase projects, technical skills, cloud experience and software development capabilities.',

      architecture:
        'Angular → TypeScript → Bootstrap → Azure Static Web Apps',

      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Azure'
      ],

      year: '2026',

      status: 'Live',

      demoUrl: 'https://www.adn-dev.cloud',

      repoUrl: 'https://github.com/evidenciasponao/adn-dev'
    },

    {
      title: 'ApoloManillas API',
      subtitle: 'REST API — .NET Core',

      image: 'projects/apolo-manillas-api.png',

      problem:
        'A secure backend service was required to handle authentication, product management, order processing and database operations for the e-commerce platform.',

      architecture:
        'ASP.NET Core → Entity Framework → Azure SQL Server → Azure App Service',

      technologies: [
        'ASP.NET Core',
        'C#',
        'JWT',
        'Entity Framework',
        'Azure SQL',
        'Azure App Service'
      ],

      year: '2025',

      status: 'Live',

      demoUrl: 'https://www.apolo-manillas.shop',

      repoUrl: 'https://github.com/evidenciasponao/apolomanillas-api'
    }

  ];

}