import { Component, OnInit } from '@angular/core';
import { CartLogicService } from '../../../cart/services/cart-logic.service';
import { ProductService } from '../../../products/services/product.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface Product {
  id: number;
  productName: string;
  description: string;
  price: {
    old: number;
    current: number;
  };
  category_id: number;
  brand_id: number;
  picture:string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl<string | Product>('');
  options: Product[] = [];
  filteredOptions!: Observable<Product[]>;
  totalCountOfShoppingCart: number = 0;

  constructor(
    private cartService: CartLogicService,
    private productService: ProductService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(item => {
      this.totalCountOfShoppingCart = this.cartService.getTotalCount();
    });

    this.productService.getProducts2().subscribe({
      next: (items: Product[]) => {
        this.options = items;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => {
            const name = typeof value === 'string' ? value : value?.productName;
            return name ? this._filter(name as string) : this.options.slice();
          }),
        );
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  displayFn(product: Product): string {
    return product && product.productName ? product.productName : '';
  }

  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.productName.toLowerCase().includes(filterValue));
  }
  onOptionSelected(event: any): void {
    console.log(event.source.value.id);
    this.router.navigate(["/products",event.source.value.id])
    this.myControl.reset();
  }
}
