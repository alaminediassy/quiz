'use client';

import React, { useState } from 'react';
import { Question } from '@/lib/types';
import { useQuiz } from '@/contexts/QuizContext';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { DragDropQuestion } from './DragDropQuestion';
import { useToast } from '@/hooks/use-toast';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const { state, setAnswer, setDragDropAnswer, nextQuestion } = useQuiz();
  const { toast } = useToast();
  const [hasAnswered, setHasAnswered] = useState(false);
  const selectedAnswers = state.answers[question.id] || [];
  const dragDropAnswers = state.dragDropAnswers[question.id] || {};

  const handleSingleChoice = (optionId: string) => {
    setAnswer(question.id, [optionId]);
    setHasAnswered(true);
  };

  const handleMultipleChoice = (optionId: string) => {
    const newSelection = selectedAnswers.includes(optionId)
      ? selectedAnswers.filter(id => id !== optionId)
      : [...selectedAnswers, optionId];
    setAnswer(question.id, newSelection);
    setHasAnswered(true);
  };

  const handleDragDropAnswer = (statementId: string, answerId: string) => {
    setDragDropAnswer(question.id, statementId, answerId);
    // Check if all pairs are matched after this answer
    const updatedAnswers = { ...dragDropAnswers, [statementId]: answerId };
    if (question.pairs?.every(pair => updatedAnswers[pair.id])) {
      setHasAnswered(true);
    }
  };

  const isNextButtonDisabled = () => {
    if (!hasAnswered) return true;
    
    if (question.type === 'dragdrop') {
      return !question.pairs?.every(pair => dragDropAnswers[pair.id]);
    }
    return selectedAnswers.length === 0;
  };

  const handleNext = () => {
    let isCorrect = false;
    let correctAnswer = '';

    if (question.type === 'dragdrop') {
      const allCorrect = question.pairs?.every(
        pair => dragDropAnswers[pair.id] === pair.answer
      );
      isCorrect = allCorrect;
      if (!isCorrect) {
        correctAnswer = question.pairs?.map(
          pair => `${pair.statement} → ${pair.answer}`
        ).join('\n') || '';
      }
    } else {
      const correctAnswers = question.options?.filter(opt => opt.isCorrect).map(opt => opt.id) || [];
      isCorrect = selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every(answer => correctAnswers.includes(answer));
      if (!isCorrect) {
        correctAnswer = question.options?.filter(opt => opt.isCorrect)
          .map(opt => opt.text)
          .join(', ') || '';
      }
    }

    toast({
      title: isCorrect ? "Correct! 🎉" : "Not quite right 😅",
      description: isCorrect 
        ? "Great job! Keep up the good work!"
        : `The correct answer was:\n${correctAnswer}`,
      variant: isCorrect ? "default" : "destructive",
      duration: 3000,
    });

    setTimeout(() => {
      nextQuestion();
      setHasAnswered(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>

      <div className="space-y-4">
        {question.type === 'dragdrop' && question.pairs ? (
          <DragDropQuestion
            pairs={question.pairs}
            onAnswer={handleDragDropAnswer}
            currentAnswers={dragDropAnswers}
          />
        ) : question.type === 'single' ? (
          <RadioGroup
            value={selectedAnswers[0]}
            onValueChange={handleSingleChoice}
            className="space-y-3"
          >
            {question.options?.map(option => (
              <div key={option.id} className="flex items-center space-x-3">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-3">
            {question.options?.map(option => (
              <div key={option.id} className="flex items-center space-x-3">
                <Checkbox
                  id={option.id}
                  checked={selectedAnswers.includes(option.id)}
                  onCheckedChange={() => handleMultipleChoice(option.id)}
                />
                <Label htmlFor={option.id}>{option.text}</Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <Button
          onClick={handleNext}
          disabled={isNextButtonDisabled()}
          className="w-full"
        >
          Next Question
        </Button>
      </div>
    </motion.div>
  );
}