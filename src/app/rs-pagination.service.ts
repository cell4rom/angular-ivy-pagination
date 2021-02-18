import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const searchQuery = 'https://api.themoviedb.org/3/search/movie';
const api_key = '2ea07336a16963c373813aa61c2a76a5';

const searchQuery2 = 'https://reqres.in';

@Injectable({
  providedIn: 'root'
})
export class RsPaginationService {

  constructor(private httpClient: HttpClient) { }

  public restUri = "/api/users"
  //api/users?page=12&per_page=1
    searchForMovie(name: string, page: number = 1){
      //If no page is provided default the first will be taken
      return this.httpClient.get<any>(searchQuery, {
        params: {
          query: name,
          page: page.toString(),
          api_key: api_key
        }
      }).toPromise();
    }

    searchForMovieByObservable1(per_page: string){
      //If no page is provided default the first will be taken
      return this.httpClient.get<any>(searchQuery2+this.restUri, {
        params: {
          per_page: per_page
        }
      });
    }

    searchForMovieByObservable2(page: string, per_page: string){
      //If no page is provided default the first will be taken
      return this.httpClient.get<any>(searchQuery2+this.restUri, {
        params: {
          page: page,
          per_page: per_page
        }
      });
    }

    searchForMovieByObservable(name: string, page: number = 1){
      //If no page is provided default the first will be taken
      return this.httpClient.get<any>(searchQuery, {
        params: {
          query: name,
          page: page.toString(),
          api_key: api_key
        }
      });
    }

}
