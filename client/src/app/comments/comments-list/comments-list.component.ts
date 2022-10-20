import { Component, OnInit,Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() post_id
  isListEmpty:Boolean=true;
  commentList=[]
  limit=2;
  showComments:Boolean=false;
  constructor(private commentsService:CommentService) { }

  ngOnInit(): void {
  }
  show(){
      this.showComments=!this.showComments;
      this.commentsService.list(this.limit,this.post_id).subscribe(resp => {
        //   this._snackBar.openSnackBar('User Created.', 'X');
             this.commentList=JSON.parse(resp['commentsList']);
             console.log(this.commentList);
             if(this.commentList.length != 0) {
              this.isListEmpty = false;
            } else {
              this.isListEmpty = true;
            }
           }, err => {
            this.isListEmpty = true;
        //   this._snackBar.openSnackBar(err.error.error, 'X')
        
         });
  }
   showMore(){
    this.limit=this.limit+2;
    this.commentsService.list(this.limit,this.post_id).subscribe(resp => {
      //   this._snackBar.openSnackBar('User Created.', 'X');
           this.commentList=JSON.parse(resp['commentsList']);
           console.log(this.commentList);
           if(this.commentList.length != 0) {
            this.isListEmpty = false;
          } else {
            this.isListEmpty = true;
          }
         }, err => {
          this.isListEmpty = true;
      //   this._snackBar.openSnackBar(err.error.error, 'X')
      
       });

   }
}