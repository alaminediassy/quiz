'use client';

import React, { useState } from 'react';
import { DragDropPair } from '@/lib/types';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DragDropQuestionProps {
  pairs: DragDropPair[];
  onAnswer: (statementId: string, answerId: string) => void;
  currentAnswers: Record<string, string>;
}

export function DragDropQuestion({ pairs, onAnswer, currentAnswers }: DragDropQuestionProps) {
  const [answers] = useState(() => 
    pairs.map(p => p.answer).sort(() => Math.random() - 0.5)
  );
  const [selectedStatement, setSelectedStatement] = useState<string | null>(null);

  const handleStatementClick = (pairId: string) => {
    if (currentAnswers[pairId]) return; // If already answered, do nothing
    setSelectedStatement(pairId);
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedStatement && !Object.values(currentAnswers).includes(answer)) {
      onAnswer(selectedStatement, answer);
      setSelectedStatement(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-semibold mb-4">Statements</h3>
        {pairs.map((pair) => (
          <motion.div
            key={pair.id}
            className={cn(
              "p-4 bg-card border rounded-lg transition-colors cursor-pointer",
              currentAnswers[pair.id] ? "border-primary" : "border-border",
              selectedStatement === pair.id && "ring-2 ring-primary"
            )}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleStatementClick(pair.id)}
          >
            {pair.statement}
            {currentAnswers[pair.id] && (
              <div className="mt-2 text-sm text-primary">
                ↳ {currentAnswers[pair.id]}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold mb-4">Answers</h3>
        <div className="space-y-2">
          {answers.map((answer) => (
            <motion.div
              key={answer}
              className={cn(
                "p-4 bg-card border rounded-lg transition-colors",
                Object.values(currentAnswers).includes(answer) 
                  ? "opacity-50 cursor-not-allowed" 
                  : selectedStatement 
                    ? "cursor-pointer hover:border-primary" 
                    : "cursor-not-allowed",
                Object.values(currentAnswers).includes(answer) && "border-muted"
              )}
              whileHover={!Object.values(currentAnswers).includes(answer) && selectedStatement ? { scale: 1.02 } : {}}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}