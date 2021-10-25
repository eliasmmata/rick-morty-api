import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner = false;

  constructor(private spinnerService:SpinnerService, private cdRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status:any) => {
      this.showSpinner = status === 'start';
      this.cdRef.detectChanges();
    });
  }

}
