import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.apiService.addItem(this.form.value).subscribe(
        (response: any) => { // Вказуємо тип параметра response
          console.log('Data sent successfully!', response);
          // Очистити форму
          this.form.reset();
          this.submitted = false;
        },
        (error: any) => {
          console.error('Error sending data:', error);
        }
      );
    }
  }
}
