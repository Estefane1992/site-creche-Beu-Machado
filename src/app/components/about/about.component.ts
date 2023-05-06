import { Component } from '@angular/core';
import { DescriptionAboutService } from 'src/app/services/description-about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 description : any;

  constructor(private service:DescriptionAboutService) {}

  ngOnInit(): void {
    this.description = this.service.aboutDescription;
  }

 
  

}
