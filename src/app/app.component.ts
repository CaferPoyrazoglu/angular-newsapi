import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { HaberService } from "./haber-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  haberler: Observable<any>;

  constructor(private api: HaberService) { }

  ngOnInit() {
    this.haberler = this.api.haberleriGetir();
  }
}
