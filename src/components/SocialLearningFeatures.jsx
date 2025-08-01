import React, { useState } from 'react';
import {
  Users, MessageCircle, Heart, Share2, Plus, Search, Filter,
  Globe, Lock, Star, Trophy, Flame, BookOpen, Calendar,
  Send, MoreHorizontal, Flag, ThumbsUp, Reply, Award,
  UserPlus, UserMinus, Bell, Settings, Crown, Zap,
  MapPin, Clock, Eye, MessageSquare, Hash, Bookmark,
  Video, Mic, Image, Link, Smile, Camera, Gift, Target
} from 'lucide-react';

const SocialLearningFeatures = () => {
  const [activeTab, setActiveTab] = useState('feed'); // feed, friends, groups, leaderboard, challenges
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // Mock current user
  const currentUser = {
    id: 1,
    name: 'Emma Chen',
    avatar: '👩‍💻',
    level: 'A2',
    streakDays: 12,
    points: 2847,
    country: '🇺🇸',
    learningLanguage: 'Spanish',
    joinDate: '2024-06-15'
  };

  // Mock social feed data
  const socialFeed = [
    {
      id: 1,
      user: { name: 'Sofia Rodriguez', avatar: '👩‍🎓', level: 'B1', country: '🇲🇽' },
      type: 'achievement',
      content: 'Just completed my 30-day streak! 🔥',
      achievement: { name: 'Streak Master', icon: '🔥', points: 200 },
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      user: { name: 'Marco Tanaka', avatar: '👨‍💼', level: 'A2', country: '🇯🇵' },
      type: 'question',
      content: 'Can someone help me understand when to use "ser" vs "estar"? I keep getting confused! 🤔',
      tags: ['grammar', 'spanish', 'help'],
      timestamp: '4 hours ago',
      likes: 12,
      comments: 15,
      isLiked: true,
      isBookmarked: true,
      hasAcceptedAnswer: true
    },
    {
      id: 3,
      user: { name: 'Lisa Mueller', avatar: '👩‍🔬', level: 'B2', country: '🇩🇪' },
      type: 'study_session',
      content: 'Great study session today! Practiced conversation with my language exchange partner.',
      studyStats: { minutes: 45, exercises: 12, accuracy: 89 },
      timestamp: '6 hours ago',
      likes: 18,
      comments: 5,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 4,
      user: { name: 'Ahmed Hassan', avatar: '👨‍🎨', level: 'A2', country: '🇪🇬' },
      type: 'tip',
      content: 'Pro tip: I use Spanish music while commuting to practice listening comprehension. Today I understood 80% of "Manu Chao" lyrics! 🎵',
      tags: ['tips', 'listening', 'music'],
      timestamp: '8 hours ago',
      likes: 35,
      comments: 12,
      isLiked: true,
      isBookmarked: false
    },
    {
      id: 5,
      user: { name: 'Nina Petrov', avatar: '👩‍⚕️', level: 'B1', country: '🇷🇺' },
      type: 'level_up',
      content: 'Finally reached B1 level! 🎉 Time to tackle more complex grammar.',
      previousLevel: 'A2',
      newLevel: 'B1',
      timestamp: '1 day ago',
      likes: 67,
      comments: 22,
      isLiked: true,
      isBookmarked: false
    }
  ];

  // Mock friends data
  const friends = [
    {
      id: 1,
      name: 'Alex Kumar',
      avatar: '👨‍💻',
      level: 'A2',
      country: '🇮🇳',
      streakDays: 9,
      lastActive: '2 hours ago',
      studyBuddy: true,
      commonGoals: ['Business Spanish', 'Grammar']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: '👩‍🎨',
      level: 'A1',
      country: '🇨🇦',
      streakDays: 5,
      lastActive: '1 day ago',
      studyBuddy: false,
      commonGoals: ['Travel Spanish']
    },
    {
      id: 3,
      name: 'Carlos Silva',
      avatar: '👨‍🏫',
      level: 'B1',
      country: '🇧🇷',
      streakDays: 15,
      lastActive: '30 minutes ago',
      studyBuddy: true,
      commonGoals: ['Conversation', 'Culture']
    }
  ];

  // Mock study groups
  const studyGroups = [
    {
      id: 1,
      name: 'Spanish Beginners Unite',
      description: 'Support group for A1-A2 Spanish learners',
      members: 1247,
      avatar: '📚',
      isJoined: true,
      isPrivate: false,
      lastActivity: '15 minutes ago',
      weeklyChallenge: 'Complete 5 grammar exercises',
      tags: ['beginner', 'grammar', 'support'],
      moderator: 'Prof. Garcia'
    },
    {
      id: 2,
      name: 'Business Spanish Pros',
      description: 'Professional Spanish for career advancement',
      members: 834,
      avatar: '💼',
      isJoined: true,
      isPrivate: false,
      lastActivity: '2 hours ago',
      weeklyChallenge: 'Practice 3 business conversations',
      tags: ['business', 'professional', 'conversation'],
      moderator: 'Dr. Martinez'
    },
    {
      id: 3,
      name: 'Spanish Movie Club',
      description: 'Learn through Spanish films and series',
      members: 592,
      avatar: '🎬',
      isJoined: false,
      isPrivate: false,
      lastActivity: '1 hour ago',
      weeklyChallenge: 'Watch one Spanish movie',
      tags: ['culture', 'entertainment', 'listening'],
      moderator: 'Isabella R.'
    },
    {
      id: 4,
      name: 'Medical Spanish Study',
      description: 'Spanish vocabulary for healthcare professionals',
      members: 298,
      avatar: '⚕️',
      isJoined: false,
      isPrivate: true,
      lastActivity: '4 hours ago',
      weeklyChallenge: 'Learn 20 medical terms',
      tags: ['medical', 'vocabulary', 'professional'],
      moderator: 'Dr. Rodriguez'
    }
  ];

  // Mock challenges
  const activeChallenges = [
    {
      id: 1,
      title: 'August Study Streak',
      description: 'Study for 25 consecutive days in August',
      participants: 3247,
      daysLeft: 18,
      progress: 40,
      reward: '250 points + Special Badge',
      isJoined: true,
      category: 'streak'
    },
    {
      id: 2,
      title: 'Vocabulary Master',
      description: 'Learn 100 new words this week',
      participants: 1856,
      daysLeft: 3,
      progress: 67,
      reward: '150 points',
      isJoined: true,
      category: 'vocabulary'
    },
    {
      id: 3,
      title: 'Grammar Champion',
      description: 'Complete 50 grammar exercises with 90%+ accuracy',
      participants: 892,
      daysLeft: 10,
      progress: 0,
      reward: '200 points + Grammar Badge',
      isJoined: false,
      category: 'grammar'
    }
  ];

  const handleLikePost = (postId) => {
    // Mock like functionality
    console.log('Liked post:', postId);
  };

  const handleBookmarkPost = (postId) => {
    // Mock bookmark functionality
    console.log('Bookmarked post:', postId);
  };

  const handleCreatePost = () => {
    if (newPostText.trim()) {
      // Mock create post
      console.log('Creating post:', newPostText);
      setNewPostText('');
      setShowNewPostForm(false);
    }
  };

  const PostCard = ({ post }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{post.user.avatar}</div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{post.user.name}</span>
              <span className="text-lg">{post.user.country}</span>
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                {post.user.level}
              </span>
            </div>
            <div className="text-sm text-gray-500">{post.timestamp}</div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Type Indicator */}
      {post.type === 'achievement' && (
        <div className="flex items-center space-x-2 mb-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-700">Achievement Unlocked!</span>
        </div>
      )}

      {post.type === 'level_up' && (
        <div className="flex items-center space-x-2 mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
          <Star className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Level Up: {post.previousLevel} → {post.newLevel}
          </span>
        </div>
      )}

      {post.type === 'question' && post.hasAcceptedAnswer && (
        <div className="flex items-center space-x-2 mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <MessageCircle className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Question Answered</span>
        </div>
      )}

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>

        {/* Achievement Details */}
        {post.achievement && (
          <div className="mt-3 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{post.achievement.icon}</span>
              <div>
                <div className="font-semibold text-yellow-700">{post.achievement.name}</div>
                <div className="text-sm text-yellow-600">+{post.achievement.points} points</div>
              </div>
            </div>
          </div>
        )}

        {/* Study Session Stats */}
        {post.studyStats && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{post.studyStats.minutes}m</div>
              <div className="text-xs text-gray-600">Study Time</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{post.studyStats.exercises}</div>
              <div className="text-xs text-gray-600">Exercises</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{post.studyStats.accuracy}%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleLikePost(post.id)}
            className={`flex items-center space-x-2 transition-colors ${post.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
          >
            <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm">{post.likes}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-sm">Share</span>
          </button>
        </div>

        <button
          onClick={() => handleBookmarkPost(post.id)}
          className={`transition-colors ${post.isBookmarked ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
            }`}
        >
          <Bookmark className={`w-5 h-5 ${post.isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );

  const FriendCard = ({ friend }) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{friend.avatar}</div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{friend.name}</span>
              <span className="text-lg">{friend.country}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{friend.level}</span>
              <span>•</span>
              <span>🔥 {friend.streakDays} days</span>
            </div>
          </div>
        </div>
        {friend.studyBuddy && (
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
            Study Buddy
          </span>
        )}
      </div>

      <div className="text-sm text-gray-600 mb-3">
        Last active: {friend.lastActive}
      </div>

      <div className="mb-3">
        <div className="text-xs text-gray-500 mb-1">Common Goals:</div>
        <div className="flex flex-wrap gap-1">
          {friend.commonGoals.map((goal, index) => (
            <span key={index} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
              {goal}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition-all">
          Message
        </button>
        <button className="px-3 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all">
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const GroupCard = ({ group }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{group.avatar}</div>
          <div>
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <span>{group.name}</span>
              {group.isPrivate && <Lock className="w-4 h-4 text-gray-400" />}
            </h3>
            <p className="text-gray-600 text-sm">{group.description}</p>
          </div>
        </div>
        {group.isJoined && (
          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
            Joined
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span>{group.members.toLocaleString()} members</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{group.lastActivity}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Weekly Challenge:</div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="text-sm text-yellow-700">{group.weeklyChallenge}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {group.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Moderator: {group.moderator}</span>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${group.isJoined
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
        >
          {group.isJoined ? 'Joined' : 'Join Group'}
        </button>
      </div>
    </div>
  );

  const ChallengeCard = ({ challenge }) => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{challenge.title}</h3>
          <p className="text-gray-600 text-sm">{challenge.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${challenge.category === 'streak' ? 'bg-orange-100 text-orange-600' :
            challenge.category === 'vocabulary' ? 'bg-green-100 text-green-600' :
              'bg-blue-100 text-blue-600'
          }`}>
          {challenge.category}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span>{challenge.participants.toLocaleString()} joined</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>{challenge.daysLeft} days left</span>
        </div>
      </div>

      {challenge.isJoined && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Your Progress</span>
            <span className="font-medium">{challenge.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
              style={{ width: `${challenge.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2">
          <Gift className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">Reward: {challenge.reward}</span>
        </div>
      </div>

      <button
        className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${challenge.isJoined
            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
      >
        {challenge.isJoined ? 'Participating' : 'Join Challenge'}
      </button>
    </div>
  );

  const renderFeed = () => (
    <div className="space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{currentUser.avatar}</div>
          <button
            onClick={() => setShowNewPostForm(true)}
            className="flex-1 text-left px-4 py-3 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-all"
          >
            Share your learning progress...
          </button>
        </div>

        {showNewPostForm && (
          <div className="mt-4 border-t pt-4">
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="What's on your mind? Share a tip, ask a question, or celebrate an achievement!"
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                  <Hash className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                  <Trophy className="w-5 h-5" />
                </button>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowNewPostForm(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreatePost}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Options */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="flex space-x-2 overflow-x-auto">
            {['All Posts', 'Questions', 'Achievements', 'Tips', 'Study Sessions'].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div>
        {socialFeed.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );

  const renderFriends = () => (
    <div className="space-y-6">
      {/* Friends Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Your Learning Network</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Find Friends</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{friends.length}</div>
            <div className="text-sm text-gray-600">Learning Friends</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {friends.filter(f => f.studyBuddy).length}
            </div>
            <div className="text-sm text-gray-600">Study Buddies</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <div className="text-sm text-gray-600">Common Goals</div>
          </div>
        </div>
      </div>

      {/* Search Friends */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for language learners..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex space-x-2 overflow-x-auto">
          {['Same Level', 'Same Goals', 'Same Country', 'Study Buddies', 'Active Today'].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-50 transition-all whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

      {/* Friend Suggestions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Suggested Friends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Maria Gonzalez', avatar: '👩‍🏫', level: 'A2', country: '🇲🇽', reason: 'Same level' },
            { name: 'Pierre Dubois', avatar: '👨‍🍳', level: 'A1', country: '🇫🇷', reason: 'Similar goals' }
          ].map((suggestion, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{suggestion.avatar}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{suggestion.name}</span>
                    <span className="text-lg">{suggestion.country}</span>
                  </div>
                  <div className="text-sm text-gray-500">{suggestion.level} • {suggestion.reason}</div>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-all">
                Add Friend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGroups = () => (
    <div className="space-y-6">
      {/* Groups Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Study Groups</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create Group</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {studyGroups.filter(g => g.isJoined).length}
            </div>
            <div className="text-sm text-gray-600">Joined Groups</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {studyGroups.reduce((sum, g) => g.isJoined ? sum + g.members : sum, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Members</div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search study groups..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Categories</option>
            <option>Beginner</option>
            <option>Business</option>
            <option>Culture</option>
            <option>Grammar</option>
          </select>
        </div>
      </div>

      {/* My Groups */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">My Groups</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {studyGroups.filter(group => group.isJoined).map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>

      {/* Discover Groups */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Discover New Groups</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {studyGroups.filter(group => !group.isJoined).map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderChallenges = () => (
    <div className="space-y-6">
      {/* Challenges Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Learning Challenges</h2>
            <p className="opacity-90">Compete with the community and boost your progress</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{activeChallenges.filter(c => c.isJoined).length}</div>
            <div className="text-sm opacity-75">Active</div>
          </div>
        </div>
      </div>

      {/* My Challenges */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">My Active Challenges</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeChallenges.filter(challenge => challenge.isJoined).map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Available Challenges */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Available Challenges</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeChallenges.filter(challenge => !challenge.isJoined).map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Challenge Leaderboard */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Challenge Leaderboard</h3>
        <div className="space-y-3">
          {[
            { rank: 1, name: 'Sofia Rodriguez', avatar: '👩‍🎓', points: 890, country: '🇲🇽' },
            { rank: 2, name: 'Marco Tanaka', avatar: '👨‍💼', points: 856, country: '🇯🇵' },
            { rank: 3, name: 'Lisa Mueller', avatar: '👩‍🔬', points: 823, country: '🇩🇪' },
            { rank: 4, name: 'Emma Chen', avatar: '👩‍💻', points: 789, country: '🇺🇸', isCurrentUser: true }
          ].map((user) => (
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
                    <span className="text-xl">
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                    </span>
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
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Social Learning</h1>
            <p className="text-gray-600">Connect, learn, and grow together with the community</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
        <div className="grid grid-cols-4 gap-1">
          {[
            { id: 'feed', label: 'Feed', icon: <Globe className="w-5 h-5" /> },
            { id: 'friends', label: 'Friends', icon: <Users className="w-5 h-5" /> },
            { id: 'groups', label: 'Groups', icon: <MessageCircle className="w-5 h-5" /> },
            { id: 'challenges', label: 'Challenges', icon: <Trophy className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'feed' && renderFeed()}
      {activeTab === 'friends' && renderFriends()}
      {activeTab === 'groups' && renderGroups()}
      {activeTab === 'challenges' && renderChallenges()}
    </div>
  );
};

export default SocialLearningFeatures;