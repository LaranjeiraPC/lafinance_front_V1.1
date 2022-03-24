import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem!: MenuItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
          this.router.navigate(['/dash'])
        }
      },
      {
        label: 'Ação', icon: 'pi pi-fw pi-wallet', command: () => {
          this.router.navigate(['/acao'])
        }
      },
      {
        label: 'Venda', icon: 'pi pi-fw pi-shopping-cart', command: () => {
          this.router.navigate(['/venda'])
        }
      },
      {
        label: 'Ativo', icon: 'pi pi-fw pi-shopping-cart', command: () => {
          this.router.navigate(['/ativo'])
        }
      },
      {
        label: 'Relatório Venda', icon: 'pi pi-fw pi-book', command: () => {
          this.router.navigate(['/relatorio'])
        }
      },
      { label: 'Gráfico', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
    this.activeItem = this.items[0];
  }


}
