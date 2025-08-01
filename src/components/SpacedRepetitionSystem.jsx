import React, { useState, useEffect } from 'react';
import {
  RotateCcw, Clock, Brain, TrendingUp, CheckCircle, X,
  Volume2, Star, ChevronLeft, ChevronRight, Target,
  Calendar, Award, Zap, Eye, EyeOff
} from 'lucide-react';

const SpacedRepetitionSystem = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, review, stats
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    reviewed: 0,
    correct: 0,
    timeSpent: 0
  });
  const [sessionStartTime, setSessionStartTime] = useState(null);

  // Mock spaced repetition cards with different content types
  const reviewCards = [
    {
      id: 1,
      front_content: "buenos días",
      back_content: "good morning",
      content_type: "vocabulary",
      cefr_level: "A1",
      difficulty_factor: 2.1,
      interval_days: 3,
      next_review_date: "2025-07-29",
      mastery_level: 2,
      repetition_count: 4,
      last_correct: true,
      context: "Common greeting used until noon",
      example: "¡Buenos días! ¿Cómo está usted?",
      pronunciation: "/ˈbwe.nos ˈdi.as/",
      audio_url: "/audio/buenos-dias.mp3"
    },
    {
      id: 2,
      front_content: "What's the past tense of 'hacer' (to do/make)?",
      back_content: "hice, hiciste, hizo, hicimos, hicisteis, hicieron",
      content_type: "grammar",
      cefr_level: "A2",
      difficulty_factor: 2.8,
      interval_days: 1,
      next_review_date: "2025-07-29",
      mastery_level: 1,
      repetition_count: 2,
      last_correct: false,
      context: "Irregular preterite conjugation",
      example: "Ayer hice la tarea. (Yesterday I did the homework.)"
    },
    {
      id: 3,
      front_content: "¿Dónde está el baño?",
      back_content: "Where is the bathroom?",
      content_type: "phrase",
      cefr_level: "A1",
      difficulty_factor: 1.9,
      interval_days: 7,
      next_review_date: "2025-07-29",
      mastery_level: 3,
      repetition_count: 6,
      last_correct: true,
      context: "Essential travel phrase",
      example: "Disculpe, ¿dónde está el baño?",
      pronunciation: "/ˈdon.de esˈta el ˈba.ɲo/"
    },
    {
      id: 4,
      front_content: "trabajar",
      back_content: "to work",
      content_type: "vocabulary",
      cefr_level: "A1",
      difficulty_factor: 2.3,
      interval_days: 2,
      next_review_date: "2025-07-29",
      mastery_level: 2,
      repetition_count: 3,
      last_correct: true,
      context: "Regular -ar verb",
      example: "Ella trabaja en una oficina.",
      pronunciation: "/tra.ba.ˈxar/"
    },
    {
      id: 5,
      front_content: "How do you pronounce 'rr' in Spanish?",
      back_content: "A rolled or trilled R sound made by vibrating the tongue tip against the alveolar ridge",
      content_type: "pronunciation",
      cefr_level: "A2",
      difficulty_factor: 3.2,
      interval_days: 1,
      next_review_date: "2025-07-29",
      mastery_level: 0,
      repetition_count: 1,
      last_correct: false,
      context: "Difficult sound for English speakers",
      example: "perro (dog), carro (car), ferrocarril (railroad)"
    }
  ];

  const [cards, setCards] = useState(reviewCards);
  const currentCard = cards[currentCardIndex];

  // Review history data for analytics
  const reviewHistory = [
    { date: '2025-07-28', reviewed: 8, accuracy: 87 },
    { date: '2025-07-27', reviewed: 12, accuracy: 92 },
    { date: '2025-07-26', reviewed: 6, accuracy: 83 },
    { date: '2025-07-25', reviewed: 15, accuracy: 89 },
    { date: '2025-07-24', reviewed: 10, accuracy: 94 },
    { date: '2025-07-23', reviewed: 7, accuracy: 78 },
    { date: '2025-07-22', reviewed: 11, accuracy: 85 }
  ];

  const startReviewSession = () => {
    setCurrentView('review');
    setSessionStartTime(Date.now());
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setSessionStats({ reviewed: 0, correct: 0, timeSpent: 0 });
  };

  const handleQualityRating = (rating) => {
    // SuperMemo algorithm simulation
    const card = cards[currentCardIndex];
    let newEaseFactor = card.difficulty_factor;
    let newInterval = card.interval_days;

    // Adjust ease factor based on quality (0-5 scale)
    if (rating >= 3) {
      newEaseFactor = Math.max(1.3, card.difficulty_factor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02)));
    } else {
      newEaseFactor = Math.max(1.3, card.difficulty_factor - 0.8);
      newInterval = 1; // Reset interval for poor performance
    }

    // Calculate new interval
    if (rating >= 3) {
      if (card.repetition_count === 0) {
        newInterval = 1;
      } else if (card.repetition_count === 1) {
        newInterval = 6;
      } else {
        newInterval = Math.round(card.interval_days * newEaseFactor);
      }
    }

    // Update card
    const updatedCard = {
      ...card,
      difficulty_factor: newEaseFactor,
      interval_days: newInterval,
      repetition_count: card.repetition_count + 1,
      mastery_level: rating >= 4 ? Math.min(5, card.mastery_level + 1) : Math.max(0, card.mastery_level - 1),
      last_correct: rating >= 3
    };

    const updatedCards = [...cards];
    updatedCards[currentCardIndex] = updatedCard;
    setCards(updatedCards);

    // Update session stats
    setSessionStats(prev => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      correct: prev.correct + (rating >= 3 ? 1 : 0),
      timeSpent: Math.round((Date.now() - sessionStartTime) / 1000 / 60)
    }));

    // Move to next card or end session
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setCurrentView('complete');
    }
  };

  const playAudio = () => {
    // Mock audio playback
    console.log(`Playing audio: ${currentCard.audio_url}`);
  };

  const renderDashboard = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-500" />
              <span>Spaced Repetition</span>
            </h1>
            <p className="text-gray-600 mt-1">Reinforce your learning with scientifically-optimized reviews</p>
          </div>
          <button
            onClick={() => setCurrentView('stats')}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            View Analytics
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">Due Today</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{cards.length}</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-2">
            <RotateCcw className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">Total Cards</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">147</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Retention Rate</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">87%</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">Mastered</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">23</div>
        </div>
      </div>

      {/* Review Session Card */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Ready for Review</h2>
            <p className="opacity-90 mb-4">
              {cards.length} cards are due for review. Complete them to strengthen your memory.
            </p>
            <div className="flex items-center space-x-4 text-sm opacity-75">
              <span>⏱️ ~{Math.ceil(cards.length * 0.8)} minutes</span>
              <span>🧠 Mixed difficulty</span>
              <span>📚 All skill types</span>
            </div>
          </div>
          <button
            onClick={startReviewSession}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>Start Review</span>
          </button>
        </div>
      </div>

      {/* Card Preview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">Due Cards Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.slice(0, 6).map((card) => (
            <div key={card.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${card.content_type === 'vocabulary' ? 'bg-green-100 text-green-600' :
                    card.content_type === 'grammar' ? 'bg-blue-100 text-blue-600' :
                      card.content_type === 'phrase' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                  }`}>
                  {card.content_type}
                </span>
                <span className="text-xs text-gray-500">{card.cefr_level}</span>
              </div>
              <div className="font-medium text-sm mb-1">{card.front_content}</div>
              <div className="text-xs text-gray-500 mb-2">{card.back_content}</div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-2 h-2 rounded-full ${level <= card.mastery_level ? 'bg-yellow-400' : 'bg-gray-200'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">
                  {card.repetition_count} reviews
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReviewSession = () => (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Header */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Card {currentCardIndex + 1} of {cards.length}
          </span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>⏱️ {sessionStats.timeSpent} min</span>
            <span>✅ {sessionStats.correct}/{sessionStats.reviewed}</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-400 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentCardIndex + 1) / cards.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Review Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${currentCard.content_type === 'vocabulary' ? 'bg-green-100 text-green-700' :
                currentCard.content_type === 'grammar' ? 'bg-blue-100 text-blue-700' :
                  currentCard.content_type === 'phrase' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
              }`}>
              {currentCard.content_type}
            </span>
            <span className="text-sm text-gray-500">{currentCard.cefr_level}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <Star
                  key={level}
                  className={`w-4 h-4 ${level <= currentCard.mastery_level ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Front of Card */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-gray-900 mb-4">
            {currentCard.front_content}
          </div>
          {currentCard.pronunciation && (
            <div className="text-gray-500 text-sm mb-2">
              {currentCard.pronunciation}
            </div>
          )}
          {currentCard.audio_url && (
            <button
              onClick={playAudio}
              className="text-blue-500 hover:text-blue-600 flex items-center space-x-1 mx-auto"
            >
              <Volume2 className="w-4 h-4" />
              <span className="text-sm">Play Audio</span>
            </button>
          )}
        </div>

        {/* Show Answer Button or Answer Content */}
        {!showAnswer ? (
          <div className="text-center">
            <button
              onClick={() => setShowAnswer(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all flex items-center space-x-2 mx-auto"
            >
              <Eye className="w-5 h-5" />
              <span>Show Answer</span>
            </button>
          </div>
        ) : (
          <div>
            {/* Answer */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {currentCard.back_content}
              </div>
              {currentCard.context && (
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Context:</strong> {currentCard.context}
                </div>
              )}
              {currentCard.example && (
                <div className="text-sm text-gray-600">
                  <strong>Example:</strong> {currentCard.example}
                </div>
              )}
            </div>

            {/* Quality Rating */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">How well did you remember this?</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleQualityRating(1)}
                  className="bg-red-100 text-red-700 py-3 rounded-lg font-medium hover:bg-red-200 transition-all"
                >
                  😰 Hard
                </button>
                <button
                  onClick={() => handleQualityRating(3)}
                  className="bg-yellow-100 text-yellow-700 py-3 rounded-lg font-medium hover:bg-yellow-200 transition-all"
                >
                  🤔 Good
                </button>
                <button
                  onClick={() => handleQualityRating(5)}
                  className="bg-green-100 text-green-700 py-3 rounded-lg font-medium hover:bg-green-200 transition-all"
                >
                  😊 Easy
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This affects when you'll see this card again
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="text-gray-500 hover:text-gray-700 font-medium"
        >
          ← Back to Dashboard
        </button>
        <div className="text-sm text-gray-500">
          Next interval: {currentCard.interval_days} day{currentCard.interval_days !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );

  const renderComplete = () => (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Complete!</h2>
        <p className="text-gray-600 mb-6">Great job reinforcing your knowledge</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{sessionStats.reviewed}</div>
            <div className="text-sm text-gray-600">Cards Reviewed</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">
              {Math.round((sessionStats.correct / sessionStats.reviewed) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">{sessionStats.timeSpent}</div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => setCurrentView('stats')}
            className="w-full border border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
          >
            View Detailed Analytics
          </button>
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Review Analytics</h1>
            <p className="text-gray-600">Track your spaced repetition performance</p>
          </div>
          <button
            onClick={() => setCurrentView('dashboard')}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold mb-4">7-Day Review History</h3>
        <div className="space-y-3">
          {reviewHistory.map((day) => (
            <div key={day.date} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 w-20">{day.date.slice(5)}</span>
                <div className="w-48 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                    style={{ width: `${day.accuracy}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-600">{day.reviewed} cards</span>
                <span className="font-medium">{day.accuracy}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Cards by Mastery Level</h3>
          <div className="space-y-3">
            {[
              { level: 'Mastered (5⭐)', count: 23, color: 'bg-green-500' },
              { level: 'Advanced (4⭐)', count: 18, color: 'bg-blue-500' },
              { level: 'Intermediate (3⭐)', count: 31, color: 'bg-yellow-500' },
              { level: 'Beginner (2⭐)', count: 42, color: 'bg-orange-500' },
              { level: 'Learning (1⭐)', count: 33, color: 'bg-red-500' }
            ].map((item) => (
              <div key={item.level} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm">{item.level}</span>
                </div>
                <span className="font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">Cards by Content Type</h3>
          <div className="space-y-3">
            {[
              { type: 'Vocabulary', count: 67, color: 'bg-green-500' },
              { type: 'Grammar', count: 34, color: 'bg-blue-500' },
              { type: 'Phrases', count: 28, color: 'bg-purple-500' },
              { type: 'Pronunciation', count: 18, color: 'bg-orange-500' }
            ].map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm">{item.type}</span>
                </div>
                <span className="font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'dashboard' && renderDashboard()}
      {currentView === 'review' && renderReviewSession()}
      {currentView === 'complete' && renderComplete()}
      {currentView === 'stats' && renderStats()}
    </div>
  );
};

export default SpacedRepetitionSystem;