import React, { useState } from 'react';
import './App.css';

// Import all components
import OnboardingFlow from './components/OnboardingFlow';
import DailyLearningDashboard from './components/DailyLearningDashboard';
import SpacedRepetitionSystem from './components/SpacedRepetitionSystem';
import ProgressAnalytics from './components/ProgressAnalytics';
import AchievementLeaderboards from './components/AchievementLeaderboards';
import CourseProgression from './components/CourseProgression';
import AssessmentCertification from './components/AssessmentCertification';
import SettingsPersonalization from './components/SettingsPersonalization';
import SocialLearningFeatures from './components/SocialLearningFeatures';
import AdminInstructorDashboard from './components/AdminInstructorDashboard';

type ViewKey = 'onboarding' | 'dashboard' | 'spaced' | 'analytics' | 'achievements' | 'courses' | 'assessment' | 'settings' | 'social' | 'admin';

const App = () => {
  const [currentView, setCurrentView] = useState<ViewKey>('dashboard');

  const components: Record<ViewKey, { component: React.ReactElement; title: string }> = {
    onboarding: { component: <OnboardingFlow />, title: 'Onboarding' },
    dashboard: { component: <DailyLearningDashboard />, title: 'Dashboard' },
    spaced: { component: <SpacedRepetitionSystem />, title: 'Spaced Repetition' },
    analytics: { component: <ProgressAnalytics />, title: 'Analytics' },
    achievements: { component: <AchievementLeaderboards />, title: 'Achievements' },
    courses: { component: <CourseProgression />, title: 'Courses' },
    assessment: { component: <AssessmentCertification />, title: 'Assessment' },
    settings: { component: <SettingsPersonalization />, title: 'Settings' },
    social: { component: <SocialLearningFeatures />, title: 'Social' },
    admin: { component: <AdminInstructorDashboard />, title: 'Admin' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">LinguaLearn Prototypes</h1>
            <div className="hidden md:flex space-x-1">
              {Object.entries(components).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setCurrentView(key as ViewKey)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === key
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <select
                value={currentView}
                onChange={(e) => setCurrentView(e.target.value as ViewKey)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                {Object.entries(components).map(([key, item]) => (
                  <option key={key} value={key}>{item.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>
      <main className="min-h-screen">
        {components[currentView].component}
      </main>
    </div>
  );
};

export default App;
