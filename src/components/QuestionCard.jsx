import React from 'react';

export default function QuestionCard({ data, onSelect, selected, showAnswer }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">{data.question}</h2>
      <ul className="space-y-2">
        {data.options.map((opt, index) => {
          let style = 'cursor-pointer p-2 border rounded';
          if (showAnswer) {
            if (index === data.correctIndex) style += ' bg-green-300';
            else if (index === selected) style += ' bg-red-300';
          } else if (index === selected) {
            style += ' bg-gray-200';
          }

          return (
            <li key={index} className={style} onClick={() => onSelect(index)}>
              {String.fromCharCode(65 + index)}. {opt}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
