'use client';

import { QuizProvider } from '@/contexts/QuizContext';
import { QuizContent } from './QuizContent';

export default function QuizPage() {
  return (
    <QuizProvider>
      <main className="min-h-screen bg-background p-8">
        <QuizContent />
      </main>
    </QuizProvider>
  );
}