import { Component, OnDestroy, OnInit } from '@angular/core';
import { RowComponent,ColComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
// import { LoadingComponent } from '@shared/components/loading/loading.component';
// import { TemplateTableProductComponent } from '@shared/templates/product/template-table-product/template-table-product.component';
// import { FormSearchComponent } from '@shared/form/form-search/form-search.component';
// import { ButtonLinkComponent } from '@shared/components/buttons/button-link/button-link.component';

import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { FormSearchComponent } from '../../shared/form/form-search/form-search.component';
import { ButtonLinkComponent } from '../../shared/components/buttons/button-link/button-link.component';
import { environment } from '../../../../core/environments/environment';
import { ProductListTemplateComponent } from '../../shared/templates/product/product-list-template/product-list-template.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { ButtonLinkComponent } from '@shared/components/buttons/button-link/button-link.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-index-page',
  imports: [
    RowComponent,
    ColComponent,
    CommonModule,
    LoadingComponent,
    FormSearchComponent,
    ButtonLinkComponent,
    ProductListTemplateComponent,
    FontAwesomeModule
],
  templateUrl: './product-index-page.component.html',
  styleUrl: './product-index-page.component.scss'
})
export class ProductIndexPageComponent implements OnInit, OnDestroy{

  loading: boolean = true;
  products: any[] = [];
  thumbnail_temp: string = environment.imageThumbnailPlaceHolderVertical;

  faPlus = faPlus;
  
  constructor(private _product: ProductService, private _router: Router){
  }

  ngOnInit(): void {
    
    this._product.index().subscribe((resp:any) => {
      console.log(resp);
      this.products = resp.data;
      this.loading = false;
    });
  
  }

  create(){
    
  }
  
  ngOnDestroy(): void {

  }

  redirectToCreate(){
    console.log('redirectToCreate');
    this._router.navigate(['/create']);
  }


}
