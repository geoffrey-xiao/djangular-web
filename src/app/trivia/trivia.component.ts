import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Answer, Question, TriviaService } from './trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
})
export class TriviaComponent implements OnInit {
  triviaData: Question[] = [];

  question: Question | null = null;

  answer: Answer | undefined = undefined;

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.getTrivia();
  }

  getTrivia() {
    this.triviaService.getTrivia().subscribe((res) => {
      console.log(res);
      this.triviaData = res;
      this.getNextQuestion();
    });
  }

  getCorrectAnswer() {
    if (this.question) {
      return this.question.answers.find((answer) => answer.is_correct);
    }

    return '';
  }

  getNextQuestion() {
    if (this.triviaData.length) {
      const index = Math.floor(Math.random() * this.triviaData.length);
      this.question = this.triviaData[index];
      this.triviaData.splice(index, 1);
    } else {
      this.question = null;
    }
  }
}
