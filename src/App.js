import React from 'react';
import { PhoneMissed, ArrowRight, CheckCircle, ShieldCheck, TrendingUp, Hexagon } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Global Style for Smooth Scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Hexagon className="h-10 w-10 text-black fill-black" />
              <span className="font-extrabold text-2xl tracking-tight text-black">
                Lone Star <span className="text-zinc-500 font-light">Systems</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-zinc-600 hover:text-black font-medium transition-colors">About Us</a>
              <a href="#how-it-works" className="text-zinc-600 hover:text-black font-medium transition-colors">How it Works</a>
              <a href="#pricing" className="text-zinc-600 hover:text-black font-medium transition-colors">Pricing</a>
            </div>
            <div className="flex items-center">
              <a href="#contact" className="bg-black text-white px-6 py-2.5 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Start 14-Day Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-zinc-800/50 rounded-full px-4 py-1.5 mb-8 border border-zinc-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
              </span>
              <span className="text-sm font-semibold text-zinc-300 tracking-wide uppercase">America's Premier Call Capture Agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Stop Losing $2,000 Jobs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">Voicemail.</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              When you're under a sink, you can't answer the phone. Our AI instantly texts back missed calls, answers questions, and books the job before they call your competitor.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center group shadow-xl shadow-zinc-900/50">
                Claim Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center text-zinc-400 text-sm">
                <ShieldCheck className="h-5 w-5 mr-2 text-zinc-300" />
                No credit card required for trial
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem / Math Section */}
      <div className="bg-white py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">The Brutal Math of Home Services</h2>
            <p className="text-lg text-zinc-600">85% of customers whose calls go unanswered will not leave a voicemail. They simply hang up and call the next business on Google.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 text-center transition-all hover:border-zinc-300 hover:shadow-md">
              <div className="bg-zinc-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneMissed className="h-8 w-8 text-zinc-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">The Missed Call</h3>
              <p className="text-zinc-600">You're busy on a job site. A homeowner with a burst pipe calls, but you can't get to the phone.</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 text-center transition-all hover:border-zinc-300 hover:shadow-md">
              <div className="bg-zinc-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-zinc-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">The Hang Up</h3>
              <p className="text-zinc-600">They hear your voicemail greeting and immediately hang up. It's an emergency, they need an answer now.</p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 text-center transition-all hover:border-zinc-300 hover:shadow-md">
              <div className="bg-zinc-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-zinc-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lost Revenue</h3>
              <p className="text-zinc-600">They call your competitor who answers. You just lost a $1,500+ job because you were doing your job.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-20 bg-zinc-100 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-zinc-500 tracking-widest uppercase mb-2">Our Mission</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6">Built for the Backbone of America.</h3>
          <p className="text-xl text-zinc-600 leading-relaxed mb-6">
            We believe that cutting-edge AI shouldn't be reserved just for Silicon Valley tech companies. The hardworking blue-collar businesses—the plumbers, HVAC technicians, and roofers who keep this country running—deserve access to the exact same powerful automation.
          </p>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Our goal at Lone Star Systems is simple: to bridge the gap between advanced technology and home services. We build custom, intelligent AI systems that handle your front desk, capture every missed call, and book your leads automatically, so you can stay focused on the job site.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-black mb-6">
                We plug the leak in your business.
              </h2>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                Lone Star Systems links directly to your existing phone number. The second a call is missed, our AI goes to work.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-black text-white font-bold text-xl shadow-lg shadow-zinc-300">
                      1
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-black mb-1">Instant Text-Back</h3>
                    <p className="text-zinc-600 text-lg">Within 5 seconds of a missed call, the customer receives a text: "Hey this is John's Plumbing, I'm on a job site! What's the emergency?"</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-black text-white font-bold text-xl shadow-lg shadow-zinc-300">
                      2
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-black mb-1">AI Qualification</h3>
                    <p className="text-zinc-600 text-lg">Our custom-trained AI chats with them, asks for photos of the issue, and answers basic pricing questions.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-black text-white font-bold text-xl shadow-lg shadow-zinc-300">
                      3
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-black mb-1">You Get the Lead</h3>
                    <p className="text-zinc-600 text-lg">You get a summary email of the exact issue, and the customer is told you will call them as soon as you are free. Job saved.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-md mx-auto">
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-300 border-[8px] border-zinc-900 overflow-hidden h-[600px] relative">
                {/* iPhone Status Bar */}
                <div className="bg-zinc-100 px-6 py-2 flex justify-between items-center text-xs font-medium text-black border-b border-zinc-200">
                  <span>9:41</span>
                  <div className="flex space-x-1 items-center">
                    <span>5G</span>
                  </div>
                </div>
                {/* Chat Header */}
                <div className="bg-white px-4 py-3 border-b border-zinc-100 flex items-center justify-center shadow-sm relative z-10">
                  <div className="text-center">
                    <div className="font-semibold text-black">Local Plumber</div>
                  </div>
                </div>
                {/* Chat Body */}
                <div className="bg-zinc-50 h-full p-4 space-y-4 pt-6">
                  <div className="flex justify-end">
                    <div className="bg-black text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%] shadow-sm">
                      Hey this is the automated assistant for Local Plumbing. We saw we just missed your call! I'm under a sink right now, but how can we help?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-zinc-200 text-black rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%]">
                      Hi, my water heater just burst in the garage and there's water everywhere! Do you guys do emergency replacements?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-black text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%] shadow-sm">
                      Yes we do! Go ahead and shut off the main water valve if you can. What is your home address? I'll have the owner call you the second he is free.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-zinc-200 text-black rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%]">
                      We are just down the street on Elm. Thank you, I'll turn it off now and wait for his call.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-black mb-4">Pricing that just makes sense.</h2>
            <p className="text-xl text-zinc-600">If our AI catches just one missed call a month, it pays for itself for the entire year.</p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-black rounded-3xl p-8 text-white shadow-2xl relative transform hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-white text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-zinc-200">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">The "Capture" Plan</h3>
              <p className="text-zinc-400 mb-6">Everything you need to stop losing jobs.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold">$197</span>
                <span className="text-zinc-400">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-zinc-300 mr-3 flex-shrink-0" />
                  <span>Custom-Trained AI Assistant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-zinc-300 mr-3 flex-shrink-0" />
                  <span>Instant Missed Call Text-Back</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-zinc-300 mr-3 flex-shrink-0" />
                  <span>Lead Summary Email Notifications</span>
                </li>
                <li className="flex items-center text-zinc-100 font-semibold">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span>$500 Setup Fee Waived (Limited Time)</span>
                </li>
              </ul>
              
              <a href="#contact" className="block w-full bg-white hover:bg-zinc-200 text-black text-center font-bold py-4 rounded-xl transition-colors shadow-lg">
                Start 14-Day Free Trial
              </a>
              <p className="text-center text-sm text-zinc-500 mt-4">No long-term contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / Contact Section */}
      <div id="contact" className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to stop losing money to your competitors?</h2>
          <p className="text-xl text-zinc-400 mb-10">Join the contractors nationwide who are using AI to book jobs while they sleep. Try it 100% free for 14 days.</p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-6">Request a Demo</h3>
            <form action="https://formspree.io/f/mqewdzov" method="POST" className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Your Name</label>
                <input type="text" name="name" required className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Company Name</label>
                <input type="text" name="company" required className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="John's Plumbing" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Cell Phone</label>
                <input type="tel" name="phone" required className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none" placeholder="(555) 123-4567" />
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-zinc-800 transition-colors mt-4 shadow-md">
                Get My Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Hexagon className="h-6 w-6 text-white fill-white" />
            <span className="font-bold text-xl text-white">Lone Star Systems</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Lone Star Systems. Proudly serving the USA.
          </div>
        </div>
      </footer>
    </div>
  );
} 
