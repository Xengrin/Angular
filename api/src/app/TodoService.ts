import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TodoService {
    handleError: any;
constructor(private http: Http) {
this.http = http;
}
getTodos() {
return this.http.get('/app/todos.json')
.toPromise()
.then(response => response.json().data)
.catch(this.handleError);
}
}
