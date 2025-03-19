import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  constructor(private router: Router) {}
  current: any;

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.current = this.router.url;
    });
  }
}
