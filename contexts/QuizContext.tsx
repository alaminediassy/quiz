'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { Question, QuizState, QuizContextType } from '@/lib/types';
import { questions } from '@/lib/questions';

const initialState: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: {},
  dragDropAnswers: {},
  isComplete: false,
};

type Action =
  | { type: 'SET_ANSWER'; payload: { questionId: string; selectedOptions: string[] } }
  | { type: 'SET_DRAGDROP_ANSWER'; payload: { questionId: string; statementId: string; answerId: string } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESTART' };

function quizReducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.selectedOptions,
        },
      };
    case 'SET_DRAGDROP_ANSWER':
      return {
        ...state,
        dragDropAnswers: {
          ...state.dragDropAnswers,
          [action.payload.questionId]: {
            ...state.dragDropAnswers[action.payload.questionId],
            [action.payload.statementId]: action.payload.answerId,
          },
        },
      };
    case 'NEXT_QUESTION':
      const currentQuestion = questions[state.currentQuestionIndex];
      let isCorrect = false;
      
      if (currentQuestion.type === 'dragdrop') {
        const currentAnswers = state.dragDropAnswers[currentQuestion.id] || {};
        isCorrect = currentQuestion.pairs?.every(
          pair => currentAnswers[pair.id] === pair.answer
        ) || false;
      } else {
        const selectedAnswers = state.answers[currentQuestion.id] || [];
        const correctAnswers = currentQuestion.options
          ?.filter(option => option.isCorrect)
          .map(option => option.id) || [];

        isCorrect =
          selectedAnswers.length === correctAnswers.length &&
          selectedAnswers.every(answer => correctAnswers.includes(answer));
      }

      const scoreChange = isCorrect ? 1 : -0.5;
      const newScore = Math.max(0, state.score + scoreChange);

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        score: newScore,
        isComplete: state.currentQuestionIndex === questions.length - 1,
      };
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
}

const QuizContext = createContext<QuizContextType | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const setAnswer = (questionId: string, selectedOptions: string[]) => {
    dispatch({ type: 'SET_ANSWER', payload: { questionId, selectedOptions } });
  };

  const setDragDropAnswer = (questionId: string, statementId: string, answerId: string) => {
    dispatch({ type: 'SET_DRAGDROP_ANSWER', payload: { questionId, statementId, answerId } });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const restartQuiz = () => {
    dispatch({ type: 'RESTART' });
  };

  return (
    <QuizContext.Provider value={{ state, setAnswer, setDragDropAnswer, nextQuestion, restartQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}