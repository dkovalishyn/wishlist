import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FriendsService } from '../../services/friends.service';
import { State } from '../../../../store/reducer';
import { Store } from '@ngrx/store';
import { Search } from '../../store/actions/search';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchField = new FormControl('');
  searchTimeout: NodeJS.Timer;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.searchField.valueChanges.subscribe(this.searchByTimeout);
  }

  searchByTimeout = () => {
    console.log(this.searchTimeout);
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(this.search, 1000);
  }

  search = () => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.store.dispatch(new Search({ fullName: this.searchField.value }));
  }

}
