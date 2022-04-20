import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div *ngIf="isLoading$ | async" class="overlay">
    <div class='loader loader3'>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$ = this.spinnerSvc.isLoading$;
  constructor(private spinnerSvc: SpinnerService) { }
}
