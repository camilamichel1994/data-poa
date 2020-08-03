import { Component, OnInit, } from '@angular/core';
import { Bus } from '../../model/bus.model'
import { BusService } from '../../services/bus.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {

  data: Bus[] = [];
  filteredData: Bus[] = [];
  filterCode: String = '';
  filterName: String = '';
  isLoading: Boolean = false;
  hasError: Boolean = false;

  p: Number = 1 ;
  contador: Number = 10;

  constructor(
    private busService: BusService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.busService.findBus().subscribe(response => {
      this.data = response
      this.isLoading = false;
    },
    error => {
      this.isLoading = false;
      this.hasError = true;
    });
  }

  search(): void {
    const result = this.data.filter(bus => bus.codigo.toUpperCase().includes(this.filterCode.toUpperCase()) && bus.nome.toUpperCase().includes(this.filterName.toUpperCase()));
    this.filteredData = result;
  }

  clear(): void {
    this.filteredData = [];
    this.filterCode = '';
    this.filterName = '';
  }

  getItinerary(id: String): void {
    this.router.navigateByUrl(`/${id}`);
  }
}
