import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css']
})
export class DataViewerComponent implements OnInit {

  items: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiService.getItems().subscribe(
      data => this.items = data,
      error => console.error(error)
    );
  }

  addItem(newItem: any): void {
    this.apiService.addItem(newItem).subscribe(
      data => this.items.push(data),
      error => console.error(error)
    );
  }

  updateItem(id: number, updatedItem: any): void {
    this.apiService.updateItem(id, updatedItem).subscribe(
      data => {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
          this.items[index] = data;
        }
      },
      error => console.error(error)
    );
  }

  deleteItem(id: number): void {
    this.apiService.deleteItem(id).subscribe(
      () => {
        this.items = this.items.filter(item => item.id !== id);
      },
      error => console.error(error)
    );
  }
}
