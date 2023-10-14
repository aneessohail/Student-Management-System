import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../data.service';
import{ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:any
  ngOnInit(): void {
this.getusers()
  }
constructor(private auth:AuthService,private data :DataService,private toast:ToastrService){}
logout(){
  this.auth.logout();
}

getusers(){
  this.data.getusers().subscribe((data)=>{
    return this.users=data;
  })
}

deleteusers(ID:any){
  if(window.confirm("Are you sure u want to delete this ?"))
  	this.data.deleteusers(ID).subscribe(data=>{
    this.getusers();
    this.toast.error("The data is deleted","Error")

  })
}

selectedUser: any;

editUser(user: any) {
  this.selectedUser = { ...user };
}
updateUser() {
  if (this.selectedUser) {
    // Call the update function from your DataService to send an HTTP request.
    this.data.updateUser(this.selectedUser).subscribe(() => {
      this.getusers(); // Refresh the user list after updating
      this.toast.success('User updated successfully', 'Success');
      this.selectedUser = null; // Reset the selected user
    });
  }
}


}
