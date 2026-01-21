import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
  institutionName: string;
}

export default function Quiz({ questions, institutionName }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { text: 'Perfekt! Je ekspert i vërtetë!', color: 'text-green-600', emoji: '🎉' };
    if (percentage >= 70) return { text: 'Shkëlqyer! E ke kuptuar shumë mirë!', color: 'text-green-600', emoji: '👏' };
    if (percentage >= 50) return { text: 'Mirë! Por ka vend për përmirësim.', color: 'text-yellow-600', emoji: '📚' };
    return { text: 'Duhet të rishikosh materialin.', color: 'text-red-600', emoji: '💪' };
  };

  if (completed) {
    const scoreMsg = getScoreMessage();
    return (
      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">{scoreMsg.emoji}</div>
          <h3 className="text-3xl font-bold text-blue-900 mb-2">Kuizi Përfundoi!</h3>
          <p className={`text-xl ${scoreMsg.color} font-semibold mb-4`}>
            {scoreMsg.text}
          </p>
          <div className="text-5xl font-bold text-blue-900 mb-2">
            {score} / {questions.length}
          </div>
          <p className="text-gray-600">Përgjigje të sakta</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {questions.map((q, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                index < score ? 'border-green-500 bg-green-50' : 'border-red-300 bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {index < score ? (
                  <CheckCircle2 className="text-green-600" size={20} />
                ) : (
                  <XCircle className="text-red-600" size={20} />
                )}
                <span className="font-semibold text-sm">Pyetja {index + 1}</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{q.question}</p>
            </div>
          ))}
        </div>

        <button
          onClick={resetQuiz}
          className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} />
          Provo Përsëri
        </button>

        <div className="mt-6 bg-blue-50 p-6 rounded-xl">
          <h4 className="font-bold text-lg text-blue-900 mb-2">Doje të mësosh më shumë?</h4>
          <p className="text-sm text-gray-700">
            Lexo përsëri seksionin për {institutionName} për të kuptuar më mirë detajet që ke humbur.
          </p>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">
            Pyetja {currentQuestion + 1} nga {questions.length}
          </span>
          <span className="text-sm font-semibold text-blue-900">
            Rezultati: {score} / {currentQuestion + (selectedAnswer !== null ? 1 : 0)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-900 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-900 mb-6">{currentQ.question}</h3>

      <div className="space-y-3 mb-6">
        {currentQ.options.map((option, index) => {
          let buttonClass = 'w-full p-4 rounded-lg text-left font-semibold transition border-2 ';

          if (selectedAnswer === null) {
            buttonClass += 'border-gray-300 hover:border-blue-500 hover:bg-blue-50';
          } else if (index === currentQ.correct) {
            buttonClass += 'border-green-500 bg-green-50 text-green-900';
          } else if (index === selectedAnswer) {
            buttonClass += 'border-red-500 bg-red-50 text-red-900';
          } else {
            buttonClass += 'border-gray-300 bg-gray-50 opacity-50';
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer !== null && index === currentQ.correct && (
                  <CheckCircle2 className="text-green-600" size={24} />
                )}
                {selectedAnswer === index && index !== currentQ.correct && (
                  <XCircle className="text-red-600" size={24} />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div
          className={`p-6 rounded-xl mb-6 ${
            selectedAnswer === currentQ.correct
              ? 'bg-green-50 border-l-4 border-green-500'
              : 'bg-red-50 border-l-4 border-red-500'
          }`}
        >
          <div className="flex items-start gap-3">
            {selectedAnswer === currentQ.correct ? (
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
            ) : (
              <XCircle className="text-red-600 flex-shrink-0" size={24} />
            )}
            <div>
              <h4 className="font-bold text-lg mb-2">
                {selectedAnswer === currentQ.correct ? 'Saktë!' : 'Gabim!'}
              </h4>
              <p className="text-gray-700">{currentQ.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={nextQuestion}
          className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {currentQuestion < questions.length - 1 ? 'Pyetja Tjetër →' : 'Shiko Rezultatet'}
        </button>
      )}
    </div>
  );
}
