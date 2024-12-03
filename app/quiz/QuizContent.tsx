'use client';

import React from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuestionCard } from '@/components/QuestionCard';
import { QuizProgress } from '@/components/QuizProgress';
import { questions } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function QuizContent() {
  const { state, restartQuiz } = useQuiz();
  const router = useRouter();

  if (state.isComplete) {
    const percentage = (state.score / questions.length) * 100;
    let message = '';
    
    if (percentage >= 80) {
      message = 'Outstanding performance! You\'re a quiz master! 🏆';
    } else if (percentage >= 60) {
      message = 'Great job! You\'ve done well! 🌟';
    } else if (percentage >= 40) {
      message = 'Good effort! Keep practicing! 💪';
    } else {
      message = 'Don\'t give up! Every attempt is a learning opportunity! 📚';
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Quiz Complete!</h2>
        <p className="text-2xl mb-4">Your Score: {state.score} / {questions.length}</p>
        <p className="text-xl text-muted-foreground mb-8">{message}</p>
        <div className="space-x-4">
          <Button onClick={restartQuiz} size="lg">
            Try Again
          </Button>
          <Button onClick={() => router.push('/')} variant="outline" size="lg">
            Back to Home
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <QuizProgress />
      <AnimatePresence mode="wait">
        <QuestionCard key={state.currentQuestionIndex} question={questions[state.currentQuestionIndex]} />
      </AnimatePresence>
    </>
  );
}