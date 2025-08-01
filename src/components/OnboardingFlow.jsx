import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Globe, BookOpen, Target, Clock, CheckCircle } from 'lucide-react';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    nativeLanguage: '',
    targetLanguage: '',
    placementScore: null,
    cefrLevel: '',
    learningGoals: [],
    dailyGoal: 15,
    studyTimes: [],
    notifications: true
  });

  const languages = [
    { id: 'en', name: 'English', display: 'English', flag: '🇺🇸' },
    { id: 'es', name: 'Spanish', display: 'Español', flag: '🇪🇸' },
    { id: 'fr', name: 'French', display: 'Français', flag: '🇫🇷' },
    { id: 'de', name: 'German', display: 'Deutsch', flag: '🇩🇪' },
    { id: 'it', name: 'Italian', display: 'Italiano', flag: '🇮🇹' },
    { id: 'pt', name: 'Portuguese', display: 'Português', flag: '🇧🇷' },
    { id: 'ja', name: 'Japanese', display: '日本語', flag: '🇯🇵' },
    { id: 'ko', name: 'Korean', display: '한국어', flag: '🇰🇷' }
  ];

  const goals = [
    { id: 'travel', name: 'Travel & Tourism', icon: '✈️' },
    { id: 'business', name: 'Business & Career', icon: '💼' },
    { id: 'academic', name: 'Academic Studies', icon: '🎓' },
    { id: 'family', name: 'Family & Relationships', icon: '👨‍👩‍👧‍👦' },
    { id: 'culture', name: 'Culture & Entertainment', icon: '🎭' },
    { id: 'certification', name: 'Language Certification', icon: '📜' }
  ];

  const placementQuestions = [
    {
      question: "What is the correct form of 'to be' in this sentence: 'She ___ a teacher.'",
      options: ['are', 'is', 'am', 'be'],
      correct: 1,
      level: 'A1'
    },
    {
      question: "Choose the correct past tense: 'Yesterday, I ___ to the store.'",
      options: ['go', 'went', 'going', 'goes'],
      correct: 1,
      level: 'A2'
    },
    {
      question: "If I ___ you, I would study harder for the exam.",
      options: ['am', 'was', 'were', 'will be'],
      correct: 2,
      level: 'B1'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [placementAnswers, setPlacementAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const steps = [
    'Account Creation',
    'Native Language',
    'Target Language',
    'Placement Test',
    'Learning Goals',
    'Study Schedule',
    'Welcome'
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlacementAnswer = (answerIndex) => {
    const newAnswers = [...placementAnswers, answerIndex];
    setPlacementAnswers(newAnswers);

    if (currentQuestion < placementQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate CEFR level based on answers
      const correctAnswers = newAnswers.reduce((count, answer, index) => {
        return count + (answer === placementQuestions[index].correct ? 1 : 0);
      }, 0);

      let level = 'A1';
      let score = (correctAnswers / placementQuestions.length) * 100;

      if (score >= 80) level = 'B2';
      else if (score >= 60) level = 'B1';
      else if (score >= 40) level = 'A2';
      else level = 'A1';

      setUserData({ ...userData, placementScore: score, cefrLevel: level });
      setShowResults(true);
    }
  };

  const toggleGoal = (goalId) => {
    const goals = userData.learningGoals.includes(goalId)
      ? userData.learningGoals.filter(g => g !== goalId)
      : [...userData.learningGoals, goalId];
    setUserData({ ...userData, learningGoals: goals });
  };

  const toggleStudyTime = (time) => {
    const times = userData.studyTimes.includes(time)
      ? userData.studyTimes.filter(t => t !== time)
      : [...userData.studyTimes, time];
    setUserData({ ...userData, studyTimes: times });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Account Creation
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to LinguaLearn</h2>
              <p className="text-gray-600">Create your account to start your language learning journey</p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </div>
          </div>
        );

      case 1: // Native Language
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Globe className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your native language?</h2>
              <p className="text-gray-600">This helps us provide better explanations and translations</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setUserData({ ...userData, nativeLanguage: lang.id })}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${userData.nativeLanguage === lang.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-sm text-gray-500">{lang.display}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2: // Target Language
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Which language do you want to learn?</h2>
              <p className="text-gray-600">Choose your target language to get started</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {languages.filter(lang => lang.id !== userData.nativeLanguage).map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setUserData({ ...userData, targetLanguage: lang.id })}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${userData.targetLanguage === lang.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-sm text-gray-500">{lang.display}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3: // Placement Test
        if (!showResults) {
          return (
            <div className="space-y-6">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Placement Test</h2>
                <p className="text-gray-600">This helps us understand your current level</p>
                <div className="mt-4">
                  <div className="text-sm text-gray-500">Question {currentQuestion + 1} of {placementQuestions.length}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / placementQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">{placementQuestions[currentQuestion].question}</h3>
                <div className="space-y-3">
                  {placementQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handlePlacementAnswer(index)}
                      className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="space-y-6">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h2>
                <p className="text-gray-600">Here are your results</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{userData.cefrLevel}</div>
                  <div className="text-lg text-gray-600 mb-4">
                    {userData.cefrLevel === 'A1' && 'Beginner'}
                    {userData.cefrLevel === 'A2' && 'Elementary'}
                    {userData.cefrLevel === 'B1' && 'Intermediate'}
                    {userData.cefrLevel === 'B2' && 'Upper Intermediate'}
                  </div>
                  <div className="text-2xl font-semibold text-purple-600">
                    Score: {userData.placementScore}%
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">What this means:</h4>
                <p className="text-gray-600 text-sm">
                  We'll start you with {userData.cefrLevel} level content and gradually introduce more challenging material as you progress.
                </p>
              </div>
            </div>
          );
        }

      case 4: // Learning Goals
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What are your learning goals?</h2>
              <p className="text-gray-600">Select all that apply (you can change these later)</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${userData.learningGoals.includes(goal.id)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{goal.icon}</span>
                    <div className="font-medium">{goal.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5: // Study Schedule
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Clock className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Set your study schedule</h2>
              <p className="text-gray-600">When would you like to study each day?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily goal: {userData.dailyGoal} minutes
                </label>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={userData.dailyGoal}
                  onChange={(e) => setUserData({ ...userData, dailyGoal: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5 min</span>
                  <span>60 min</span>
                  <span>120 min</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred study times (optional)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Morning (6-9 AM)', 'Mid-morning (9-12 PM)', 'Afternoon (12-5 PM)', 'Evening (5-9 PM)', 'Night (9 PM+)'].map((time) => (
                    <button
                      key={time}
                      onClick={() => toggleStudyTime(time)}
                      className={`p-2 text-sm border rounded-lg transition-all ${userData.studyTimes.includes(time)
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={userData.notifications}
                  onChange={(e) => setUserData({ ...userData, notifications: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="notifications" className="text-sm text-gray-700">
                  Send me daily reminders
                </label>
              </div>
            </div>
          </div>
        );

      case 6: // Welcome
        return (
          <div className="space-y-6 text-center">
            <div>
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to LinguaLearn!</h2>
              <p className="text-gray-600">Your personalized learning journey is ready to begin</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Your Learning Profile</h3>
              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Level:</span>
                  <span className="font-medium">{userData.cefrLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Target Language:</span>
                  <span className="font-medium">
                    {languages.find(l => l.id === userData.targetLanguage)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Daily Goal:</span>
                  <span className="font-medium">{userData.dailyGoal} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Learning Goals:</span>
                  <span className="font-medium">{userData.learningGoals.length} selected</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Redirecting to your personalized dashboard!')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Start Learning Now! 🚀
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">{steps[currentStep]}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${currentStep === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <button
          onClick={nextStep}
          disabled={
            currentStep === steps.length - 1 ||
            (currentStep === 1 && !userData.nativeLanguage) ||
            (currentStep === 2 && !userData.targetLanguage) ||
            (currentStep === 3 && !showResults) ||
            (currentStep === 4 && userData.learningGoals.length === 0)
          }
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${currentStep === steps.length - 1 ||
              (currentStep === 1 && !userData.nativeLanguage) ||
              (currentStep === 2 && !userData.targetLanguage) ||
              (currentStep === 3 && !showResults) ||
              (currentStep === 4 && userData.learningGoals.length === 0)
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
        >
          <span>{currentStep === steps.length - 1 ? 'Complete' : 'Next'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingFlow;