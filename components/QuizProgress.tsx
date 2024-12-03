'use client';

import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useQuiz } from '@/contexts/QuizContext';
import { questions } from '@/lib/questions';

export function QuizProgress() {
  const { state } = useQuiz();
  const progress = (state.currentQuestionIndex / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
        <span>Question {state.currentQuestionIndex + 1} of {questions.length}</span>
        <span>Score: {state.score}</span>
      </div>
    </div>
  );
}