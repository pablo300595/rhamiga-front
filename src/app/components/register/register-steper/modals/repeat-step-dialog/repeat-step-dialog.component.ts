import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-repeat-step-dialog',
  templateUrl: './repeat-step-dialog.component.html',
  styleUrls: ['./repeat-step-dialog.component.sass']
})
export class RepeatStepDialogComponent {

  constructor(public dialogRef: MatDialogRef<RepeatStepDialogComponent>,    
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    close(): void {
      this.dialogRef.close();
    }
  
}
