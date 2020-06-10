import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  filter,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { AuthenticationService } from '../signingService/authenitcation.service';
import { fromEvent } from 'rxjs';
import { MovieSService } from '../MovieServices/movies.service';
import { Movie } from '../@core/models';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  totalCount = 0;
  showModal = false;
  @ViewChild('searchInputElement')
  searchInputElement: ElementRef<HTMLInputElement>;
  defaultImage =
    'https://www.thebristolarms.com.au/wp-content/uploads/2018/03/img-not-found.png';
  sortBy: string;
  searchTerm: string;
  pageNumber = 0;
  pageSize = 5;

  sortByFeild = [
    { label: 'Name', value: 'name' },
    { label: 'Id', value: '_id' },
    { label: 'image_Url', value: 'imgUrl' },
  ];
  movies: Movie[];
  constructor(
    private _movieService: MovieSService,
    private _authenticationService: AuthenticationService
  ) {}
  isAuthorized: boolean;
  isAdmin$ = this._authenticationService.isAuthorized();

  ngOnInit(): void {
    this._movieService
      .ListMovies(this.sortBy, this.searchTerm, this.pageSize, this.pageNumber)
      .subscribe(({ movies, count }) => {
        this.movies = movies;
        this.totalCount = count;
      });
  }

  ngAfterViewInit() {
    fromEvent(this.searchInputElement.nativeElement, 'input')
      .pipe(
        map((res) => (res.target as HTMLInputElement).value.trim()),
        filter((res) => res.length > 0),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchText) => {
        this.searchTerm = searchText;
        this.loadMovies(this.sortBy, this.searchTerm);
        console.log(this.searchTerm);
      });
  }
  togglleModalVisibilty() {
    this.showModal = !this.showModal;
  }
  moveieIdToRemove;
  onRemoveMovie(movieId: string) {
    this.togglleModalVisibilty();
    if (confirm) {
      this._movieService.removeMovie(movieId).subscribe(
        (deletedMovie: Movie) => {
          this.loadMovies(this.sortBy, this.searchTerm);
        },
        (err) => {
          alert('Some Thing Went Wrong!!');
        }
      );
    }
  }
  loadMovies(sortBy: string, searchTerm: string) {
    this._movieService
      .ListMovies(sortBy, searchTerm, this.pageSize, this.pageNumber)
      .subscribe(({ movies, count }) => {
        this.movies = movies;
      }),
      (err) => {
        alert('Some thing Went Wrong ..!! ');
      };
  }

  setSortBy(value: string) {
    this.sortBy = value;
    this.loadMovies(this.sortBy, this.searchTerm);
  }
  setSearchTerm(search: string) {
    this.searchTerm = search;
    this.loadMovies(this.sortBy, this.searchTerm);
  }

  trimiming(text: string) {
    const res = text
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n +/, '\n');

    this.searchTerm = res;
    return;
  }
  onChangePageNumber(pageNumber: number) {
    this.pageNumber = pageNumber - 1;
    this._movieService
      .ListMovies(this.sortBy, this.searchTerm, this.pageSize, this.pageNumber)
      .subscribe((val) => {
        this.movies = val.movies;
      });
  }
}
