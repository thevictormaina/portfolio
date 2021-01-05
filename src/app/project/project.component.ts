import { Component, OnInit } from '@angular/core';
import { ProjectsListService } from '../services/projects-list.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = this.projectListService.projects;

  constructor(private projectListService: ProjectsListService) { }

  ngOnInit(): void {

  }

}
