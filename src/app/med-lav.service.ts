import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedLavInfo } from './med-lav-info';

@Injectable({
  providedIn: 'root'
})
export class MedLavService {

  private apiUrl: string = 'https://60c8ea647dafc90017ffbcea.mockapi.io/richiesteMl/';

  constructor(private http: HttpClient) { }

  postRichiestaMedLav(mdInfo: MedLavInfo) {
    return this.http.post<MedLavInfo>(this.apiUrl, mdInfo);
  }

  getRichiesteMedLav() : Observable<MedLavInfo[]> {
    return this.http.get<MedLavInfo[]>(this.apiUrl);
  }

  deleteRichiestaMedLav( id : number ) {
    return this.http.delete<MedLavInfo>(this.apiUrl + id);
  }
}
