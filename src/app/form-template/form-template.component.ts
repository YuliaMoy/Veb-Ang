import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  formData: any = {};
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.formData = form.value;
    }
  }
}
