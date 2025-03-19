import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  experiences = [
    {
      designation: 'Platform Development Specialist',
      company: 'CelcomDigi Berhad',
      period: 'June 2023 - Present',
    },
    {
      designation: 'UI/UX Designer',
      company: 'Celcom Axiata Berhad | CelcomDigi Berhad',
      period: 'June 2022 – June 2023',
    },
    {
      designation: 'HIPA Developer',
      company: 'Celcom Axiata Berhad',
      period: 'April 2020 – June 2022',
    },
    {
      designation: 'SAP B1 Web Application Development Consultant',
      company: 'Croesus IT Solutions',
      period: 'October 2019 – March 2020',
    },
    {
      designation: 'Cyber Security Intern',
      company: 'Sarawak Information Systems (SAINS) Sdn Bhd',
      period: 'February 2018 - July 2018',
    },
  ];
}
