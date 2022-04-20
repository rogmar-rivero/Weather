import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template: ` 
  <div class="search" >
    <input class="search__input" placeholder="City..." [formControl]="inputSearch">
  </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()Submitted = new EventEmitter<string>();

  inputSearch = new FormControl('');

  ngOnInit(): void {
  this.onChange();
  }

  private onChange() {
    this.inputSearch.valueChanges
    .pipe(
      map((search)=> search.trim()),
      debounceTime(850),
      distinctUntilChanged(),
      filter(search => search !== ''),
      tap((search)=> this.Submitted.emit(search))
    )
    .subscribe();
  }
}