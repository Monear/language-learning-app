import React, { useState } from 'react';
import {
  Trophy, Star, Award, Flame, Target, Users, Crown, Medal,
  TrendingUp, Calendar, Zap, BookOpen, Headphones, Mic,
  PenTool, Eye, Clock, CheckCircle, Lock, ChevronRight,
  Filter, Search, Share2, Gift
} from 'lucide-react';

const AchievementLeaderboards = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [leaderboardFilter, setLeaderboardFilter] = useState('weekly');
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Mock user data
  const currentUser = {
    id: 1,
    name: "Emma Chen",
    avatar: "👩‍💻",
    level: "A2",
    totalPoints: 2847,
    weeklyPoints: 387,
    rank: 7,
    streakDays: 12,
    achievements: 23,
    badges: ['streak_master', 'vocabulary_ninja', 'grammar_guru']
  };

  // Achievement categories
  const achievementCategories = [
    { id: 'all', name: 'All Achievements', icon: <Award className="w-4 h-4" /> },
    { id: 'streaks', name: 'Streaks', icon: <Flame className="w-4 h-4" /> },
    { id: 'skills', name: 'Skills', icon: <Target className="w-4 h-4" /> },
    { id: 'social', name: 'Social', icon: <Users className="w-4 h-4" /> },
    { id: 'milestones', name: 'Milestones', icon: <Trophy className="w-4 h-4" /> },
    { id: 'special', name: 'Special Events', icon: <Gift className="w-4 h-4" /> }
  ];

  // Mock achievements data
  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first lesson",
      category: "milestones",
      points: 10,
      icon: "🎯",
      rarity: "common",
      earned: true,
      earnedDate: "2025-07-15",
      progress: 100,
      requirement: "Complete 1 lesson",
      earners: 98.5
    },
    {
      id: 2,
      name: "Week Warrior",
      description: "Study for 7 consecutive days",
      category: "streaks",
      points: 50,
      icon: "🔥",
      rarity: "uncommon",
      earned: true,
      earnedDate: "2025-07-22",
      progress: 100,
      requirement: "7-day study streak",
      earners: 67.3
    },
    {
      id: 3,
      name: "Grammar Guru",
      description: "Achieve 95% accuracy in 20 grammar exercises",
      category: "skills",
      points: 100,
      icon: "📚",
      rarity: "rare",
      earned: true,
      earnedDate: "2025-07-25",
      progress: 100,
      requirement: "95% accuracy in 20 grammar exercises",
      earners: 23.7
    },
    {
      id: 4,
      name: "Vocabulary Ninja",
      description: "Learn 100 new words in one week",
      category: "skills",
      points: 75,
      icon: "🥷",
      rarity: "uncommon",
      earned: true,
      earnedDate: "2025-07-20",
      progress: 100,
      requirement: "Learn 100 words in 7 days",
      earners: 34.2
    },
    {
      id: 5,
      name: "Pronunciation Pro",
      description: "Master 50 pronunciation exercises",
      category: "skills",
      points: 125,
      icon: "🎤",
      rarity: "rare",
      earned: false,
      progress: 68,
      requirement: "Complete 50 pronunciation exercises with 90%+ accuracy",
      earners: 15.8
    },
    {
      id: 6,
      name: "Speed Demon",
      description: "Complete 10 exercises in under 30 minutes",
      category: "milestones",
      points: 60,
      icon: "⚡",
      rarity: "uncommon",
      earned: false,
      progress: 43,
      requirement: "Complete 10 exercises in 30 minutes",
      earners: 28.9
    },
    {
      id: 7,
      name: "Streak Legend",
      description: "Maintain a 30-day study streak",
      category: "streaks",
      points: 200,
      icon: "🏆",
      rarity: "legendary",
      earned: false,
      progress: 40,
      requirement: "Study for 30 consecutive days",
      earners: 5.2
    },
    {
      id: 8,
      name: "Social Butterfly",
      description: "Help 5 friends with language questions",
      category: "social",
      points: 80,
      icon: "🦋",
      rarity: "uncommon",
      earned: false,
      progress: 0,
      requirement: "Answer 5 community questions",
      earners: 19.4
    },
    {
      id: 9,
      name: "Perfectionist",
      description: "Score 100% on 5 consecutive exercises",
      category: "skills",
      points: 150,
      icon: "💯",
      rarity: "epic",
      earned: false,
      progress: 80,
      requirement: "Perfect scores on 5 consecutive exercises",
      earners: 8.3
    },
    {
      id: 10,
      name: "Holiday Champion",
      description: "Complete special holiday challenge",
      category: "special",
      points: 300,
      icon: "🎄",
      rarity: "legendary",
      earned: false,
      progress: 0,
      requirement: "Complete December holiday challenge",
      earners: 2.1,
      timeLimit: "Available until Dec 31"
    }
  ];

  // Mock leaderboard data
  const leaderboardData = {
    weekly: [
      { rank: 1, name: "Sofia Rodriguez", avatar: "👩‍🎓", points: 567, level: "B1", streak: 15, country: "🇲🇽" },
      { rank: 2, name: "Marco Tanaka", avatar: "👨‍💼", points: 523, level: "A2", streak: 22, country: "🇯🇵" },
      { rank: 3, name: "Lisa Mueller", avatar: "👩‍🔬", points: 498, level: "B2", streak: 8, country: "🇩🇪" },
      { rank: 4, name: "Ahmed Hassan", avatar: "👨‍🎨", points: 445, level: "A2", streak: 12, country: "🇪🇬" },
      { rank: 5, name: "Nina Petrov", avatar: "👩‍⚕️", points: 432, level: "B1", streak: 19, country: "🇷🇺" },
      { rank: 6, name: "Carlos Silva", avatar: "👨‍🏫", points: 401, level: "A2", streak: 7, country: "🇧🇷" },
      { rank: 7, name: "Emma Chen", avatar: "👩‍💻", points: 387, level: "A2", streak: 12, country: "🇺🇸", isCurrentUser: true },
      { rank: 8, name: "Pierre Dubois", avatar: "👨‍🍳", points: 365, level: "A1", streak: 25, country: "🇫🇷" },
      { rank: 9, name: "Priya Sharma", avatar: "👩‍💻", points: 342, level: "B1", streak: 14, country: "🇮🇳" },
      { rank: 10, name: "James Wilson", avatar: "👨‍⚖️", points: 298, level: "A2", streak: 6, country: "🇬🇧" }
    ],
    monthly: [
      { rank: 1, name: "Sofia Rodriguez", avatar: "👩‍🎓", points: 2156, level: "B1", streak: 15, country: "🇲🇽" },
      { rank: 2, name: "Marco Tanaka", avatar: "👨‍💼", points: 1987, level: "A2", streak: 22, country: "🇯🇵" },
      { rank: 3, name: "Emma Chen", avatar: "👩‍💻", points: 1823, level: "A2", streak: 12, country: "🇺🇸", isCurrentUser: true }
    ],
    allTime: [
      { rank: 1, name: "Marco Tanaka", avatar: "👨‍💼", points: 15670, level: "B2", streak: 22, country: "🇯🇵" },
      { rank: 2, name: "Sofia Rodriguez", avatar: "👩‍🎓", points: 14523, level: "B1", streak: 15, country: "🇲🇽" },
      { rank: 3, name: "Lisa Mueller", avatar: "👩‍🔬", points: 12890, level: "B2", streak: 8, country: "🇩🇪" }
    ],
    friends: [
      { rank: 1, name: "Alex Kumar", avatar: "👨‍💻", points: 445, level: "A2", streak: 9, country: "🇮🇳", isFriend: true },
      { rank: 2, name: "Emma Chen", avatar: "👩‍💻", points: 387, level: "A2", streak: 12, country: "🇺🇸", isCurrentUser: true },
      { rank: 3, name: "Sarah Johnson", avatar: "👩‍🎨", points: 298, level: "A1", streak: 5, country: "🇨🇦", isFriend: true }
    ]
  };

  const filteredAchievements = selectedCategory === 'all'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-600 border-gray-200';
      case 'uncommon': return 'bg-green-100 text-green-600 border-green-200';
      case 'rare': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'epic': return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'legendary': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const openAchievementModal = (achievement) => {
    setSelectedAchievement(achievement);
    setShowAchievementModal(true);
  };

  const AchievementModal = ({ achievement, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Achievement Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <div className="text-center mb-6">
          <div className="text-6xl mb-3">{achievement.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{achievement.name}</h3>
          <p className="text-gray-600">{achievement.description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Points Reward:</span>
            <span className="font-bold text-lg text-purple-600">+{achievement.points}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Rarity:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRarityColor(achievement.rarity)}`}>
              {achievement.rarity}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Earned by:</span>
            <span className="font-medium">{achievement.earners}% of users</span>
          </div>

          {!achievement.earned && (
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress:</span>
                <span className="font-medium">{achievement.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                  style={{ width: `${achievement.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{achievement.requirement}</p>
            </div>
          )}

          {achievement.earned && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Earned on {achievement.earnedDate}</span>
              </div>
            </div>
          )}

          {achievement.timeLimit && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 text-orange-600">
                <Clock className="w-5 h-5" />
                <span className="text-sm">{achievement.timeLimit}</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            Close
          </button>
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center space-x-2">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Trophy className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{currentUser.achievements}</div>
              <div className="text-sm text-gray-600">Earned</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{currentUser.totalPoints}</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Flame className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{currentUser.streakDays}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Your Achievements</h2>
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search achievements..."
              className="text-sm border border-gray-200 rounded-lg px-3 py-1"
            />
          </div>
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {achievementCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.icon}
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              onClick={() => openAchievementModal(achievement)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${achievement.earned
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex items-center space-x-2">
                  {achievement.earned && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {!achievement.earned && achievement.progress === 0 && <Lock className="w-4 h-4 text-gray-400" />}
                  <span className={`text-xs px-2 py-1 rounded-full border ${getRarityColor(achievement.rarity)}`}>
                    {achievement.rarity}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold mb-1">{achievement.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-600">+{achievement.points} pts</span>
                <span className="text-xs text-gray-500">{achievement.earners}% earned</span>
              </div>

              {!achievement.earned && achievement.progress > 0 && (
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{achievement.progress}% complete</span>
                </div>
              )}

              {achievement.timeLimit && (
                <div className="mt-2 text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">
                  {achievement.timeLimit}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLeaderboards = () => (
    <div className="space-y-6">
      {/* User's Rank Card */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{currentUser.avatar}</div>
            <div>
              <h2 className="text-xl font-bold">{currentUser.name}</h2>
              <p className="opacity-90">Current Rank: #{currentUser.rank}</p>
              <div className="flex items-center space-x-3 mt-1 text-sm opacity-75">
                <span>🏆 {currentUser.weeklyPoints} pts this week</span>
                <span>🔥 {currentUser.streakDays} day streak</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">#{currentUser.rank}</div>
            <div className="text-sm opacity-75">This Week</div>
          </div>
        </div>
      </div>

      {/* Leaderboard Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Leaderboards</h2>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={leaderboardFilter}
              onChange={(e) => setLeaderboardFilter(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-1 text-sm"
            >
              <option value="weekly">This Week</option>
              <option value="monthly">This Month</option>
              <option value="allTime">All Time</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-2">
          {leaderboardData[leaderboardFilter].map((user, index) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${user.isCurrentUser
                  ? 'bg-blue-50 border-2 border-blue-200'
                  : 'bg-gray-50 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8">
                  {user.rank <= 3 ? (
                    <div className={`text-xl ${user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'
                      }`}>
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                    </div>
                  ) : (
                    <span className="font-bold text-gray-600">#{user.rank}</span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{user.avatar}</div>
                  <div>
                    <div className="font-semibold flex items-center space-x-2">
                      <span>{user.name}</span>
                      <span className="text-lg">{user.country}</span>
                      {user.isCurrentUser && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">You</span>
                      )}
                      {user.isFriend && (
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Friend</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span>{user.level} Level</span>
                      <span>🔥 {user.streak} days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold text-purple-600">{user.points}</div>
                <div className="text-xs text-gray-500">points</div>
              </div>
            </div>
          ))}
        </div>

        {/* Competition Info */}
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="font-semibold text-yellow-700">Weekly Competition</span>
          </div>
          <p className="text-sm text-yellow-600 mb-3">
            Top 3 users this week win bonus points and special badges! Competition resets in 3 days.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-yellow-600">🥇 1st Place: +200 bonus points</span>
            <span className="text-yellow-600">🥈 2nd Place: +100 bonus points</span>
            <span className="text-yellow-600">🥉 3rd Place: +50 bonus points</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Achievements & Leaderboards</h1>
            <p className="text-gray-600">Track your progress and compete with fellow learners</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all">
              <Share2 className="w-4 h-4" />
              <span>Share Progress</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeTab === 'achievements'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <Award className="w-5 h-5" />
            <span>Achievements</span>
          </button>
          <button
            onClick={() => setActiveTab('leaderboards')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeTab === 'leaderboards'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            <Trophy className="w-5 h-5" />
            <span>Leaderboards</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'achievements' && renderAchievements()}
      {activeTab === 'leaderboards' && renderLeaderboards()}

      {/* Achievement Modal */}
      {showAchievementModal && selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setShowAchievementModal(false)}
        />
      )}
    </div>
  );
};

export default AchievementLeaderboards;