export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface DragDropPair {
  id: string;
  statement: string;
  answer: string;
}

export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'dragdrop';
  options?: Option[];
  pairs?: DragDropPair[];
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<string, string[]>;
  dragDropAnswers: Record<string, Record<string, string>>;
  isComplete: boolean;
}

export interface QuizContextType {
  state: QuizState;
  setAnswer: (questionId: string, selectedOptions: string[]) => void;
  setDragDropAnswer: (questionId: string, statementId: string, answerId: string) => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
}