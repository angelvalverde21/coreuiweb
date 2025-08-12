import { Component, OnInit } from '@angular/core';
import { BrandCreateComponent } from '../brand-create/brand-create.component';
import { Router } from '@angular/router';
import { ButtonLinkComponent } from '../../shared/components/buttons/button-link/button-link.component';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-brand-create-page',
  imports: [BrandCreateComponent, ButtonLinkComponent],
  templateUrl: './brand-create-page.component.html',
  styleUrl: './brand-create-page.component.scss'
})
export class BrandCreatePageComponent implements OnInit{

  faArrowLeft = faArrowLeft;

  ngOnInit(): void {
  }

  constructor(private _router: Router){
  
  }

  receiveBrandCreate(brand: any){
    // console.log('Brand created:', brand);

    if (brand) {
          this._router.navigate(['/', 'brands']);
    }

  }

}
