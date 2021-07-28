import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedLavInfo } from './med-lav-info';

@Injectable({
  providedIn: 'root'
})
export class MedLavService {

  private apiUrl: string = 'https://60c8ea647dafc90017ffbcea.mockapi.io/richiesteMl';

  constructor(private http: HttpClient) { }

  postRichiestaMedLav(mdInfo: MedLavInfo) {
    return this.http.post<MedLavInfo>(this.apiUrl, mdInfo);
  }
}
