import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

// Definition of the Google's BookItem Record (only neccessary parts)
export interface IBookItem {
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    authors?: Array<string>;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: Array<{type: string; identifier: string}>;
    pageCount: number;
  }

  // Custom Stuff
  inCart?: boolean,
};

@Injectable()
export class BookService {

  // The API's url
  private API_URL: string = 'https://www.googleapis.com/books/v1/';

  constructor( private http: Http ) {
    
  }

  /**
   * get Book by it's Id
   * 
   * @param id string
   * @returns Promise<IBookItem[]>
   */
  getBookById(id: string): Promise<IBookItem[]> {
    return new Promise( (resolve, reject) => {
        this.http.get(this.API_URL + "volumes/" + id).subscribe(
          (response) => {
            resolve([response.json()]);
          },
          (error) => {
            console.log(error);
            resolve([]);
          },
        )
    });
    
  }

  /**
   * get Books with search quilting
   * 
   * @param query string
   * @returns Promise<IBookItem[]>
   */
  getBooks(query: string): Promise<IBookItem[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', query);

    let requestOptions = new RequestOptions();
    requestOptions.params = params;

    return new Promise( (resolve, reject ) => {
      this.http.get(this.API_URL + "volumes", requestOptions).subscribe(
        (response) => {
          resolve(response.json().items);
        },
        (error) => {
          resolve([]);
        },
      )
    });
  }

}
