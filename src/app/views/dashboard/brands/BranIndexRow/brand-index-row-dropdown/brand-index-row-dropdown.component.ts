import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-brand-index-row-dropdown',
  imports: [NgbDropdownModule, RouterModule, FontAwesomeModule],
  templateUrl: './brand-index-row-dropdown.component.html',
  styleUrl: './brand-index-row-dropdown.component.scss'
})
export class BrandIndexRowDropdownComponent {

  faEdit = faEdit;
  faLink = faLink;

  @Input() brand: any; 
  
}
