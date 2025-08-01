# Claude Code Deployment Instructions

## Project: Language Learning App - React Components to Vercel

### Phase 1: Local Setup

```bash
# Create project directory
mkdir language-learning-app
cd language-learning-app

# Initialize React project
npx create-react-app . --template typescript

# Install required dependencies
npm install lucide-react

# Install and configure Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Phase 2: Configure Tailwind

**File: `tailwind.config.js`**
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**File: `src/index.css`** (Replace entire content)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Phase 3: Create Component Files

Create these files in `src/components/` directory:

1. `OnboardingFlow.jsx` - Copy from Claude artifact #1
2. `DailyLearningDashboard.jsx` - Copy from Claude artifact #2  
3. `SpacedRepetitionSystem.jsx` - Copy from Claude artifact #3
4. `ProgressAnalytics.jsx` - Copy from Claude artifact #4
5. `AchievementLeaderboards.jsx` - Copy from Claude artifact #5
6. `CourseProgression.jsx` - Copy from Claude artifact #6
7. `AssessmentCertification.jsx` - Copy from Claude artifact #7
8. `SettingsPersonalization.jsx` - Copy from Claude artifact #8
9. `SocialLearningFeatures.jsx` - Copy from Claude artifact #9
10. `AdminInstructorDashboard.jsx` - Copy from Claude artifact #10

### Phase 4: Create Main App Component

**File: `src/App.js`** (Replace entire content)
```jsx
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

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const components = {
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
                  onClick={() => setCurrentView(key)}
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
                onChange={(e) => setCurrentView(e.target.value)}
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
```

### Phase 5: Test Local Build

```bash
# Test development server
npm start
# Verify all components load without errors

# Test production build
npm run build
# Ensure build completes successfully
```

### Phase 6: Git Repository Setup

```bash
# Initialize git
git init

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
build/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
.vercel
EOF

# Initial commit
git add .
git commit -m "Initial commit: Language Learning App React prototypes

- 10 interactive components
- React + Tailwind CSS + Lucide icons
- Ready for Vercel deployment"
```

### Phase 7: GitHub Repository Creation

```bash
# Create GitHub repository (requires GitHub CLI)
gh repo create language-learning-app --public --description "Interactive Language Learning Platform - React Prototypes"

# Add remote and push
git remote add origin https://github.com/$(gh api user --jq .login)/language-learning-app.git
git branch -M main
git push -u origin main
```

### Phase 8: Vercel Deployment

**Option A: CLI Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

**Option B: GitHub Integration** (Recommended)
1. Go to https://vercel.com
2. Sign up with GitHub account
3. Click "New Project"
4. Import `language-learning-app` repository
5. Use default settings (auto-detected):
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Click "Deploy"

### Phase 9: Verification

```bash
# Verify deployment
curl -I https://language-learning-app.vercel.app
# Should return 200 OK status

# Test key pages
curl -s https://language-learning-app.vercel.app | grep -q "LinguaLearn"
```

### Required Files Summary

**Essential files to create/modify:**
1. `package.json` (auto-generated, verify dependencies)
2. `tailwind.config.js` 
3. `src/index.css`
4. `src/App.js`
5. `src/components/` (10 component files)
6. `.gitignore`

**Commands to execute in sequence:**
1. Project setup (npm create/install)
2. File creation (components + config)
3. Local testing (npm start, npm run build)
4. Git setup (init, commit)
5. GitHub creation (gh repo create)
6. Vercel deployment (vercel CLI or web interface)

**Success criteria:**
- Local dev server runs without errors
- Production build completes successfully  
- Git repository created and pushed
- Vercel deployment accessible via HTTPS
- All 10 components navigable via interface

**Time estimate:** 10-15 minutes for automated execution