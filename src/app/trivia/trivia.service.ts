import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Answer {
  answer: string;
  is_correct: boolean;
}

interface AnswerArray extends Array<Answer> {}

export interface Question {
  question: string;
  category: string;
  answers: AnswerArray;
}

interface QuestionArray extends Array<Question> {}

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor(private http: HttpClient) {}

  getTrivia(): Observable<QuestionArray> {
    return this.http.get(
      'http://127.0.0.1:8000/api/v1/questions/'
    ) as Observable<QuestionArray>;
  }
}
