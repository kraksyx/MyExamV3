import React, { useState } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';

export default function App() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    setShowAnswer(true);
    if (index === questions[current].correctIndex) {
      setTimeout(() => {
        setCurrent((prev) => Math.min(prev + 1, questions.length - 1));
        setSelected(null);
        setShowAnswer(false);
      }, 800);
    }
  };

  const handleNav = (dir) => {
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0 || next >= questions.length) return prev;
      return next;
    });
    setSelected(null);
    setShowAnswer(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <QuestionCard
        data={questions[current]}
        onSelect={handleSelect}
        selected={selected}
        showAnswer={showAnswer}
      />
      <div className="mt-4 space-x-4">
        <button onClick={() => handleNav(-1)}>Previous</button>
        <button onClick={() => handleNav(1)}>Next</button>
      </div>
    </div>
  );
}
