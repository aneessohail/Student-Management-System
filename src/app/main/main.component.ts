import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  userform: FormGroup; // Use FormGroup

  constructor(private router: Router, private toast: ToastrService, private fb: FormBuilder, private data: DataService) {
    this.userform = fb.group({
      firstname: ['', [Validators.required]], // Add Validators.required for required field
      lastname: ['', [Validators.required]], // Add Validators.required for required field
      email: ['', [Validators.required, Validators.email]], // Add Validators.email for email format
      mobile: ['', [Validators.required]], // Add Validators.required for required field
      semester: ['', [Validators.required]], // Add Validators.required for required field
    });
  }

  back() {
    this.router.navigate(['/dashboard']);
  }

  submit() {
    if (this.userform.valid) {
      console.log(this.userform.value);
      this.data.adduser(this.userform.value).subscribe(data => {
        console.log(data);
        this.toast.success("Data is added Successfully");
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.toast.error("Please fill in all required fields correctly and completely.", "Error"); // Display a validation error message
    }
  }
}
