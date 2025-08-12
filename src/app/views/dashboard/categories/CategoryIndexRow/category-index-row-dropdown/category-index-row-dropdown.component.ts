import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-index-row-dropdown',
  imports: [NgbDropdownModule, RouterModule, FontAwesomeModule],
  templateUrl: './category-index-row-dropdown.component.html',
  styleUrl: './category-index-row-dropdown.component.scss'
})
export class CategoryIndexRowDropdownComponent {

    faEdit = faEdit;
  faLink = faLink;

  @Input() category: any; 

}
