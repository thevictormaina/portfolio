import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsListService {
  // List of all the projects
  projects: Project[] = [
    {
      title: 'Awards',
      description:
        "This project is an Awwwards clone built with Django. The app allows users to rate developer's websites based on design, usability, and content. Developers can also post new projects on the app.",
      image_name: 'awards-screenshot.png',
      link: 'https://dev-awards-ip.herokuapp.com/',
      tags: [
        'Django',
        'Bootstrap',
        'Javascript',
        'AJAX',
        'Figma',
        'Cloudinary',
        'Postgres',
        'Heroku',
      ],
    },
    {
      title: 'Grace Chapel',
      description:
        'This app is built for a hypothetical church, allowing the church to know their prospective visitors before hand.',
      image_name: 'grace-chapel-screenshot.png',
      link: 'https://grace-chapel.herokuapp.com/',
      tags: ['Django', 'Bootstrap', 'Javascript', 'AJAX', 'Postgres'],
    },
    {
      title: 'Pizza Spot',
      description:
        'A website that allows you to order pizza from you favorite pizza place.',
      image_name: 'pizza-spot-screenshot.png',
      link: 'https://victorkmaina.github.io/pizza/',
      tags: ['Bootstrap', 'Javascript', 'HTML', 'CSS', 'SweetAlert2', 'jQuery'],
    },
    {
      title: 'The Modern Post',
      description:
        'The Modern Post is a simple Flask app that collects news articles from all around the world. On the homepage, a user can see various curated headlines from many news sources, and can also pick from the news outlet of their choice. All this is made possible by consuming the News API.',
      link: 'https://the-modern-post.herokuapp.com/',
      image_name: 'the-modern-post-screenshot.png',
      tags: [
        'Flask',
        'Bootstrap',
        'Javascript',
        'Python',
        'Postgres',
        'SQLAlchemy',
      ],
    },
    {
      title: 'Instagram Clone',
      description:
        "This project is an Instagram clone built with Django. The application has a UI similar to Instagram's web version.",
      image_name: 'instagram-clone-screenshot.png',
      link: 'https://instagram-clone-ip.herokuapp.com/',
      tags: [
        'Django',
        'Bootstrap',
        'Javascript',
        'AJAX',
        'Postgres',
        'Cloudinary',
        'jQuery',
      ],
    },
  ];

  constructor() {}
}
