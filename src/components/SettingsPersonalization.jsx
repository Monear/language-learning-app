import React, { useState } from 'react';
import {
  User, Settings, Bell, Globe, Eye, Volume2, Palette,
  Shield, CreditCard, Download, Upload, Smartphone,
  Monitor, Tablet, Moon, Sun, Languages, Accessibility,
  Clock, Calendar, Target, Brain, BookOpen, Users,
  ChevronRight, ChevronDown, Save, RotateCcw, Check,
  AlertCircle, Info, Trash2, Edit3, LogOut
} from 'lucide-react';

const SettingsPersonalization = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [expandedSections, setExpandedSections] = useState({});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Mock user settings state
  const [settings, setSettings] = useState({
    // Profile Settings
    profile: {
      firstName: 'Emma',
      lastName: 'Chen',
      email: 'emma.chen@email.com',
      username: 'emmachen',
      bio: 'Learning Spanish to travel through Latin America!',
      avatar: '👩‍💻',
      country: 'United States',
      timezone: 'America/New_York',
      birthDate: '1992-03-15',
      occupation: 'Software Developer'
    },

    // Learning Preferences
    learning: {
      nativeLanguage: 'en',
      targetLanguage: 'es',
      currentLevel: 'A2',
      learningGoals: ['travel', 'culture', 'career'],
      dailyGoalMinutes: 20,
      preferredStudyTimes: ['morning', 'evening'],
      difficultyPreference: 'adaptive',
      exerciseTypes: ['vocabulary', 'grammar', 'listening', 'speaking'],
      spacedRepetitionEnabled: true,
      adaptiveLearningEnabled: true,
      gamificationEnabled: true
    },

    // Notifications
    notifications: {
      dailyReminders: true,
      streakReminders: true,
      achievementAlerts: true,
      weeklyProgress: true,
      friendActivity: false,
      courseUpdates: true,
      marketingEmails: false,
      reminderTimes: ['09:00', '19:00'],
      quietHours: { start: '22:00', end: '07:00' },
      pushNotifications: true,
      emailNotifications: true,
      smsNotifications: false
    },

    // Accessibility
    accessibility: {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: false,
      screenReaderSupport: false,
      colorBlindSupport: false,
      keyboardNavigation: false,
      audioDescriptions: false,
      subtitlesEnabled: true,
      slowSpeechMode: false,
      visualIndicators: true
    },

    // Appearance
    appearance: {
      theme: 'light',
      colorScheme: 'blue',
      language: 'en',
      dateFormat: 'MM/DD/YYYY',
      timeFormat: '12h',
      currency: 'USD',
      compactMode: false,
      animationsEnabled: true
    },

    // Privacy & Security
    privacy: {
      profileVisibility: 'friends',
      showProgress: true,
      showAchievements: true,
      allowFriendRequests: true,
      shareAnalytics: true,
      twoFactorEnabled: false,
      loginNotifications: true,
      dataDownloadEnabled: true,
      accountDeletionEnabled: true
    },

    // Devices & Sync
    devices: {
      autoSync: true,
      offlineMode: true,
      downloadQuality: 'high',
      storageLimit: '2GB',
      syncFrequency: 'immediate',
      crossDeviceProgress: true,
      cloudBackup: true
    },

    // Subscription
    subscription: {
      plan: 'Premium',
      billingCycle: 'monthly',
      nextBilling: '2025-08-15',
      amount: '$9.99',
      autoRenew: true,
      paymentMethod: '**** 4242',
      invoiceEmail: true
    }
  });

  const settingSections = [
    {
      id: 'profile',
      title: 'Profile',
      icon: <User className="w-5 h-5" />,
      description: 'Personal information and account details'
    },
    {
      id: 'learning',
      title: 'Learning Preferences',
      icon: <Brain className="w-5 h-5" />,
      description: 'Customize your learning experience'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: <Bell className="w-5 h-5" />,
      description: 'Manage alerts and reminders'
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      icon: <Accessibility className="w-5 h-5" />,
      description: 'Adjust for better usability'
    },
    {
      id: 'appearance',
      title: 'Appearance',
      icon: <Palette className="w-5 h-5" />,
      description: 'Themes, colors, and display options'
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: <Shield className="w-5 h-5" />,
      description: 'Control your data and account security'
    },
    {
      id: 'devices',
      title: 'Devices & Sync',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Manage connected devices and syncing'
    },
    {
      id: 'subscription',
      title: 'Subscription',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Billing and plan management'
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const learningGoals = [
    { id: 'travel', name: 'Travel & Tourism', icon: '✈️' },
    { id: 'business', name: 'Business & Career', icon: '💼' },
    { id: 'academic', name: 'Academic Studies', icon: '🎓' },
    { id: 'culture', name: 'Culture & Entertainment', icon: '🎭' },
    { id: 'family', name: 'Family & Friends', icon: '👨‍👩‍👧‍👦' },
    { id: 'certification', name: 'Language Certification', icon: '📜' }
  ];

  const updateSetting = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    setHasUnsavedChanges(true);
  };

  const saveSettings = () => {
    // Mock save operation
    setHasUnsavedChanges(false);
    // Show success notification
  };

  const resetSettings = () => {
    // Mock reset operation
    setHasUnsavedChanges(false);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={settings.profile.firstName}
              onChange={(e) => updateSetting('profile', 'firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={settings.profile.lastName}
              onChange={(e) => updateSetting('profile', 'lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={settings.profile.email}
            onChange={(e) => updateSetting('profile', 'email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            value={settings.profile.bio}
            onChange={(e) => updateSetting('profile', 'bio', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell others about your language learning journey..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              value={settings.profile.country}
              onChange={(e) => updateSetting('profile', 'country', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="United States">🇺🇸 United States</option>
              <option value="Canada">🇨🇦 Canada</option>
              <option value="United Kingdom">🇬🇧 United Kingdom</option>
              <option value="Australia">🇦🇺 Australia</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
            <select
              value={settings.profile.timezone}
              onChange={(e) => updateSetting('profile', 'timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
        <div className="space-y-3">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <Download className="w-4 h-4" />
            <span>Download my data</span>
          </button>
          <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
            <Edit3 className="w-4 h-4" />
            <span>Change password</span>
          </button>
          <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <Trash2 className="w-4 h-4" />
            <span>Delete account</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderLearning = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Language Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Native Language</label>
            <select
              value={settings.learning.nativeLanguage}
              onChange={(e) => updateSetting('learning', 'nativeLanguage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Language</label>
            <select
              value={settings.learning.targetLanguage}
              onChange={(e) => updateSetting('learning', 'targetLanguage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.filter(lang => lang.code !== settings.learning.nativeLanguage).map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Learning Goals</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {learningGoals.map(goal => (
            <button
              key={goal.id}
              onClick={() => {
                const currentGoals = settings.learning.learningGoals;
                const newGoals = currentGoals.includes(goal.id)
                  ? currentGoals.filter(g => g !== goal.id)
                  : [...currentGoals, goal.id];
                updateSetting('learning', 'learningGoals', newGoals);
              }}
              className={`p-3 border-2 rounded-lg text-left transition-all ${settings.learning.learningGoals.includes(goal.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="text-2xl mb-1">{goal.icon}</div>
              <div className="text-sm font-medium">{goal.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Study Preferences</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Daily Study Goal: {settings.learning.dailyGoalMinutes} minutes
            </label>
            <input
              type="range"
              min="5"
              max="120"
              step="5"
              value={settings.learning.dailyGoalMinutes}
              onChange={(e) => updateSetting('learning', 'dailyGoalMinutes', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5 min</span>
              <span>60 min</span>
              <span>120 min</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Study Times</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['morning', 'midday', 'afternoon', 'evening', 'night'].map(time => (
                <button
                  key={time}
                  onClick={() => {
                    const currentTimes = settings.learning.preferredStudyTimes;
                    const newTimes = currentTimes.includes(time)
                      ? currentTimes.filter(t => t !== time)
                      : [...currentTimes, time];
                    updateSetting('learning', 'preferredStudyTimes', newTimes);
                  }}
                  className={`p-2 text-sm border rounded-lg transition-all capitalize ${settings.learning.preferredStudyTimes.includes(time)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Adaptive Learning</label>
              <button
                onClick={() => updateSetting('learning', 'adaptiveLearningEnabled', !settings.learning.adaptiveLearningEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.learning.adaptiveLearningEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.learning.adaptiveLearningEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Spaced Repetition</label>
              <button
                onClick={() => updateSetting('learning', 'spacedRepetitionEnabled', !settings.learning.spacedRepetitionEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.learning.spacedRepetitionEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.learning.spacedRepetitionEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Gamification Features</label>
              <button
                onClick={() => updateSetting('learning', 'gamificationEnabled', !settings.learning.gamificationEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.learning.gamificationEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.learning.gamificationEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>

        <div className="space-y-4">
          {[
            { key: 'dailyReminders', label: 'Daily Study Reminders', desc: 'Get reminded to practice daily' },
            { key: 'streakReminders', label: 'Streak Alerts', desc: 'Notifications when your streak is at risk' },
            { key: 'achievementAlerts', label: 'Achievement Notifications', desc: 'Celebrate when you earn new achievements' },
            { key: 'weeklyProgress', label: 'Weekly Progress Summary', desc: 'Weekly reports on your learning progress' },
            { key: 'friendActivity', label: 'Friend Activity', desc: 'Updates on what your friends are learning' },
            { key: 'courseUpdates', label: 'Course Updates', desc: 'New content and course announcements' },
            { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Product updates and promotional content' }
          ].map(notification => (
            <div key={notification.key} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{notification.label}</div>
                <div className="text-sm text-gray-500">{notification.desc}</div>
              </div>
              <button
                onClick={() => updateSetting('notifications', notification.key, !settings.notifications[notification.key])}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 ${settings.notifications[notification.key] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.notifications[notification.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Reminder Schedule</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reminder Times</label>
            <div className="grid grid-cols-2 gap-3">
              {settings.notifications.reminderTimes.map((time, index) => (
                <input
                  key={index}
                  type="time"
                  value={time}
                  onChange={(e) => {
                    const newTimes = [...settings.notifications.reminderTimes];
                    newTimes[index] = e.target.value;
                    updateSetting('notifications', 'reminderTimes', newTimes);
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quiet Hours</label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">From</label>
                <input
                  type="time"
                  value={settings.notifications.quietHours.start}
                  onChange={(e) => updateSetting('notifications', 'quietHours', {
                    ...settings.notifications.quietHours,
                    start: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Until</label>
                <input
                  type="time"
                  value={settings.notifications.quietHours.end}
                  onChange={(e) => updateSetting('notifications', 'quietHours', {
                    ...settings.notifications.quietHours,
                    end: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccessibility = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Visual Accessibility</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
            <select
              value={settings.accessibility.fontSize}
              onChange={(e) => updateSetting('accessibility', 'fontSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>

          <div className="space-y-3">
            {[
              { key: 'highContrast', label: 'High Contrast Mode', desc: 'Increase contrast for better visibility' },
              { key: 'reducedMotion', label: 'Reduced Motion', desc: 'Minimize animations and transitions' },
              { key: 'colorBlindSupport', label: 'Color Blind Support', desc: 'Use patterns in addition to colors' },
              { key: 'visualIndicators', label: 'Enhanced Visual Indicators', desc: 'Additional visual cues for interactions' }
            ].map(option => (
              <div key={option.key} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.desc}</div>
                </div>
                <button
                  onClick={() => updateSetting('accessibility', option.key, !settings.accessibility[option.key])}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 ${settings.accessibility[option.key] ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.accessibility[option.key] ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Audio & Navigation</h3>

        <div className="space-y-3">
          {[
            { key: 'screenReaderSupport', label: 'Screen Reader Support', desc: 'Optimize for screen reading software' },
            { key: 'keyboardNavigation', label: 'Keyboard Navigation', desc: 'Navigate using keyboard shortcuts' },
            { key: 'audioDescriptions', label: 'Audio Descriptions', desc: 'Detailed audio descriptions for visual content' },
            { key: 'subtitlesEnabled', label: 'Subtitles', desc: 'Show subtitles for all audio content' },
            { key: 'slowSpeechMode', label: 'Slow Speech Mode', desc: 'Play audio at reduced speed' }
          ].map(option => (
            <div key={option.key} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.desc}</div>
              </div>
              <button
                onClick={() => updateSetting('accessibility', option.key, !settings.accessibility[option.key])}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 ${settings.accessibility[option.key] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.accessibility[option.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Theme & Display</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'light', label: 'Light', icon: <Sun className="w-5 h-5" /> },
                { value: 'dark', label: 'Dark', icon: <Moon className="w-5 h-5" /> },
                { value: 'auto', label: 'Auto', icon: <Monitor className="w-5 h-5" /> }
              ].map(theme => (
                <button
                  key={theme.value}
                  onClick={() => updateSetting('appearance', 'theme', theme.value)}
                  className={`p-3 border-2 rounded-lg flex flex-col items-center space-y-2 transition-all ${settings.appearance.theme === theme.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {theme.icon}
                  <span className="text-sm font-medium">{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color Scheme</label>
            <div className="grid grid-cols-4 gap-3">
              {[
                { value: 'blue', color: 'bg-blue-500' },
                { value: 'green', color: 'bg-green-500' },
                { value: 'purple', color: 'bg-purple-500' },
                { value: 'orange', color: 'bg-orange-500' }
              ].map(scheme => (
                <button
                  key={scheme.value}
                  onClick={() => updateSetting('appearance', 'colorScheme', scheme.value)}
                  className={`h-12 rounded-lg border-2 transition-all ${scheme.color} ${settings.appearance.colorScheme === scheme.value
                      ? 'border-gray-800 ring-2 ring-gray-300'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interface Language</label>
            <select
              value={settings.appearance.language}
              onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Format Preferences</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
            <select
              value={settings.appearance.dateFormat}
              onChange={(e) => updateSetting('appearance', 'dateFormat', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
            <select
              value={settings.appearance.timeFormat}
              onChange={(e) => updateSetting('appearance', 'timeFormat', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="12h">12 Hour</option>
              <option value="24h">24 Hour</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDevices = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Connected Devices</h3>

        <div className="space-y-3">
          {[
            { name: 'iPhone 14 Pro', type: 'mobile', lastSync: '2 minutes ago', active: true },
            { name: 'MacBook Pro', type: 'desktop', lastSync: '1 hour ago', active: false },
            { name: 'iPad Air', type: 'tablet', lastSync: '2 days ago', active: false }
          ].map((device, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg">
                  {device.type === 'mobile' && <Smartphone className="w-5 h-5 text-gray-600" />}
                  {device.type === 'desktop' && <Monitor className="w-5 h-5 text-gray-600" />}
                  {device.type === 'tablet' && <Tablet className="w-5 h-5 text-gray-600" />}
                </div>
                <div>
                  <div className="font-medium">{device.name}</div>
                  <div className="text-sm text-gray-500">Last sync: {device.lastSync}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {device.active && (
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</span>
                )}
                <button className="text-red-600 hover:text-red-700 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Sync Settings</h3>

        <div className="space-y-4">
          {[
            { key: 'autoSync', label: 'Auto Sync', desc: 'Automatically sync progress across devices' },
            { key: 'offlineMode', label: 'Offline Mode', desc: 'Download content for offline access' },
            { key: 'crossDeviceProgress', label: 'Cross-Device Progress', desc: 'Sync learning progress between devices' },
            { key: 'cloudBackup', label: 'Cloud Backup', desc: 'Backup your data to the cloud' }
          ].map(option => (
            <div key={option.key} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.desc}</div>
              </div>
              <button
                onClick={() => updateSetting('devices', option.key, !settings.devices[option.key])}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 ${settings.devices[option.key] ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.devices[option.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Download Quality</label>
          <select
            value={settings.devices.downloadQuality}
            onChange={(e) => updateSetting('devices', 'downloadQuality', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="low">Low (Saves space)</option>
            <option value="medium">Medium (Balanced)</option>
            <option value="high">High (Best quality)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderSubscription = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Premium Plan</h2>
            <p className="opacity-90">Unlock all features and content</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{settings.subscription.amount}</div>
            <div className="text-sm opacity-75">/month</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Billing Information</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Current Plan</span>
            <span className="font-medium">{settings.subscription.plan}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Billing Cycle</span>
            <span className="font-medium capitalize">{settings.subscription.billingCycle}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Next Billing</span>
            <span className="font-medium">{settings.subscription.nextBilling}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Payment Method</span>
            <span className="font-medium">{settings.subscription.paymentMethod}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-600">Auto Renewal</span>
            <button
              onClick={() => updateSetting('subscription', 'autoRenew', !settings.subscription.autoRenew)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.subscription.autoRenew ? 'bg-blue-600' : 'bg-gray-200'
                }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.subscription.autoRenew ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Manage Subscription</h3>

        <div className="space-y-3">
          <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
            <div className="font-medium">Change Payment Method</div>
            <div className="text-sm text-gray-500">Update your credit card or payment info</div>
          </button>

          <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
            <div className="font-medium">Download Invoices</div>
            <div className="text-sm text-gray-500">View and download billing history</div>
          </button>

          <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
            <div className="font-medium">Change Plan</div>
            <div className="text-sm text-gray-500">Upgrade, downgrade, or switch billing cycle</div>
          </button>

          <button className="w-full text-left p-3 border border-red-200 rounded-lg hover:bg-red-50 transition-all text-red-600">
            <div className="font-medium">Cancel Subscription</div>
            <div className="text-sm">Stop recurring payments</div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'profile': return renderProfile();
      case 'learning': return renderLearning();
      case 'notifications': return renderNotifications();
      case 'accessibility': return renderAccessibility();
      case 'appearance': return renderAppearance();
      case 'privacy': return renderProfile(); // Could implement separate privacy section
      case 'devices': return renderDevices();
      case 'subscription': return renderSubscription();
      default: return renderProfile();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Customize your learning experience</p>
          </div>

          {hasUnsavedChanges && (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-orange-600">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">Unsaved changes</span>
              </div>
              <button
                onClick={resetSettings}
                className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
              <button
                onClick={saveSettings}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
            <nav className="space-y-1">
              {settingSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-all flex items-center space-x-3 ${activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {section.icon}
                  <div className="flex-1">
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs text-gray-500">{section.description}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPersonalization;