import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTerm = new BehaviorSubject<string>("");
  currentTerm = this.searchTerm.asObservable();
  updateCurrentTerm(Term: string):void{
    this.searchTerm.next(Term);
  }
}
