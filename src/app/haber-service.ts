import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HaberService {
  api_key = "f02c66ecc00a40479536012af935e5f5";

  constructor(private http: HttpClient) { }



  haberleriGetir() {
    return this.http.get(
      "http://newsapi.org/v2/top-headlines?country=tr&apiKey=" + this.api_key
    );
  }
}
