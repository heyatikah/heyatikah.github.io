import { Component } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-work',
  imports: [LoaderComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  title = 'Work';
}
