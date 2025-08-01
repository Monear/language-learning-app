import React, { useState } from 'react';
import {
  Users, BookOpen, BarChart3, Settings, Plus, Search, Filter,
  Edit3, Trash2, Eye, Download, Upload, Calendar, Bell,
  TrendingUp, TrendingDown, AlertCircle, CheckCircle, Clock,
  Globe, Target, Award, MessageCircle, Star, ChevronRight,
  FileText, Video, Headphones, Mic, Image, Link2, Save,
  RotateCcw, Send, Flag, Shield, CreditCard, Database,
  Zap, Brain, Heart, ThumbsUp, MessageSquare, Share2
} from 'lucide-react';

const AdminInstructorDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock admin/instructor data
  const instructorProfile = {
    name: 'Prof. Maria Garcia',
    role: 'Lead Spanish Instructor',
    avatar: '👩‍🏫',
    courses: 8,
    students: 2847,
    rating: 4.9,
    experience: '15 years'
  };

  const overviewStats = {
    totalStudents: 2847,
    activeStudents: 1923,
    coursesCreated: 8,
    avgCompletion: 78.3,
    avgRating: 4.8,
    totalRevenue: 47892,
    monthlyGrowth: 12.5,
    supportTickets: 23
  };

  const recentActivity = [
    {
      type: 'new_enrollment',
      message: 'Emma Chen enrolled in "Conversational Spanish A2"',
      time: '2 hours ago',
      avatar: '👩‍💻'
    },
    {
      type: 'completion',
      message: 'Marco Tanaka completed "Spanish Fundamentals"',
      time: '4 hours ago',
      avatar: '👨‍💼'
    },
    {
      type: 'review',
      message: 'New 5-star review for "Business Spanish B1"',
      time: '6 hours ago',
      avatar: '⭐'
    },
    {
      type: 'question',
      message: 'Lisa Mueller posted a question in discussion forum',
      time: '8 hours ago',
      avatar: '👩‍🔬'
    }
  ];

  const studentAnalytics = [
    {
      id: 1,
      name: 'Emma Chen',
      avatar: '👩‍💻',
      level: 'A2',
      progress: 68,
      coursesEnrolled: 2,
      lastActive: '2 hours ago',
      studyTime: '47h',
      avgScore: 87,
      streak: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'Marco Tanaka',
      avatar: '👨‍💼',
      level: 'A2',
      progress: 95,
      coursesEnrolled: 3,
      lastActive: '1 day ago',
      studyTime: '89h',
      avgScore: 92,
      streak: 8,
      status: 'completed'
    },
    {
      id: 3,
      name: 'Lisa Mueller',
      avatar: '👩‍🔬',
      level: 'B1',
      progress: 34,
      coursesEnrolled: 1,
      lastActive: '3 days ago',
      studyTime: '23h',
      avgScore: 78,
      streak: 0,
      status: 'at_risk'
    }
  ];

  const courseManagement = [
    {
      id: 1,
      title: 'Spanish Fundamentals',
      level: 'A1',
      students: 1245,
      modules: 12,
      exercises: 156,
      completion: 89,
      rating: 4.8,
      revenue: 15670,
      status: 'published',
      lastUpdated: '2025-01-20'
    },
    {
      id: 2,
      title: 'Conversational Spanish A2',
      level: 'A2',
      students: 856,
      modules: 15,
      exercises: 203,
      completion: 76,
      rating: 4.9,
      revenue: 21400,
      status: 'published',
      lastUpdated: '2025-01-25'
    },
    {
      id: 3,
      title: 'Advanced Grammar B2',
      level: 'B2',
      students: 342,
      modules: 8,
      exercises: 94,
      completion: 65,
      rating: 4.7,
      revenue: 8920,
      status: 'draft',
      lastUpdated: '2025-01-28'
    }
  ];

  const contentLibrary = [
    {
      id: 1,
      title: 'Present Tense Conjugation',
      type: 'video',
      duration: '12:34',
      uses: 45,
      rating: 4.6,
      created: '2024-12-15'
    },
    {
      id: 2,
      title: 'Restaurant Vocabulary',
      type: 'audio',
      duration: '8:21',
      uses: 78,
      rating: 4.8,
      created: '2024-12-20'
    },
    {
      id: 3,
      title: 'Grammar Exercise Set 1',
      type: 'exercise',
      duration: '15 min',
      uses: 123,
      rating: 4.5,
      created: '2025-01-05'
    }
  ];

  const discussionTopics = [
    {
      id: 1,
      title: 'Help with Subjunctive Mood',
      author: 'Emma Chen',
      replies: 8,
      lastActivity: '2 hours ago',
      status: 'open',
      category: 'Grammar'
    },
    {
      id: 2,
      title: 'Best Spanish Movies for Learning',
      author: 'Marco Tanaka',
      replies: 15,
      lastActivity: '1 day ago',
      status: 'resolved',
      category: 'Culture'
    },
    {
      id: 3,
      title: 'Pronunciation Practice Tips',
      author: 'Lisa Mueller',
      replies: 3,
      lastActivity: '3 days ago',
      status: 'open',
      category: 'Speaking'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.totalStudents.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Students</div>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600">+{overviewStats.monthlyGrowth}% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.coursesCreated}</div>
              <div className="text-sm text-gray-600">Courses Created</div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {overviewStats.avgCompletion}% avg completion
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">${overviewStats.totalRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            This month: $8,340
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{overviewStats.avgRating}</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Based on 1,247 reviews
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all flex flex-col items-center space-y-2">
            <Plus className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Create Course</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all flex flex-col items-center space-y-2">
            <Upload className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Upload Content</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all flex flex-col items-center space-y-2">
            <BarChart3 className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">View Analytics</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all flex flex-col items-center space-y-2">
            <MessageCircle className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Moderate Forum</span>
          </button>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-2xl">{activity.avatar}</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Alerts & Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-800">Low engagement detected</p>
                <p className="text-xs text-yellow-600">15 students haven't logged in for 7+ days</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-800">New discussion posts</p>
                <p className="text-xs text-blue-600">8 new posts require moderation</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-green-800">Course milestone reached</p>
                <p className="text-xs text-green-600">"Spanish Fundamentals" hit 1,000 enrollments!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      {/* Student Management Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Student Management</h2>
          <div className="flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              Export Data
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">
              Send Message
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Levels</option>
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B2</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Status</option>
            <option>Active</option>
            <option>At Risk</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Student Analytics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{overviewStats.activeStudents.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mb-2">Active Students</div>
            <div className="text-xs text-gray-500">Last 30 days</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{overviewStats.avgCompletion}%</div>
            <div className="text-sm text-gray-600 mb-2">Avg Completion</div>
            <div className="text-xs text-gray-500">Across all courses</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">147</div>
            <div className="text-sm text-gray-600 mb-2">At Risk Students</div>
            <div className="text-xs text-gray-500">Need attention</div>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Student</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Level</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Progress</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Study Time</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Avg Score</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Last Active</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {studentAnalytics.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{student.avatar}</div>
                      <div>
                        <div className="font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.coursesEnrolled} courses</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                      {student.level}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{student.studyTime}</td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${student.avgScore >= 85 ? 'text-green-600' :
                        student.avgScore >= 70 ? 'text-yellow-600' :
                          'text-red-600'
                      }`}>
                      {student.avgScore}%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{student.lastActive}</td>
                  <td className="py-4 px-6">
                    <span className={`text-xs px-2 py-1 rounded-full ${student.status === 'active' ? 'bg-green-100 text-green-600' :
                        student.status === 'completed' ? 'bg-blue-100 text-blue-600' :
                          'bg-red-100 text-red-600'
                      }`}>
                      {student.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      {/* Course Management Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Course Management</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Course</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{courseManagement.length}</div>
            <div className="text-sm text-gray-600">Total Courses</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {courseManagement.filter(c => c.status === 'published').length}
            </div>
            <div className="text-sm text-gray-600">Published</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {courseManagement.filter(c => c.status === 'draft').length}
            </div>
            <div className="text-sm text-gray-600">Drafts</div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courseManagement.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${course.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                    {course.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">${course.revenue.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Revenue</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span>{course.modules} modules</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-gray-400" />
                <span>{course.exercises} exercises</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gray-400" />
                <span>{course.rating} rating</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Completion Rate</span>
                <span className="font-medium">{course.completion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${course.completion}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Updated: {course.lastUpdated}</span>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-700">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="text-green-600 hover:text-green-700">
                  <BarChart3 className="w-4 h-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-700">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Library */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Content Library</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload Content</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentLibrary.map((content) => (
            <div key={content.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {content.type === 'video' && <Video className="w-5 h-5 text-red-500" />}
                  {content.type === 'audio' && <Headphones className="w-5 h-5 text-green-500" />}
                  {content.type === 'exercise' && <FileText className="w-5 h-5 text-blue-500" />}
                  <span className="text-sm font-medium">{content.type}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <h4 className="font-medium mb-2">{content.title}</h4>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                <div>Duration: {content.duration}</div>
                <div>Uses: {content.uses}</div>
                <div>Rating: {content.rating}</div>
                <div>Created: {content.created}</div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-1 rounded text-xs hover:bg-blue-600 transition-all">
                  Edit
                </button>
                <button className="px-3 py-1 border border-gray-200 text-gray-600 rounded text-xs hover:bg-gray-50 transition-all">
                  <Eye className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Learning Analytics</h2>
          <div className="flex space-x-3">
            <select className="px-4 py-2 border border-gray-200 rounded-lg">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">94.2%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">78.3%</div>
            <div className="text-sm text-gray-600">Avg Completion</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">12.5</div>
            <div className="text-sm text-gray-600">Avg Study Hours</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">85.7%</div>
            <div className="text-sm text-gray-600">Retention Rate</div>
          </div>
        </div>
      </div>

      {/* Engagement Trends */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Student Engagement Trends</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <BarChart3 className="w-12 h-12 mx-auto mb-2" />
            <p>Interactive chart would be displayed here</p>
            <p className="text-sm">Showing daily active users, completion rates, and study time</p>
          </div>
        </div>
      </div>

      {/* Performance Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Course Performance</h3>
          <div className="space-y-4">
            {courseManagement.map((course) => (
              <div key={course.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{course.title}</div>
                  <div className="text-sm text-gray-500">{course.students} students</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="font-medium">{course.completion}%</div>
                    <div className="text-xs text-gray-500">completion</div>
                  </div>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Skill Distribution</h3>
          <div className="space-y-4">
            {[
              { skill: 'Grammar', students: 1847, percentage: 65 },
              { skill: 'Vocabulary', students: 2156, percentage: 76 },
              { skill: 'Speaking', students: 1234, percentage: 43 },
              { skill: 'Listening', students: 1689, percentage: 59 },
              { skill: 'Writing', students: 892, percentage: 31 },
              { skill: 'Reading', students: 1456, percentage: 51 }
            ].map((skill) => (
              <div key={skill.skill} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{skill.skill}</div>
                  <div className="text-sm text-gray-500">{skill.students} students</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="font-medium">{skill.percentage}%</div>
                    <div className="text-xs text-gray-500">engagement</div>
                  </div>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      {/* Community Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Community Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">247</div>
            <div className="text-sm text-gray-600">Active Discussions</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-600">Questions Answered</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">23</div>
            <div className="text-sm text-gray-600">Pending Moderation</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">156</div>
            <div className="text-sm text-gray-600">User Reports</div>
          </div>
        </div>
      </div>

      {/* Discussion Forum */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Discussion Topics</h3>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
              <option>All Categories</option>
              <option>Grammar</option>
              <option>Vocabulary</option>
              <option>Culture</option>
              <option>Speaking</option>
            </select>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
              <option>All Status</option>
              <option>Open</option>
              <option>Resolved</option>
              <option>Flagged</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {discussionTopics.map((topic) => (
            <div key={topic.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{topic.title}</h4>
                  <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                    <span>by {topic.author}</span>
                    <span>•</span>
                    <span>{topic.lastActivity}</span>
                    <span>•</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {topic.category}
                    </span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${topic.status === 'open' ? 'bg-green-100 text-green-600' :
                    topic.status === 'resolved' ? 'bg-blue-100 text-blue-600' :
                      'bg-red-100 text-red-600'
                  }`}>
                  {topic.status}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{topic.replies} replies</span>
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Reply</button>
                  <button className="text-green-600 hover:text-green-700 text-sm">Resolve</button>
                  <button className="text-red-600 hover:text-red-700 text-sm">
                    <Flag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Moderation Queue */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Moderation Queue</h3>
        <div className="space-y-3">
          {[
            { type: 'inappropriate', user: 'John Doe', content: 'Posted inappropriate language in discussion...', time: '2 hours ago' },
            { type: 'spam', user: 'Jane Smith', content: 'Multiple promotional posts detected...', time: '4 hours ago' },
            { type: 'report', user: 'Mike Johnson', content: 'Reported for off-topic posting...', time: '1 day ago' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Flag className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">{item.type}</span>
                  <span className="text-yellow-600">by {item.user}</span>
                </div>
                <p className="text-sm text-yellow-700">{item.content}</p>
                <p className="text-xs text-yellow-600">{item.time}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-all">
                  Approve
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'students', label: 'Students', icon: <Users className="w-5 h-5" /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'community', label: 'Community', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'students': return renderStudents();
      case 'courses': return renderCourses();
      case 'analytics': return renderAnalytics();
      case 'community': return renderCommunity();
      default: return renderOverview();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{instructorProfile.avatar}</div>
            <div>
              <h2 className="font-semibold">{instructorProfile.name}</h2>
              <p className="text-sm text-gray-600">{instructorProfile.role}</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Quick Stats in Sidebar */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Students</span>
              <span className="font-medium">{instructorProfile.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Courses</span>
              <span className="font-medium">{instructorProfile.courses}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Rating</span>
              <span className="font-medium">{instructorProfile.rating} ⭐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeSection}</h1>
            <p className="text-gray-600">
              {activeSection === 'overview' && 'Dashboard overview and quick actions'}
              {activeSection === 'students' && 'Manage and monitor student progress'}
              {activeSection === 'courses' && 'Create and manage your course content'}
              {activeSection === 'analytics' && 'Deep insights into learning performance'}
              {activeSection === 'community' && 'Moderate discussions and community engagement'}
            </p>
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

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminInstructorDashboard;