import React, { useState, useEffect } from 'react';
import {
  Play, Clock, Target, Zap, BookOpen, Headphones, Mic, PenTool,
  Calendar, Trophy, TrendingUp, Volume2, CheckCircle, Star,
  RotateCcw, ArrowRight, Brain, Users, Award, Flame
} from 'lucide-react';

const DailyLearningDashboard = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [todayProgress, setTodayProgress] = useState(12);
  const [dailyGoal, setDailyGoal] = useState(20);
  const [totalPoints, setTotalPoints] = useState(2847);
  const [currentLevel, setCurrentLevel] = useState('A2');
  const [showExercise, setShowExercise] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);

  // Mock user data
  const userData = {
    name: "Emma",
    targetLanguage: "Spanish",
    nativeLanguage: "English",
    currentCEFR: "A2",
    weeklyGoal: 140, // minutes
    weekProgress: 95
  };

  // Mock recommended exercises based on analytics
  const recommendedExercises = [
    {
      id: 1,
      title: "Past Tense Practice",
      type: "grammar",
      category: "Grammar",
      difficulty: 2.3,
      estimatedMinutes: 8,
      points: 15,
      icon: <BookOpen className="w-5 h-5" />,
      color: "bg-blue-500",
      description: "Practice irregular past tense verbs",
      skillFocus: "Grammar",
      weakArea: true
    },
    {
      id: 2,
      title: "Restaurant Vocabulary",
      type: "vocabulary",
      category: "Vocabulary",
      difficulty: 2.1,
      estimatedMinutes: 6,
      points: 12,
      icon: <Target className="w-5 h-5" />,
      color: "bg-green-500",
      description: "Learn words for ordering food",
      skillFocus: "Vocabulary"
    },
    {
      id: 3,
      title: "Pronunciation: R Sounds",
      type: "pronunciation",
      category: "Speaking",
      difficulty: 2.8,
      estimatedMinutes: 10,
      points: 18,
      icon: <Mic className="w-5 h-5" />,
      color: "bg-purple-500",
      description: "Master the Spanish 'rr' sound",
      skillFocus: "Pronunciation"
    },
    {
      id: 4,
      title: "Listening: Daily Routines",
      type: "listening",
      category: "Listening",
      difficulty: 2.4,
      estimatedMinutes: 12,
      points: 20,
      icon: <Headphones className="w-5 h-5" />,
      color: "bg-orange-500",
      description: "Understand conversations about schedules",
      skillFocus: "Listening"
    }
  ];

  // Mock spaced repetition cards due today
  const dueReviews = [
    { id: 1, front: "buenos días", back: "good morning", difficulty: "easy" },
    { id: 2, front: "¿Cómo estás?", back: "How are you?", difficulty: "medium" },
    { id: 3, front: "restaurante", back: "restaurant", difficulty: "hard" },
    { id: 4, front: "trabajar", back: "to work", difficulty: "medium" },
    { id: 5, front: "mañana", back: "tomorrow/morning", difficulty: "easy" }
  ];

  // Mock recent achievements
  const recentAchievements = [
    { name: "7-Day Streak", icon: "🔥", earned: "today" },
    { name: "Grammar Master", icon: "📚", earned: "yesterday" },
    { name: "Perfect Score", icon: "💯", earned: "2 days ago" }
  ];

  // Mock analytics data
  const skillProgress = [
    { skill: "Grammar", progress: 75, level: "A2", color: "bg-blue-500" },
    { skill: "Vocabulary", progress: 82, level: "A2", color: "bg-green-500" },
    { skill: "Pronunciation", progress: 45, level: "A1", color: "bg-purple-500" },
    { skill: "Listening", progress: 68, level: "A2", color: "bg-orange-500" },
    { skill: "Reading", progress: 71, level: "A2", color: "bg-red-500" },
    { skill: "Writing", progress: 38, level: "A1", color: "bg-pink-500" }
  ];

  const startExercise = (exercise) => {
    setCurrentExercise(exercise);
    setShowExercise(true);
  };

  const completeExercise = () => {
    setTodayProgress(prev => prev + currentExercise.estimatedMinutes);
    setTotalPoints(prev => prev + currentExercise.points);
    setShowExercise(false);
    setCurrentExercise(null);
  };

  const ExerciseInterface = ({ exercise, onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);

    // Mock exercise questions based on type
    const questions = {
      grammar: [
        {
          question: "Choose the correct past tense form:",
          sentence: "Ayer, yo _____ al supermercado.",
          options: ["fui", "fue", "fueron", "fuimos"],
          correct: 0,
          explanation: "'Fui' is the first person singular past tense of 'ir' (to go)."
        },
        {
          question: "Complete with the correct verb:",
          sentence: "Ellos _____ en un restaurante anoche.",
          options: ["comieron", "comió", "comí", "comimos"],
          correct: 0,
          explanation: "'Comieron' is the third person plural past tense of 'comer' (to eat)."
        }
      ],
      vocabulary: [
        {
          question: "What does 'camarero' mean?",
          options: ["cook", "waiter", "customer", "menu"],
          correct: 1,
          explanation: "'Camarero' means waiter or server in a restaurant."
        },
        {
          question: "How do you say 'bill' in Spanish?",
          options: ["menú", "cuenta", "propina", "comida"],
          correct: 1,
          explanation: "'La cuenta' is the bill you receive after eating."
        }
      ]
    };

    const currentQuestions = questions[exercise.type] || questions.grammar;
    const question = currentQuestions[currentQuestion];

    const handleAnswer = (answerIndex) => {
      setSelectedAnswer(answerIndex);
      setShowFeedback(true);
      if (answerIndex === question.correct) {
        setScore(prev => prev + 1);
      }
    };

    const nextQuestion = () => {
      if (currentQuestion < currentQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        onComplete();
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
          {/* Exercise Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${exercise.color} text-white`}>
                  {exercise.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{exercise.title}</h2>
                  <p className="text-gray-600">{exercise.category}</p>
                </div>
              </div>
              <button
                onClick={() => setShowExercise(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Progress */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                Question {currentQuestion + 1} of {currentQuestions.length}
              </span>
              <span className="text-gray-600">
                Score: {score}/{currentQuestions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${exercise.color}`}
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
              {question.sentence && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium">{question.sentence}</p>
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all ${showFeedback
                      ? index === question.correct
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : selectedAnswer === index
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 bg-gray-50 text-gray-400'
                      : selectedAnswer === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <span className="font-medium">{option}</span>
                  {showFeedback && index === question.correct && (
                    <CheckCircle className="w-5 h-5 text-green-500 float-right" />
                  )}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg mb-4 ${selectedAnswer === question.correct
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
                }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {selectedAnswer === question.correct ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-green-700">Correct!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-red-500">✕</span>
                      <span className="font-semibold text-red-700">Incorrect</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-700">{question.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {showFeedback && (
              <button
                onClick={nextQuestion}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${exercise.color} hover:opacity-90`}
              >
                {currentQuestion < currentQuestions.length - 1 ? 'Next Question' : 'Complete Exercise'}
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (showExercise && currentExercise) {
    return <ExerciseInterface exercise={currentExercise} onComplete={completeExercise} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              ¡Hola, {userData.name}! 👋
            </h1>
            <p className="text-gray-600">Ready to continue learning {userData.targetLanguage}?</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="flex items-center space-x-1 text-orange-500">
                <Flame className="w-5 h-5" />
                <span className="font-bold text-lg">{currentStreak}</span>
              </div>
              <span className="text-xs text-gray-500">day streak</span>
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1 text-purple-500">
                <Star className="w-5 h-5" />
                <span className="font-bold text-lg">{totalPoints.toLocaleString()}</span>
              </div>
              <span className="text-xs text-gray-500">total points</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Progress */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Today's Progress</h2>
              <span className="text-sm text-gray-500">{todayProgress}/{dailyGoal} min</span>
            </div>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((todayProgress / dailyGoal) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{todayProgress}</div>
                <div className="text-xs text-gray-500">Minutes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-xs text-gray-500">Exercises</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">87</div>
                <div className="text-xs text-gray-500">Points</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">94%</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Recommended Exercises */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recommended for You</h2>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Brain className="w-4 h-4" />
                <span>AI-powered</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedExercises.map((exercise) => (
                <div key={exercise.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${exercise.color} text-white`}>
                        {exercise.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{exercise.title}</h3>
                        <p className="text-sm text-gray-600">{exercise.category}</p>
                      </div>
                    </div>
                    {exercise.weakArea && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        Weak Area
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{exercise.estimatedMinutes} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{exercise.points} pts</span>
                      </div>
                    </div>
                    <button
                      onClick={() => startExercise(exercise)}
                      className={`px-4 py-2 ${exercise.color} text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all`}
                    >
                      Start
                    </button>
                  </div>

                  {/* Difficulty indicator */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Difficulty:</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`w-2 h-2 rounded-full ${level <= exercise.difficulty ? exercise.color : 'bg-gray-200'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Progress */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Skill Progress</h2>
            <div className="space-y-4">
              {skillProgress.map((skill) => (
                <div key={skill.skill} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-sm text-gray-500">({skill.level})</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-10 text-right">{skill.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Spaced Repetition Reviews */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Review Due Today</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <RotateCcw className="w-4 h-4" />
                <span>{dueReviews.length}</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {dueReviews.slice(0, 3).map((card) => (
                <div key={card.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{card.front}</div>
                    <div className="text-xs text-gray-500">{card.back}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${card.difficulty === 'easy' ? 'bg-green-400' :
                      card.difficulty === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                </div>
              ))}
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-all">
              Start Review Session
            </button>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{achievement.name}</div>
                    <div className="text-xs text-gray-500">{achievement.earned}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">This Week</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Study Time</span>
                <span className="font-bold">{userData.weekProgress}/{userData.weeklyGoal} min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                  style={{ width: `${(userData.weekProgress / userData.weeklyGoal) * 100}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">12</div>
                  <div className="text-xs text-gray-500">Exercises</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">89%</div>
                  <div className="text-xs text-gray-500">Avg Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyLearningDashboard;