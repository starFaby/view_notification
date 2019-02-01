import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  faby = 'faby y lynna';
  respuesta = 'Aqui va la respuesta';
  constructor(private http: Http) { }

  ngOnInit() {
    this.getWebService();
   // this.getWebServiceString();
  }
  getWebService() {
    this.http.get('http://localhost:8000/').toPromise().then( r => {
      this.respuesta = r.json();
      console.log(this.respuesta);
    }).catch( e => console.log(e) );
  }
 /* getWebServiceString() {
    this.http.get('http://localhost:8000/notifications').toPromise().then( r => {
      this.faby = r.json();
      console.log(this.faby);
    }).catch( e => console.log(e) );
  }
  */

}
