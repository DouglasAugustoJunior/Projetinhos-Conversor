import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  testaConexao = () => this.http.get(this.url,{ responseType: 'text' })
  bin2dec = (valor:number) => this.http.post(`${this.url}/bin2dec`, { valor })
  dec2bin = (valor:number) => this.http.post(`${this.url}/dec2bin`, { valor })
  bin2hex = (valor:number) => this.http.post(`${this.url}/bin2hex`, { valor })
}
