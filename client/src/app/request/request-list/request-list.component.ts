import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  requestList=[]
   isListEmpty:Boolean=true;
   displayedCols = ['fname', 'Lname', 'email','accept','reject'];
  constructor(private requestService:RequestService) {
    this.requestService.List().subscribe(resp => {
      //   this._snackBar.openSnackBar('User Created.', 'X');
           this.requestList=JSON.parse(resp['requestList']);
           console.log(this.requestList);
           if(this.requestList.length != 0) {
            this.isListEmpty = false;
          } else {
            this.isListEmpty = true;
          }
         }, err => {
          this.isListEmpty = true;
      //   this._snackBar.openSnackBar(err.error.error, 'X')
      
       });
   }


  ngOnInit(): void {
  }


}