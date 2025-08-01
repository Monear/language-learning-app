import React, { useState, useEffect } from 'react';
import {
  Award, Clock, CheckCircle, FileText, Download, Share2,
  BarChart3, Target, Brain, AlertCircle, Star, Trophy,
  Play, Pause, RotateCcw, ChevronRight, ChevronLeft,
  Calendar, Globe, Zap, BookOpen, Headphones, Mic,
  PenTool, Eye, User, Shield, ExternalLink
} from 'lucide-react';

const AssessmentCertification = () => {
  const [activeView, setActiveView] = useState('overview'); // overview, assessment, results, certificates
  const [currentAssessment, setCurrentAssessment] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [testStarted, setTestStarted] = useState(false);

  // Mock user assessment history
  const userAssessmentData = {
    currentLevel: 'A2',
    nextLevelProgress: 78,
    lastAssessment: '2025-07-20',
    totalAssessments: 5,
    averageScore: 84.2,
    certificates: 2,
    strongestSkill: 'Vocabulary',
    weakestSkill: 'Pronunciation'
  };

  // Available assessments
  const availableAssessments = [
    {
      id: 1,
      name: "CEFR Level Assessment",
      type: "placement",
      description: "Comprehensive test to determine your current CEFR level",
      duration: 45,
      questions: 60,
      skills: ["Grammar", "Vocabulary", "Reading", "Listening"],
      price: "Free",
      certificate: true,
      difficulty: "Adaptive",
      nextAvailable: null,
      lastTaken: "2025-07-20",
      lastScore: 82,
      canRetake: false,
      retakeDate: "2025-08-20"
    },
    {
      id: 2,
      name: "A2 Level Certification",
      type: "certification",
      description: "Official A2 level certificate recognized by educational institutions",
      duration: 90,
      questions: 80,
      skills: ["Grammar", "Vocabulary", "Reading", "Listening", "Writing"],
      price: "$29.99",
      certificate: true,
      difficulty: "A2",
      nextAvailable: null,
      canRetake: true,
      passingScore: 70,
      attempts: 1,
      maxAttempts: 3
    },
    {
      id: 3,
      name: "Business Spanish Assessment",
      type: "specialized",
      description: "Test your Spanish skills in professional and business contexts",
      duration: 60,
      questions: 45,
      skills: ["Business Vocabulary", "Formal Writing", "Professional Speaking"],
      price: "$19.99",
      certificate: true,
      difficulty: "B1",
      nextAvailable: null,
      canRetake: true,
      prerequisite: "A2 Level"
    },
    {
      id: 4,
      name: "Quick Grammar Check",
      type: "progress",
      description: "15-minute assessment focused on grammar fundamentals",
      duration: 15,
      questions: 20,
      skills: ["Grammar"],
      price: "Free",
      certificate: false,
      difficulty: "A1-A2",
      nextAvailable: null,
      canRetake: true,
      cooldown: 0
    },
    {
      id: 5,
      name: "Pronunciation Assessment",
      type: "specialized",
      description: "AI-powered evaluation of your Spanish pronunciation",
      duration: 30,
      questions: 25,
      skills: ["Pronunciation", "Speaking"],
      price: "Premium",
      certificate: true,
      difficulty: "A1-B2",
      nextAvailable: null,
      canRetake: true,
      requiresMicrophone: true
    }
  ];

  // Mock assessment questions
  const assessmentQuestions = {
    2: [ // A2 Certification questions
      {
        id: 1,
        type: "multiple_choice",
        skill: "Grammar",
        question: "Complete the sentence: 'Ayer, mis amigos y yo _____ al cine.'",
        options: ["fuimos", "fueron", "vamos", "van"],
        correct: 0,
        explanation: "'Fuimos' is the first person plural past tense of 'ir' (to go)."
      },
      {
        id: 2,
        type: "multiple_choice",
        skill: "Vocabulary",
        question: "What is the correct translation of 'librería'?",
        options: ["library", "bookstore", "bookshelf", "book"],
        correct: 1,
        explanation: "'Librería' means bookstore. 'Library' is 'biblioteca' in Spanish."
      },
      {
        id: 3,
        type: "reading_comprehension",
        skill: "Reading",
        passage: "María trabaja en una oficina en el centro de la ciudad. Todos los días toma el autobús a las 8:00 de la mañana. Su trabajo es muy interesante porque habla con clientes de diferentes países.",
        question: "¿Cómo va María al trabajo?",
        options: ["En coche", "En autobús", "Caminando", "En tren"],
        correct: 1,
        explanation: "The text states 'toma el autobús' (takes the bus)."
      },
      {
        id: 4,
        type: "listening",
        skill: "Listening",
        audioUrl: "/audio/question4.mp3",
        question: "What time does the store open?",
        options: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
        correct: 1,
        explanation: "The audio states the store opens at 10:00 AM."
      },
      {
        id: 5,
        type: "fill_blank",
        skill: "Grammar",
        question: "Complete: 'Me gusta _____ música clásica.'",
        options: ["la", "el", "las", "los"],
        correct: 0,
        explanation: "'Música' is feminine singular, so it takes the article 'la'."
      }
    ]
  };

  // User certificates
  const userCertificates = [
    {
      id: 1,
      name: "Spanish A1 Level Certificate",
      issueDate: "2025-06-15",
      validUntil: "2027-06-15",
      score: 89,
      credentialId: "ESP-A1-2025-067842",
      verificationUrl: "https://verify.linguallearn.com/67842",
      skills: ["Basic Grammar", "Essential Vocabulary", "Simple Conversations"],
      hours: 40,
      downloadUrl: "/certificates/a1-certificate.pdf"
    },
    {
      id: 2,
      name: "Business Spanish Fundamentals",
      issueDate: "2025-07-10",
      validUntil: "2026-07-10",
      score: 76,
      credentialId: "ESP-BUS-2025-098234",
      verificationUrl: "https://verify.linguallearn.com/98234",
      skills: ["Professional Vocabulary", "Email Writing", "Meeting Participation"],
      hours: 25,
      downloadUrl: "/certificates/business-certificate.pdf"
    }
  ];

  // Assessment history
  const assessmentHistory = [
    { date: "2025-07-20", test: "CEFR Level Assessment", score: 82, level: "A2", duration: "43 min" },
    { date: "2025-07-10", test: "Business Spanish Assessment", score: 76, level: "A2", duration: "58 min" },
    { date: "2025-06-25", test: "Quick Grammar Check", score: 94, level: "A2", duration: "12 min" },
    { date: "2025-06-15", test: "A1 Level Certification", score: 89, level: "A1", duration: "87 min" },
    { date: "2025-05-30", test: "CEFR Level Assessment", score: 73, level: "A1", duration: "45 min" }
  ];

  // Timer effect for assessments
  useEffect(() => {
    let interval;
    if (testStarted && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      // Auto-submit when time runs out
      handleTestComplete();
    }
    return () => clearInterval(interval);
  }, [testStarted, timeRemaining]);

  const startAssessment = (assessment) => {
    setCurrentAssessment(assessment);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeRemaining(assessment.duration * 60); // Convert minutes to seconds
    setTestStarted(true);
    setActiveView('assessment');
  };

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < assessmentQuestions[currentAssessment.id].length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleTestComplete = () => {
    setTestStarted(false);
    setActiveView('results');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Current Level Status */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Your Current Level</h2>
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold">{userAssessmentData.currentLevel}</div>
              <div>
                <div className="text-sm opacity-90 mb-1">Progress to {userAssessmentData.currentLevel === 'A2' ? 'B1' : 'A2'}</div>
                <div className="w-48 bg-white bg-opacity-20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${userAssessmentData.nextLevelProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs opacity-75 mt-1">{userAssessmentData.nextLevelProgress}% complete</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-2" />
            <div className="text-sm opacity-90">Last assessed</div>
            <div className="font-medium">{userAssessmentData.lastAssessment}</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{userAssessmentData.totalAssessments}</div>
              <div className="text-sm text-gray-600">Tests Taken</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{userAssessmentData.averageScore}%</div>
              <div className="text-sm text-gray-600">Avg Score</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{userAssessmentData.certificates}</div>
              <div className="text-sm text-gray-600">Certificates</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-xl font-bold">{userAssessmentData.strongestSkill}</div>
              <div className="text-sm text-gray-600">Strongest Skill</div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Assessments */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Available Assessments</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {availableAssessments.map((assessment) => (
            <div key={assessment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{assessment.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{assessment.description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {assessment.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`px-3 py-1 rounded-full text-sm font-medium ${assessment.type === 'certification' ? 'bg-purple-100 text-purple-600' :
                    assessment.type === 'placement' ? 'bg-blue-100 text-blue-600' :
                      assessment.type === 'specialized' ? 'bg-orange-100 text-orange-600' :
                        'bg-green-100 text-green-600'
                  }`}>
                  {assessment.type}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div className="text-center">
                  <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="font-medium">{assessment.duration} min</div>
                </div>
                <div className="text-center">
                  <FileText className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <div className="font-medium">{assessment.questions} questions</div>
                </div>
                <div className="text-center">
                  {assessment.certificate ? (
                    <Award className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  ) : (
                    <BarChart3 className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  )}
                  <div className="font-medium">{assessment.certificate ? 'Certificate' : 'Progress'}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className={`font-semibold ${assessment.price === 'Free' ? 'text-green-600' :
                      assessment.price === 'Premium' ? 'text-purple-600' :
                        'text-orange-600'
                    }`}>
                    {assessment.price}
                  </span>

                  {assessment.lastScore && (
                    <span className="text-sm text-gray-500">
                      Last: {assessment.lastScore}%
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  {assessment.canRetake ? (
                    <button
                      onClick={() => startAssessment(assessment)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>{assessment.lastScore ? 'Retake' : 'Start'}</span>
                    </button>
                  ) : (
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Next available:</div>
                      <div className="text-sm font-medium text-gray-700">{assessment.retakeDate}</div>
                    </div>
                  )}
                </div>
              </div>

              {assessment.prerequisite && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-yellow-700">
                    <AlertCircle className="w-4 h-4" />
                    <span>Prerequisite: {assessment.prerequisite}</span>
                  </div>
                </div>
              )}

              {assessment.requiresMicrophone && (
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-blue-700">
                    <Mic className="w-4 h-4" />
                    <span>Microphone required for this assessment</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Assessment History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Recent Assessment History</h2>

        <div className="space-y-3">
          {assessmentHistory.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500">{record.date}</div>
                </div>
                <div>
                  <div className="font-medium">{record.test}</div>
                  <div className="text-sm text-gray-600">Duration: {record.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className={`text-lg font-bold ${record.score >= 80 ? 'text-green-600' : 'text-orange-600'}`}>
                    {record.score}%
                  </div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${record.level === 'A1' ? 'bg-green-100 text-green-600' :
                    record.level === 'A2' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                  }`}>
                  {record.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssessment = () => {
    if (!currentAssessment) return null;

    const questions = assessmentQuestions[currentAssessment.id] || [];
    const question = questions[currentQuestion];

    return (
      <div className="max-w-4xl mx-auto">
        {/* Assessment Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold">{currentAssessment.name}</h1>
              <p className="text-gray-600">{currentAssessment.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{formatTime(timeRemaining)}</div>
              <div className="text-sm text-gray-500">Time Remaining</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-gray-600">
              {question?.skill} • {currentAssessment.type}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          {question?.type === 'reading_comprehension' && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-2">Read the following passage:</h3>
              <p className="text-gray-700 leading-relaxed">{question.passage}</p>
            </div>
          )}

          {question?.type === 'listening' && (
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-3">
                <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all">
                  <Play className="w-5 h-5" />
                </button>
                <div>
                  <h3 className="font-medium">Listen to the audio</h3>
                  <p className="text-sm text-gray-600">You can play the audio up to 3 times</p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{question?.question}</h2>
          </div>

          <div className="space-y-3">
            {question?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all ${answers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300'
                    }`}>
                    {answers[currentQuestion] === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all">
                Save & Exit
              </button>
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleTestComplete}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                >
                  Submit Test
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === undefined}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${answers[currentQuestion] === undefined
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!currentAssessment) return null;

    // Mock results calculation
    const totalQuestions = assessmentQuestions[currentAssessment.id]?.length || 5;
    const correctAnswers = Math.floor(answers.length * 0.8); // 80% for demo
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = score >= (currentAssessment.passingScore || 70);

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Results Header */}
        <div className={`rounded-xl shadow-lg p-8 text-white ${passed ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gradient-to-r from-red-400 to-orange-500'
          }`}>
          <div className="text-center">
            <div className="text-6xl mb-4">
              {passed ? '🎉' : '📚'}
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {passed ? 'Congratulations!' : 'Keep Learning!'}
            </h1>
            <p className="text-xl opacity-90 mb-4">
              {passed
                ? `You passed the ${currentAssessment.name}!`
                : `You scored ${score}% on the ${currentAssessment.name}`
              }
            </p>
            <div className="text-5xl font-bold mb-2">{score}%</div>
            <div className="text-lg opacity-90">
              {correctAnswers} out of {totalQuestions} questions correct
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Detailed Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{correctAnswers}</div>
              <div className="text-sm text-gray-600">Correct Answers</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">
                {Math.floor((currentAssessment.duration * 60 - timeRemaining) / 60)}m
              </div>
              <div className="text-sm text-gray-600">Time Used</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Trophy className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">
                {currentAssessment.level || 'A2'}
              </div>
              <div className="text-sm text-gray-600">Level Assessed</div>
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Performance by Skill</h3>
            <div className="space-y-3">
              {currentAssessment.skills.map((skill, index) => {
                const skillScore = Math.floor(Math.random() * 20) + 75; // Mock scores 75-95%
                return (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{skill}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skillScore >= 85 ? 'bg-green-500' :
                              skillScore >= 70 ? 'bg-yellow-500' :
                                'bg-red-500'
                            }`}
                          style={{ width: `${skillScore}%` }}
                        ></div>
                      </div>
                      <span className="font-medium w-12 text-right">{skillScore}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-700 mb-2">Recommendations</h3>
            <ul className="text-sm text-blue-600 space-y-1">
              {passed ? (
                <>
                  <li>• You're ready to advance to the next level!</li>
                  <li>• Consider taking a B1 level assessment to continue your progress</li>
                  <li>• Keep practicing regularly to maintain your skills</li>
                </>
              ) : (
                <>
                  <li>• Focus on grammar fundamentals to improve your score</li>
                  <li>• Practice vocabulary exercises daily</li>
                  <li>• You can retake this assessment in 30 days</li>
                </>
              )}
            </ul>
          </div>

          {/* Certificate Section */}
          {passed && currentAssessment.certificate && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold text-yellow-700">Certificate Earned!</h3>
                    <p className="text-sm text-yellow-600">Your official certificate is being generated</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all">
                  Download Certificate
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setActiveView('overview')}
              className="px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
            >
              Back to Overview
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Share Results</span>
            </button>
            {!passed && (
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all flex items-center space-x-2">
                <RotateCcw className="w-4 h-4" />
                <span>Practice More</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCertificates = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Your Certificates</h2>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            <Download className="w-4 h-4" />
            <span>Download All</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {userCertificates.map((cert) => (
            <div key={cert.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{cert.name}</h3>
                    <p className="text-sm text-gray-600">Issued: {cert.issueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{cert.score}%</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Credential ID:</span>
                  <span className="font-mono">{cert.credentialId}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Valid Until:</span>
                  <span className="font-medium">{cert.validUntil}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Study Hours:</span>
                  <span className="font-medium">{cert.hours}h</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Certified:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="flex-1 border border-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify</span>
                </button>
                <button className="px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {userCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No certificates yet</h3>
            <p className="text-gray-500 mb-4">Complete assessments to earn your first certificate</p>
            <button
              onClick={() => setActiveView('overview')}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Take Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Assessment & Certification</h1>
            <p className="text-gray-600">Validate your progress and earn official certificates</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
              <Shield className="w-4 h-4" />
              <span>Verify Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      {activeView !== 'assessment' && activeView !== 'results' && (
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveView('overview')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeView === 'overview'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Assessments</span>
            </button>
            <button
              onClick={() => setActiveView('certificates')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeView === 'certificates'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Award className="w-5 h-5" />
              <span>Certificates ({userCertificates.length})</span>
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      {activeView === 'overview' && renderOverview()}
      {activeView === 'assessment' && renderAssessment()}
      {activeView === 'results' && renderResults()}
      {activeView === 'certificates' && renderCertificates()}
    </div>
  );
};

export default AssessmentCertification;