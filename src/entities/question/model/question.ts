interface IQuestion {
  id: number;
  name: string;
  answerIds: number[];
  correctAnswer: number | string;
}

export type {IQuestion};
