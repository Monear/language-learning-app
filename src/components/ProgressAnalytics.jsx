import React, { useState } from 'react';
import {
  TrendingUp, TrendingDown, BarChart3, Brain, Target, Calendar,
  Clock, Star, Award, Zap, AlertCircle, CheckCircle, ArrowUp,
  ArrowDown, Users, BookOpen, Headphones, Mic, PenTool, Eye,
  Filter, Download, RefreshCw
} from 'lucide-react';

const ProgressAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedSkill, setSelectedSkill] = useState('all');

  // Mock comprehensive analytics data
  const overallStats = {
    currentLevel: 'A2',
    progressToNextLevel: 78,
    totalStudyTime: 2847, // minutes
    averageAccuracy: 87.3,
    streakDays: 12,
    exercisesCompleted: 234,
    weakestSkill: 'Pronunciation',
    strongestSkill: 'Vocabulary',
    learningVelocity: 2.3 // exercises per day
  };

  const skillBreakdown = [
    {
      skill: 'Grammar',
      level: 'A2',
      progress: 75,
      accuracy: 82,
      timeSpent: 487,
      exercisesCompleted: 67,
      weakAreas: ['Past Perfect', 'Subjunctive Mood'],
      strongAreas: ['Present Simple', 'Articles'],
      trend: 'up',
      color: 'bg-blue-500',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      skill: 'Vocabulary',
      level: 'B1',
      progress: 91,
      accuracy: 94,
      timeSpent: 623,
      exercisesCompleted: 89,
      weakAreas: ['Business Terms', 'Academic Vocabulary'],
      strongAreas: ['Daily Life', 'Food & Drink', 'Travel'],
      trend: 'up',
      color: 'bg-green-500',
      icon: <Target className="w-5 h-5" />
    },
    {
      skill: 'Pronunciation',
      level: 'A1',
      progress: 34,
      accuracy: 67,
      timeSpent: 198,
      exercisesCompleted: 23,
      weakAreas: ['R Sounds', 'Vowel Distinction', 'Word Stress'],
      strongAreas: ['Basic Consonants'],
      trend: 'down',
      color: 'bg-purple-500',
      icon: <Mic className="w-5 h-5" />
    },
    {
      skill: 'Listening',
      level: 'A2',
      progress: 68,
      accuracy: 78,
      timeSpent: 445,
      exercisesCompleted: 56,
      weakAreas: ['Fast Speech', 'Multiple Speakers'],
      strongAreas: ['Slow Dialogue', 'News Reports'],
      trend: 'up',
      color: 'bg-orange-500',
      icon: <Headphones className="w-5 h-5" />
    },
    {
      skill: 'Reading',
      level: 'A2',
      progress: 71,
      accuracy: 89,
      timeSpent: 356,
      exercisesCompleted: 44,
      weakAreas: ['Literary Texts', 'Technical Articles'],
      strongAreas: ['News Articles', 'Personal Letters'],
      trend: 'stable',
      color: 'bg-red-500',
      icon: <Eye className="w-5 h-5" />
    },
    {
      skill: 'Writing',
      level: 'A1',
      progress: 42,
      accuracy: 73,
      timeSpent: 289,
      exercisesCompleted: 31,
      weakAreas: ['Formal Letters', 'Essay Structure'],
      strongAreas: ['Personal Messages', 'Simple Descriptions'],
      trend: 'up',
      color: 'bg-pink-500',
      icon: <PenTool className="w-5 h-5" />
    }
  ];

  const learningVelocityData = [
    { date: '2025-07-22', exercises: 3, accuracy: 85, timeSpent: 28 },
    { date: '2025-07-23', exercises: 5, accuracy: 92, timeSpent: 35 },
    { date: '2025-07-24', exercises: 2, accuracy: 78, timeSpent: 18 },
    { date: '2025-07-25', exercises: 4, accuracy: 89, timeSpent: 32 },
    { date: '2025-07-26', exercises: 6, accuracy: 94, timeSpent: 45 },
    { date: '2025-07-27', exercises: 3, accuracy: 81, timeSpent: 25 },
    { date: '2025-07-28', exercises: 4, accuracy: 87, timeSpent: 38 },
    { date: '2025-07-29', exercises: 2, accuracy: 90, timeSpent: 22 }
  ];

  const personalizedRecommendations = [
    {
      type: 'skill_focus',
      priority: 'high',
      title: 'Focus on Pronunciation',
      description: 'Your pronunciation score is significantly below other skills. Spend 10 extra minutes daily on sound recognition exercises.',
      action: 'Start Pronunciation Bootcamp',
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      color: 'border-red-200 bg-red-50'
    },
    {
      type: 'study_schedule',
      priority: 'medium',
      title: 'Optimize Study Time',
      description: 'You perform 23% better during morning sessions (8-10 AM). Consider scheduling more practice during this time.',
      action: 'Adjust Schedule',
      icon: <Clock className="w-5 h-5 text-blue-500" />,
      color: 'border-blue-200 bg-blue-50'
    },
    {
      type: 'difficulty_adjustment',
      priority: 'medium',
      title: 'Increase Grammar Difficulty',
      description: 'Your grammar accuracy is consistently above 90%. Try intermediate B1 level exercises for better challenge.',
      action: 'Level Up Grammar',
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      color: 'border-green-200 bg-green-50'
    },
    {
      type: 'weak_area',
      priority: 'high',
      title: 'Past Perfect Tense Practice',
      description: 'You\'ve struggled with Past Perfect in 73% of recent grammar exercises. Focus on this specific area.',
      action: 'Practice Past Perfect',
      icon: <Target className="w-5 h-5 text-orange-500" />,
      color: 'border-orange-200 bg-orange-50'
    }
  ];

  const milestones = [
    {
      name: 'A2 Grammar Complete',
      description: 'Completed all A2 level grammar exercises',
      dateEarned: '2025-07-28',
      points: 150,
      icon: '🎓',
      rarity: 'common'
    },
    {
      name: '10-Day Streak',
      description: 'Studied for 10 consecutive days',
      dateEarned: '2025-07-27',
      points: 100,
      icon: '🔥',
      rarity: 'uncommon'
    },
    {
      name: 'Vocabulary Master',
      description: 'Achieved 95%+ accuracy in vocabulary exercises',
      dateEarned: '2025-07-25',
      points: 200,
      icon: '📚',
      rarity: 'rare'
    },
    {
      name: 'Speed Learner',
      description: 'Completed 50 exercises in one week',
      dateEarned: '2025-07-23',
      points: 125,
      icon: '⚡',
      rarity: 'uncommon'
    }
  ];

  const comparisonData = {
    averageUser: {
      studyTime: 1650,
      accuracy: 78.5,
      exercisesCompleted: 187,
      level: 'A2'
    },
    topPerformers: {
      studyTime: 3200,
      accuracy: 91.2,
      exercisesCompleted: 345,
      level: 'B1'
    }
  };

  const renderOverviewStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overallStats.currentLevel}</div>
            <div className="text-sm text-gray-600">Current Level</div>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${overallStats.progressToNextLevel}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">
            {overallStats.progressToNextLevel}% to B1
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overallStats.averageAccuracy}%</div>
            <div className="text-sm text-gray-600">Avg Accuracy</div>
          </div>
          <div className="bg-green-100 p-2 rounded-lg">
            <Target className="w-5 h-5 text-green-500" />
          </div>
        </div>
        <div className="flex items-center mt-2 text-sm">
          <ArrowUp className="w-4 h-4 text-green-500" />
          <span className="text-green-600">+3.2% this week</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">{Math.round(overallStats.totalStudyTime / 60)}h</div>
            <div className="text-sm text-gray-600">Study Time</div>
          </div>
          <div className="bg-purple-100 p-2 rounded-lg">
            <Clock className="w-5 h-5 text-purple-500" />
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {overallStats.totalStudyTime} minutes total
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overallStats.streakDays}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
          <div className="bg-orange-100 p-2 rounded-lg">
            <Award className="w-5 h-5 text-orange-500" />
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Keep it up! 🔥
        </div>
      </div>
    </div>
  );

  const renderSkillBreakdown = () => (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Skill Breakdown</h2>
        <div className="flex items-center space-x-2">
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-1"
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillBreakdown.map((skill) => (
          <div key={skill.skill} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{skill.skill}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{skill.level} Level</span>
                    <span>•</span>
                    <span>{skill.accuracy}% accuracy</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {skill.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                {skill.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                {skill.trend === 'stable' && <div className="w-4 h-4 rounded-full bg-gray-300"></div>}
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color}`}
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
              <div>
                <span className="text-gray-600">Time Spent:</span>
                <div className="font-medium">{Math.round(skill.timeSpent / 60)}h {skill.timeSpent % 60}m</div>
              </div>
              <div>
                <span className="text-gray-600">Exercises:</span>
                <div className="font-medium">{skill.exercisesCompleted}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-xs text-gray-600 font-medium">Weak Areas:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skill.weakAreas.map((area, index) => (
                    <span key={index} className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-600 font-medium">Strong Areas:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skill.strongAreas.slice(0, 2).map((area, index) => (
                    <span key={index} className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                  {skill.strongAreas.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{skill.strongAreas.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLearningVelocity = () => (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Learning Velocity</h2>
      <div className="space-y-3">
        {learningVelocityData.slice(-7).map((day, index) => (
          <div key={day.date} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-16">{day.date.slice(5)}</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                    style={{ width: `${(day.exercises / 6) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{day.exercises} exercises</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-600">{day.timeSpent}min</span>
              <span className={`font-medium ${day.accuracy >= 85 ? 'text-green-600' : 'text-orange-600'}`}>
                {day.accuracy}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <div className="text-sm">
          <strong>Insight:</strong> You're most productive on weekends with an average of 4.5 exercises per session.
        </div>
      </div>
    </div>
  );

  const renderRecommendations = () => (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="w-6 h-6 text-purple-500" />
        <h2 className="text-xl font-bold">AI-Powered Recommendations</h2>
      </div>

      <div className="space-y-4">
        {personalizedRecommendations.map((rec, index) => (
          <div key={index} className={`border rounded-lg p-4 ${rec.color}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {rec.icon}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold">{rec.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${rec.priority === 'high' ? 'bg-red-100 text-red-600' :
                        rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                      }`}>
                      {rec.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                </div>
              </div>
              <button className="text-sm bg-white border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition-all">
                {rec.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMilestones = () => (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <span className="text-2xl">{milestone.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{milestone.name}</h3>
              <p className="text-xs text-gray-600">{milestone.description}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-gray-500">{milestone.dateEarned}</span>
                <span className="text-xs text-yellow-600 font-medium">+{milestone.points} pts</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${milestone.rarity === 'common' ? 'bg-gray-100 text-gray-600' :
                    milestone.rarity === 'uncommon' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                  }`}>
                  {milestone.rarity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Users className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold">How You Compare</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 mb-2">
            <div className="text-2xl font-bold text-gray-900 mb-1">You</div>
            <div className="space-y-1 text-sm">
              <div>{Math.round(overallStats.totalStudyTime / 60)}h study time</div>
              <div>{overallStats.averageAccuracy}% accuracy</div>
              <div>{overallStats.exercisesCompleted} exercises</div>
              <div className="font-medium text-blue-600">{overallStats.currentLevel} Level</div>
            </div>
          </div>
          <span className="text-sm text-gray-600">Your Progress</span>
        </div>

        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-4 mb-2">
            <div className="text-2xl font-bold text-gray-700 mb-1">Average</div>
            <div className="space-y-1 text-sm text-gray-600">
              <div>{Math.round(comparisonData.averageUser.studyTime / 60)}h study time</div>
              <div>{comparisonData.averageUser.accuracy}% accuracy</div>
              <div>{comparisonData.averageUser.exercisesCompleted} exercises</div>
              <div className="font-medium">{comparisonData.averageUser.level} Level</div>
            </div>
          </div>
          <span className="text-sm text-gray-600">Average User</span>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 mb-2">
            <div className="text-2xl font-bold text-gray-900 mb-1">Top 10%</div>
            <div className="space-y-1 text-sm">
              <div>{Math.round(comparisonData.topPerformers.studyTime / 60)}h study time</div>
              <div>{comparisonData.topPerformers.accuracy}% accuracy</div>
              <div>{comparisonData.topPerformers.exercisesCompleted} exercises</div>
              <div className="font-medium text-orange-600">{comparisonData.topPerformers.level} Level</div>
            </div>
          </div>
          <span className="text-sm text-gray-600">Top Performers</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <span className="font-semibold text-blue-700">Performance Insights</span>
        </div>
        <ul className="text-sm text-blue-600 space-y-1">
          <li>• You're studying 72% more than the average user</li>
          <li>• Your accuracy is 11% above average - excellent work!</li>
          <li>• You're on track to reach B1 level within 3 months</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Progress Analytics</h1>
            <p className="text-gray-600">Detailed insights into your Spanish learning journey</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
              <Download className="w-4 h-4" />
              <span className="text-sm">Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      {renderOverviewStats()}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Skill Breakdown */}
          {renderSkillBreakdown()}

          {/* AI Recommendations */}
          {renderRecommendations()}
        </div>

        <div className="space-y-6">
          {/* Learning Velocity */}
          {renderLearningVelocity()}

          {/* Recent Achievements */}
          {renderMilestones()}
        </div>
      </div>

      {/* Comparison Section */}
      {renderComparison()}
    </div>
  );
};

export default ProgressAnalytics;