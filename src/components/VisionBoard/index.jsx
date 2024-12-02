import { useState } from "react";
import { Lock, Award,Target, Code, Rocket, CheckCircle } from 'lucide-react';

const VisionBoard = () => {
  const [completedGoals, setCompletedGoals] = useState({
    internshipExcellence: false,
    skillMastery: false,
    networkExpansion: false,
    continuedLearning: false
  });

  const toggleGoal = (goal) => {
    setCompletedGoals(prev => ({
      ...prev,
      [goal] : !prev[goal]
    }))
  };

  const goals = [
    {
      id : 'internshipExcellence',
      icon : <Award className="w-12 h-12 text-blue-600" />,
      title : 'Internship Excellence',
      description : 'Become the top intern, securing MacBook Pro and potential full-time employment',
      details : [
        'Consistently deliver high-quality frontend work',
        'Demonstrate proactive learning and problem-solving',
        'Engage actively in team projects and feedback sessions'
      ]
    },
    {
      id : 'skillMastery',
      icon : <Code className="w-12 h-12 text-green-600" />,
      title : 'Skill Mastery',
      description : 'Deepen frontend development expertise',
      details : [
        'Master React and advanced JavaScript concepts',
        'Improve responsive design and accessibility skills',
        'Learn state management libraries like Redux or Zustand'
      ]
    },
    {
      id : 'networkExpansion',
      icon : <Rocket className="w-12 h-12 text-purple-600" />,
      title : 'Professional Networking',
      description : 'Build meaningful connections in tech',
      details : [
        'Attend at least 3 tech meetups or conferences',
        'Actively contribute to open-source projects',
        'Develop strong relationships with mentors and colleagues'
      ]
    },
    {
      id : 'continuedLearning',
      icon : <Target className="w-12 h-12 text-orange-600"/>,
      title : 'Continuous Learning',
      description : 'Stay ahead in the rapidly evolving tech landscape',
      details : [
        'Complete 2-3 advanced online courses',
        'Create a personal portfolio showcasing diverse projects',
        'Stay updated with latest frontend technologies and trends'
      ]
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">2025 Tech Career Vision Board</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className={`border p-4 rounded-lg transition-all duration-300 ${
              completedGoals[goal.id]
              ? 'bg-green-50 border-green-200'
              : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center mb-3">
              {goal.icon}
              <h2 className="ml-3 text-xl font-semibold">{goal.title}</h2>
            </div>
              <p className="text-gray-600 mb-2">{goal.description}</p>
              <ul className="list-disc list-inside text-gray-700 mb-3">
                {goal.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`w-full py-2 rounded-md transition-colors ${
                  completedGoals[goal.id]
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-blue-500 text-white hover:bg-blue-500'
                }`}
              >
                {completedGoals[goal.id] ? 'Completed' : 'Mark as Goal'}
              </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisionBoard;

