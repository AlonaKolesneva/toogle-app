import { Component } from "@angular/core";
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "sidenav-overview-example",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SideNavComponent  {
  fileIcon = faFileAlt;

  constructor(private http: HttpClient) {}

  getTimers() {
    this.http
      .post("http://localhost:3000/api/timers", {})
      .subscribe((response: any) => {
        console.log(response);
      });
  }

}
