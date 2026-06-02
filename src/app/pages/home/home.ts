import { Component } from '@angular/core';
import { Skills } from "../skills/skills";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Skills, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
