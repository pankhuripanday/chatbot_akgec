import  { useCallback, useState } from 'react'; 
import { MessageSquare, Mic, Send, FileText, MapPin, Info, Settings, User, Droplet, ThermometerSun, FileQuestion, GraduationCap } from 'lucide-react';


const AquaBotDetailedUI = () => {
  const [activeView, setActiveView] = useState('chat');
  const [messages, setMessages] = useState([
    { text: "Welcome to AquaBot! How can I assist you with groundwater information today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm processing your request. Here's what I found about groundwater in your area...", sender: 'bot' }]);
      }, 1000);
    }
  };

  const renderView = () => {
    switch(activeView) {
      case 'chat':
        return (
          <div className="flex flex-col flex-1">
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white shadow-inner">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask about groundwater..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage} className="p-2 text-white transition duration-150 bg-blue-500 rounded-full hover:bg-blue-600">
                  <Send size={20} />
                </button>
                <button className="p-2 transition duration-150 bg-gray-200 rounded-full hover:bg-gray-300">
                  <Mic size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Groundwater Reports</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {['Water Level Scenario', 'Hydrogeological Assessment', 'Water Quality Analysis', 'Resource Assessment', 'Area Categorization'].map((report, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="mb-2 font-semibold">{report}</h3>
                  <p className="mb-4 text-sm text-gray-600">Comprehensive report on {report.toLowerCase()} for your selected area.</p>
                  <button className="px-4 py-2 text-white transition duration-150 bg-blue-500 rounded hover:bg-blue-600">Generate Report</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'areaInfo':
        return (
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Area Information</h2>
            <div className="p-4 mb-4 bg-white rounded-lg shadow">
              <h3 className="mb-2 font-semibold">Current Location</h3>
              <p className="text-sm text-gray-600">Based on your IP: New Delhi, India</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Water Level', icon: <Droplet size={24} /> },
                { title: 'Hydrogeology', icon: <ThermometerSun size={24} /> },
                { title: 'Water Quality', icon: <FileText size={24} /> },
                { title: 'GW Management', icon: <Settings size={24} /> },
                { title: 'NOC Guidelines', icon: <FileQuestion size={24} /> },
                { title: 'Training Programs', icon: <GraduationCap size={24} /> }
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 space-x-3 bg-white rounded-lg shadow">
                  {item.icon}
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'faq':
        return (
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                "What is groundwater?",
                "How is groundwater level measured?",
                "What factors affect groundwater quality?",
                "How can I obtain a NOC for groundwater extraction?",
                "What are the best practices for groundwater conservation?"
              ].map((question, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="mb-2 font-semibold">{question}</h3>
                  <p className="text-sm text-gray-600">Click to view the answer.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Settings</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="mb-2 font-semibold">Language Preferences</h3>
                <select className="px-2 py-1 border rounded">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                </select>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="mb-2 font-semibold">Notification Settings</h3>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Receive email updates</span>
                </label>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="mb-2 font-semibold">Data Preferences</h3>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Use location data for personalized information</span>
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 p-4 text-white bg-blue-600">
        <h1 className="mb-8 text-2xl font-bold">AquaBot</h1>
        <nav className="space-y-4">
          <button onClick={() => setActiveView('chat')} className="flex items-center w-full space-x-2"><MessageSquare size={20} /> <span>Chat</span></button>
          <button onClick={() => setActiveView('reports')} className="flex items-center w-full space-x-2"><FileText size={20} /> <span>Reports</span></button>
          <button onClick={() => setActiveView('areaInfo')} className="flex items-center w-full space-x-2"><MapPin size={20} /> <span>Area Info</span></button>
          <button onClick={() => setActiveView('faq')} className="flex items-center w-full space-x-2"><Info size={20} /> <span>FAQs</span></button>
          <button onClick={() => setActiveView('settings')} className="flex items-center w-full space-x-2"><Settings size={20} /> <span>Settings</span></button>
        </nav>
      </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="p-4 bg-white shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold capitalize">{activeView}</h2>
            <button className="text-gray-600 transition duration-150 hover:text-gray-800">
              <User size={24} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
};
export default AquaBotDetailedUI;