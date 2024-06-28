import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollToProducts() {
    const productSect = document.getElementById("productSect");
    if (productSect) {
      (productSect as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
