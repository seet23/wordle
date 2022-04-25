import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  private BASE_URL: string = "http://192.168.3.100:8080"
  private CHOOSEN_WORD: string = "/chooseWord";
  private VALID_WORD: string = "/checkValidWord?word=";
  private GET_HINTS: string = "/hints?word=";
  private SCRAMBLE_WORD: string = "/scrambledHint?word";


  getChosenWord() {
    return this.http.get<any>(this.BASE_URL + this.CHOOSEN_WORD);
  }

  checkValidWord(inputWord: any) {
    return this.http.get<any>(this.BASE_URL + this.VALID_WORD + inputWord);
  }

  getHint(chosenWord: any) {
    return this.http.get<any>(this.BASE_URL + this.GET_HINTS + chosenWord);
  }
  scrambleWord(chosenWord: any) {
    return this.http.get<any>(this.BASE_URL + this.SCRAMBLE_WORD + chosenWord);

  }

}
