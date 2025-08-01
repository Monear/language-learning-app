import React, { useState } from 'react';
import {
  BookOpen, Play, Lock, CheckCircle, Clock, Star, Users,
  TrendingUp, Target, Award, ChevronRight, ChevronDown,
  Filter, Search, Calendar, BarChart3, Download, Share2,
  Bookmark, Heart, Eye, MessageCircle, Globe, Zap
} from 'lucide-react';

const CourseProgression = () => {
  const [activeView, setActiveView] = useState('browse'); // browse, enrolled, course-detail
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedModules, setExpandedModules] = useState({});
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterSkill, setFilterSkill] = useState('all');

  // Mock user progress data
  const userProgress = {
    currentLevel: 'A2',
    coursesEnrolled: 3,
    coursesCompleted: 1,
    totalStudyHours: 47,
    averageScore: 87
  };

  // Mock courses data
  const availableCourses = [
    {
      id: 1,
      title: "Spanish Fundamentals",
      description: "Master the basics of Spanish grammar, vocabulary, and pronunciation",
      instructor: "Prof. Maria Garcia",
      level: "A1",
      duration: "8 weeks",
      modules: 12,
      exercises: 156,
      students: 15420,
      rating: 4.8,
      reviews: 2340,
      price: "Free",
      thumbnail: "🇪🇸",
      skills: ["Grammar", "Vocabulary", "Pronunciation"],
      isEnrolled: false,
      isCompleted: true,
      progress: 100,
      certificate: true,
      estimatedHours: 24,
      difficulty: "Beginner",
      lastUpdated: "2025-01-15"
    },
    {
      id: 2,
      title: "Conversational Spanish A2",
      description: "Build confidence in real-world Spanish conversations and daily interactions",
      instructor: "Carlos Rodriguez",
      level: "A2",
      duration: "10 weeks",
      modules: 15,
      exercises: 203,
      students: 12850,
      rating: 4.9,
      reviews: 1876,
      price: "Premium",
      thumbnail: "💬",
      skills: ["Speaking", "Listening", "Grammar"],
      isEnrolled: true,
      isCompleted: false,
      progress: 68,
      certificate: true,
      estimatedHours: 32,
      difficulty: "Elementary",
      lastUpdated: "2025-01-20",
      currentModule: 10,
      nextDeadline: "2025-08-05"
    },
    {
      id: 3,
      title: "Business Spanish B1",
      description: "Professional Spanish for workplace communication and business contexts",
      instructor: "Dr. Ana Morales",
      level: "B1",
      duration: "12 weeks",
      modules: 18,
      exercises: 267,
      students: 8730,
      rating: 4.7,
      reviews: 1432,
      price: "Premium",
      thumbnail: "💼",
      skills: ["Business", "Writing", "Speaking"],
      isEnrolled: true,
      isCompleted: false,
      progress: 23,
      certificate: true,
      estimatedHours: 45,
      difficulty: "Intermediate",
      lastUpdated: "2025-01-10",
      currentModule: 4,
      nextDeadline: "2025-08-10"
    },
    {
      id: 4,
      title: "Spanish Literature & Culture",
      description: "Explore Spanish-speaking cultures through literature, history, and arts",
      instructor: "Prof. Elena Vasquez",
      level: "B2",
      duration: "14 weeks",
      modules: 20,
      exercises: 189,
      students: 5620,
      rating: 4.6,
      reviews: 987,
      price: "Premium",
      thumbnail: "📚",
      skills: ["Reading", "Culture", "Writing"],
      isEnrolled: false,
      isCompleted: false,
      progress: 0,
      certificate: true,
      estimatedHours: 56,
      difficulty: "Upper Intermediate",
      lastUpdated: "2025-01-05"
    },
    {
      id: 5,
      title: "Medical Spanish",
      description: "Essential Spanish vocabulary and phrases for healthcare professionals",
      instructor: "Dr. Roberto Silva",
      level: "B1",
      duration: "6 weeks",
      modules: 8,
      exercises: 124,
      students: 3240,
      rating: 4.9,
      reviews: 456,
      price: "Premium",
      thumbnail: "⚕️",
      skills: ["Medical", "Vocabulary", "Speaking"],
      isEnrolled: false,
      isCompleted: false,
      progress: 0,
      certificate: true,
      estimatedHours: 18,
      difficulty: "Specialized",
      lastUpdated: "2025-01-25",
      isNew: true
    },
    {
      id: 6,
      title: "Travel Spanish Crash Course",
      description: "Essential phrases and vocabulary for Spanish-speaking destinations",
      instructor: "Isabella Martinez",
      level: "A1",
      duration: "4 weeks",
      modules: 6,
      exercises: 89,
      students: 9870,
      rating: 4.5,
      reviews: 1234,
      price: "Free",
      thumbnail: "✈️",
      skills: ["Travel", "Vocabulary", "Speaking"],
      isEnrolled: false,
      isCompleted: false,
      progress: 0,
      certificate: false,
      estimatedHours: 12,
      difficulty: "Beginner",
      lastUpdated: "2025-01-18"
    }
  ];

  // Detailed course content for course view
  const courseDetails = {
    2: {
      modules: [
        {
          id: 1,
          title: "Introductions and Greetings",
          description: "Learn formal and informal ways to introduce yourself",
          exercises: 12,
          estimatedTime: "45 min",
          isCompleted: true,
          isLocked: false,
          score: 94,
          exercises_list: [
            { id: 1, title: "Formal Greetings", type: "vocabulary", completed: true, score: 96 },
            { id: 2, title: "Introducing Yourself", type: "speaking", completed: true, score: 92 },
            { id: 3, title: "Meeting New People", type: "listening", completed: true, score: 94 }
          ]
        },
        {
          id: 2,
          title: "Daily Routines",
          description: "Describe your daily activities and schedule",
          exercises: 15,
          estimatedTime: "60 min",
          isCompleted: true,
          isLocked: false,
          score: 89,
          exercises_list: [
            { id: 4, title: "Time Expressions", type: "grammar", completed: true, score: 87 },
            { id: 5, title: "Routine Verbs", type: "vocabulary", completed: true, score: 91 },
            { id: 6, title: "My Daily Schedule", type: "writing", completed: true, score: 89 }
          ]
        },
        {
          id: 3,
          title: "Food and Restaurants",
          description: "Order food and discuss meals in Spanish",
          exercises: 18,
          estimatedTime: "75 min",
          isCompleted: true,
          isLocked: false,
          score: 92,
          exercises_list: [
            { id: 7, title: "Restaurant Vocabulary", type: "vocabulary", completed: true, score: 95 },
            { id: 8, title: "Ordering Food", type: "speaking", completed: true, score: 88 },
            { id: 9, title: "Food Preferences", type: "listening", completed: true, score: 93 }
          ]
        },
        {
          id: 4,
          title: "Shopping and Money",
          description: "Navigate shopping situations and handle money",
          exercises: 14,
          estimatedTime: "50 min",
          isCompleted: false,
          isLocked: false,
          isCurrentModule: true,
          progress: 71,
          exercises_list: [
            { id: 10, title: "Numbers and Prices", type: "vocabulary", completed: true, score: 89 },
            { id: 11, title: "At the Store", type: "speaking", completed: true, score: 84 },
            { id: 12, title: "Making Purchases", type: "listening", completed: false, inProgress: true }
          ]
        },
        {
          id: 5,
          title: "Transportation",
          description: "Get around using public and private transportation",
          exercises: 16,
          estimatedTime: "65 min",
          isCompleted: false,
          isLocked: true,
          unlockRequirement: "Complete Module 4 with 80% score"
        }
      ],
      overallStats: {
        totalExercises: 203,
        completedExercises: 137,
        averageScore: 91.5,
        timeSpent: "21h 35m",
        estimatedRemaining: "10h 25m"
      }
    }
  };

  const enrolledCourses = availableCourses.filter(course => course.isEnrolled);

  const filteredCourses = availableCourses.filter(course => {
    const levelMatch = filterLevel === 'all' || course.level === filterLevel;
    const skillMatch = filterSkill === 'all' || course.skills.some(skill =>
      skill.toLowerCase().includes(filterSkill.toLowerCase())
    );
    return levelMatch && skillMatch;
  });

  const toggleModuleExpansion = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const CourseCard = ({ course, showProgress = false }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{course.thumbnail}</div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-lg">{course.title}</h3>
              {course.isNew && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-2">{course.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{course.rating}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.estimatedHours}h</span>
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-sm font-medium px-3 py-1 rounded-full ${
            course.level === 'A1' ? 'bg-green-100 text-green-600' :
            course.level === 'A2' ? 'bg-blue-100 text-blue-600' :
            course.level === 'B1' ? 'bg-purple-100 text-purple-600' :
            'bg-orange-100 text-orange-600'
          }`}>
            {course.level}
          </div>
        </div>
      </div >

  { showProgress && course.isEnrolled && (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">Progress</span>
        <span className="font-medium">{course.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
      {course.nextDeadline && (
        <div className="text-xs text-gray-500 mt-1">
          Next milestone: {course.nextDeadline}
        </div>
      )}
    </div>
  )}

      <div className="flex flex-wrap gap-2 mb-4">
        {course.skills.map((skill, index) => (
          <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">by {course.instructor}</span>
          <span className={`font-semibold ${course.price === 'Free' ? 'text-green-600' : 'text-purple-600'}`}>
            {course.price}
          </span>
        </div>
        <div className="flex space-x-2">
          {course.isEnrolled ? (
            <button 
              onClick={() => {
                setSelectedCourse(course.id);
                setActiveView('course-detail');
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Continue</span>
            </button>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">
              Enroll Now
            </button>
          )}
          <button className="border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div >
  );

const renderBrowseCourses = () => (
  <div className="space-y-6">
    {/* Quick Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">{userProgress.coursesEnrolled}</div>
            <div className="text-sm text-gray-600">Enrolled</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">{userProgress.coursesCompleted}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">{userProgress.totalStudyHours}h</div>
            <div className="text-sm text-gray-600">Study Time</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <BarChart3 className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">{userProgress.averageScore}%</div>
            <div className="text-sm text-gray-600">Avg Score</div>
          </div>
        </div>
      </div>
    </div>

    {/* Filters */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Browse Courses</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm"
            >
              <option value="all">All Levels</option>
              <option value="A1">A1 - Beginner</option>
              <option value="A2">A2 - Elementary</option>
              <option value="B1">B1 - Intermediate</option>
              <option value="B2">B2 - Upper Intermediate</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  </div>
);

const renderEnrolledCourses = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Your Active Courses</h2>

      <div className="space-y-6">
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} showProgress={true} />
        ))}
      </div>

      {enrolledCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No enrolled courses</h3>
          <p className="text-gray-500 mb-4">Start your learning journey by enrolling in a course</p>
          <button
            onClick={() => setActiveView('browse')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Browse Courses
          </button>
        </div>
      )}
    </div>
  </div>
);

const renderCourseDetail = () => {
  const course = availableCourses.find(c => c.id === selectedCourse);
  const details = courseDetails[selectedCourse];

  if (!course || !details) return null;

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <button
          onClick={() => setActiveView('enrolled')}
          className="text-blue-500 hover:text-blue-600 mb-4 flex items-center space-x-2"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>Back to My Courses</span>
        </button>

        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{course.thumbnail}</div>
            <div>
              <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
              <p className="text-gray-600 mb-3">{course.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>by {course.instructor}</span>
                <span>•</span>
                <span>{course.level} Level</span>
                <span>•</span>
                <span>{course.modules} modules</span>
                <span>•</span>
                <span>{course.exercises} exercises</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-600 mb-1">{course.progress}%</div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{details.overallStats.completedExercises}</div>
            <div className="text-sm text-gray-600">Exercises Completed</div>
            <div className="text-xs text-gray-500">of {details.overallStats.totalExercises}</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{details.overallStats.averageScore}%</div>
            <div className="text-sm text-gray-600">Average Score</div>
            <div className="text-xs text-gray-500">across all modules</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{details.overallStats.timeSpent}</div>
            <div className="text-sm text-gray-600">Time Invested</div>
            <div className="text-xs text-gray-500">{details.overallStats.estimatedRemaining} remaining</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">#{course.currentModule}</div>
            <div className="text-sm text-gray-600">Current Module</div>
            <div className="text-xs text-gray-500">of {course.modules}</div>
          </div>
        </div>
      </div>

      {/* Module List */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Course Modules</h2>

        <div className="space-y-4">
          {details.modules.map((module) => (
            <div key={module.id} className={`border rounded-lg ${module.isCompleted ? 'border-green-200 bg-green-50' :
                module.isCurrentModule ? 'border-blue-200 bg-blue-50' :
                  module.isLocked ? 'border-gray-200 bg-gray-50' :
                    'border-gray-200 bg-white'
              }`}>
              <div
                onClick={() => !module.isLocked && toggleModuleExpansion(module.id)}
                className={`p-4 cursor-pointer ${module.isLocked ? 'cursor-not-allowed opacity-60' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8">
                      {module.isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : module.isLocked ? (
                        <Lock className="w-5 h-5 text-gray-400" />
                      ) : module.isCurrentModule ? (
                        <Play className="w-5 h-5 text-blue-500" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                        <span>{module.exercises} exercises</span>
                        <span>•</span>
                        <span>{module.estimatedTime}</span>
                        {module.score && (
                          <>
                            <span>•</span>
                            <span className="text-green-600 font-medium">{module.score}% score</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {module.progress && (
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{module.progress}%</span>
                      </div>
                    )}

                    {!module.isLocked && (
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedModules[module.id] ? 'rotate-180' : ''
                        }`} />
                    )}
                  </div>
                </div>

                {module.unlockRequirement && module.isLocked && (
                  <div className="mt-3 p-3 bg-gray-100 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4" />
                      <span>{module.unlockRequirement}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Expanded Module Content */}
              {expandedModules[module.id] && module.exercises_list && (
                <div className="border-t border-gray-200 p-4 bg-white">
                  <h4 className="font-medium mb-3">Module Exercises</h4>
                  <div className="space-y-2">
                    {module.exercises_list.map((exercise) => (
                      <div key={exercise.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5">
                            {exercise.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : exercise.inProgress ? (
                              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-sm">{exercise.title}</span>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <span className={`px-2 py-1 rounded-full ${exercise.type === 'vocabulary' ? 'bg-green-100 text-green-600' :
                                  exercise.type === 'grammar' ? 'bg-blue-100 text-blue-600' :
                                    exercise.type === 'speaking' ? 'bg-purple-100 text-purple-600' :
                                      'bg-orange-100 text-orange-600'
                                }`}>
                                {exercise.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {exercise.score && (
                            <span className="text-sm font-medium text-green-600">{exercise.score}%</span>
                          )}
                          <button className="text-blue-500 hover:text-blue-600 text-sm">
                            {exercise.completed ? 'Review' : exercise.inProgress ? 'Continue' : 'Start'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

return (
  <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
    {/* Header */}
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learning Paths</h1>
          <p className="text-gray-600">Structured courses to guide your Spanish learning journey</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
            <Download className="w-4 h-4" />
            <span>Export Progress</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>

    {/* Navigation Tabs */}
    {activeView !== 'course-detail' && (
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveView('browse')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeView === 'browse'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <Search className="w-5 h-5" />
            <span>Browse Courses</span>
          </button>
          <button
            onClick={() => setActiveView('enrolled')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeView === 'enrolled'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>My Courses ({enrolledCourses.length})</span>
          </button>
        </div>
      </div>
    )}

    {/* Content */}
    {activeView === 'browse' && renderBrowseCourses()}
    {activeView === 'enrolled' && renderEnrolledCourses()}
    {activeView === 'course-detail' && renderCourseDetail()}
  </div>
);
};

export default CourseProgression;