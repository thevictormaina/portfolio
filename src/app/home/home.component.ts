import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  developerTags = ["HTML", "CSS", "Javascript", "Django", "Flask", "Python", "Postgresql", "Deployment", "Git", "Angular"]
  designerTags = ["UI Design", "Photoshop", "After Effects", "Figma", "Adobe XD", "Premiere Pro", "Davinci Resolve"]

  constructor() { }

  ngOnInit(): void {
  }

}
