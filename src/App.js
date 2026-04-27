import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneMissed, ArrowRight, CheckCircle, ShieldCheck, TrendingUp, Hexagon, ArrowLeft, MessageSquare, Camera, Clock, Star, LayoutDashboard, Globe } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-300 overflow-x-hidden selection:bg-emerald-500/30">
      <style>{`
        html { scroll-behavior: smooth; }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #000; }
        .glass-nav { background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .glass-card { background: rgba(24, 24, 27, 0.4); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.05); }
        .glow-text { text-shadow: 0 0 40px rgba(16, 185, 129, 0.3); }
        .emerald-gradient { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
      `}</style>

      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => setShowPrivacy(false)}
            >
              <Hexagon className="h-10 w-10 text-emerald-500 fill-emerald-500/20 group-hover:fill-emerald-500/40 transition-all duration-300" />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Lone Star <span className="text-zinc-500 font-light">Systems</span>
              </span>
            </div>

            {!showPrivacy && (
              <div className="hidden md:flex space-x-8">
                <a href="#problem" className="text-sm text-zinc-400 hover:text-white font-medium transition-colors">The Problem</a>
                <a href="#features" className="text-sm text-zinc-400 hover:text-white font-medium transition-colors">Features</a>
                <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white font-medium transition-colors">How it Works</a>
                <a href="#pricing" className="text-sm text-zinc-400 hover:text-white font-medium transition-colors">Pricing</a>
              </div>
            )}

            <div className="flex items-center">
              <button 
                onClick={() => {
                  setShowPrivacy(false);
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                }} 
                className="emerald-gradient text-white px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {showPrivacy ? (
          /* PRIVACY POLICY PAGE */
          <motion.div 
            key="privacy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black py-24 min-h-screen relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black -z-10"></div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={() => setShowPrivacy(false)} 
                className="flex items-center text-zinc-400 hover:text-emerald-400 mb-8 transition-colors font-medium group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
              <div className="prose prose-invert max-w-none text-zinc-400 space-y-6 text-lg leading-relaxed">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                <p>Lone Star Systems ("we," "us," or "our") respects your privacy. We only collect information necessary to provide our communication and automation services.</p>
                
                <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Information Collection and Use</h2>
                <p>We collect information you provide directly to us, such as when you fill out a form, request a demo, or communicate with us. This may include your name, company name, email address, and phone number.</p>
                
                <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. SMS & Mobile Data Policy</h2>
                {/* CRITICAL TWILIO COMPLIANCE BLOCK - DO NOT ALTER */}
                <div className="p-6 glass-card rounded-xl border-l-4 border-l-emerald-500 shadow-lg">
                  <p className="font-semibold text-white m-0">
                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Opting Out</h2>
                <p>If you have opted in to receive text messages from us, you can opt out at any time by replying "STOP" to any message you receive. Reply "HELP" for assistance. Message and data rates may apply.</p>
                
                <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us directly through our website form.</p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* MAIN LANDING PAGE CONTENT */
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <div className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black -z-10"></div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                  className="text-center max-w-5xl mx-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 bg-zinc-900/80 rounded-full px-4 py-1.5 mb-8 border border-emerald-500/20 backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">America's Premier Call Capture Agency</span>
                  </motion.div>
                  
                  <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
                    Stop Losing $2,000 Jobs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 glow-text">Voicemail.</span>
                  </motion.h1>
                  
                  <motion.p variants={fadeIn} className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    When you're under a sink or on a roof, you can't answer the phone. Our AI instantly texts back missed calls, answers questions, and books the job before they call your competitor.
                  </motion.p>
                  
                  <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#contact" className="w-full sm:w-auto emerald-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center group">
                      Claim Your Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex items-center text-zinc-400 text-sm font-medium">
                      <ShieldCheck className="h-5 w-5 mr-2 text-emerald-500" />
                      No credit card required
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* The Problem / Math Section */}
            <div id="problem" className="py-24 bg-zinc-950 border-y border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                  className="text-center max-w-3xl mx-auto mb-20"
                >
                  <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Brutal Math of Home Services</motion.h2>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 font-light">85% of customers whose calls go unanswered will not leave a voicemail. They simply hang up and call the next business on Google.</motion.p>
                </motion.div>
                
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                  className="grid md:grid-cols-3 gap-8"
                >
                  <motion.div variants={fadeIn} className="glass-card p-8 rounded-3xl text-center group hover:border-red-500/30 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="bg-zinc-900/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-800 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all">
                      <PhoneMissed className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">The Missed Call</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">You're busy on a job site. A homeowner with a burst pipe calls, but you can't get to the phone.</p>
                  </motion.div>
                  <motion.div variants={fadeIn} className="glass-card p-8 rounded-3xl text-center group hover:border-red-500/30 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="bg-zinc-900/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-800 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all">
                      <ArrowRight className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">The Hang Up</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">They hear your voicemail greeting and immediately hang up. It's an emergency, they need an answer now.</p>
                  </motion.div>
                  <motion.div variants={fadeIn} className="glass-card p-8 rounded-3xl text-center group hover:border-red-500/30 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="bg-zinc-900/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-800 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all">
                      <TrendingUp className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Lost Revenue</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">They call your competitor who answers. You just lost a $1,500+ job because you were doing your job.</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* FEATURES SECTION - THE COOL FACTOR */}
            <div id="features" className="py-32 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                  className="text-center max-w-4xl mx-auto mb-20"
                >
                  <motion.h2 variants={fadeIn} className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-4">Mission Control</motion.h2>
                  <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6">More than an answering service.</motion.h3>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 font-light">A full AI-Powered Mission Control designed to manage your front desk, book leads, and protect your reputation while you work.</motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Feature 1 */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                    <MessageSquare className="h-10 w-10 text-emerald-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">Instant Missed-Call Text Back</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">The second a call drops, the AI texts the customer instantly. "Hey, this is John's Plumbing, I'm under a sink! What's your emergency?"</p>
                  </motion.div>

                  {/* Feature 2 */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                    <Camera className="h-10 w-10 text-cyan-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">Intelligent Lead Qualification</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">The AI chats like a human, asks for photos of the broken pipe or HVAC unit, and answers basic pricing questions automatically.</p>
                  </motion.div>

                  {/* Feature 3 */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                    <Clock className="h-10 w-10 text-blue-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">Smart Follow-Ups</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">If a customer goes quiet, the AI doesn't let the lead die. It automatically follows up hours later to re-engage and secure the job.</p>
                  </motion.div>

                  {/* Feature 4 */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                    <Star className="h-10 w-10 text-yellow-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">Automated Google Reviews</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">24 hours after a job, the AI asks for a review. Good experience? It sends the Google link. Bad experience? It intercepts and alerts you immediately.</p>
                  </motion.div>

                  {/* Feature 5 */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                    <LayoutDashboard className="h-10 w-10 text-purple-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">Master CRM Dashboard</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">Watch the AI chat in real-time. View extracted lead data (Name, Address, Issue) and manage your dispatch board from a gorgeous interface.</p>
                  </motion.div>

                  {/* Feature 6 */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-emerald-400 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-3">Seamless Bilingual Support</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">The AI seamlessly detects and converses in both English and Spanish, opening up entirely new demographics for your business.</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* How It Works (Phone Mockup) */}
            <div id="how-it-works" className="py-24 bg-white text-black relative z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    className="lg:w-1/2"
                  >
                    <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
                      We plug the leak in your business.
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-xl text-zinc-600 mb-12 font-light leading-relaxed">
                      Lone Star Systems links directly to your existing phone number. The second a call is missed, our AI goes to work.
                    </motion.p>
                    
                    <div className="space-y-10">
                      {[
                        { step: 1, title: "Instant Text-Back", desc: "Within 5 seconds of a missed call, the customer receives a personalized text from your AI assistant." },
                        { step: 2, title: "AI Qualification", desc: "Our custom-trained AI chats with them, gathers photos of the issue, and locks down their address." },
                        { step: 3, title: "You Get the Lead", desc: "You get a ping on your CRM dashboard with the exact issue summarized. Job saved, competitor blocked." }
                      ].map((item, i) => (
                        <motion.div variants={fadeIn} key={i} className="flex group cursor-default">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-black text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {item.step}
                            </div>
                          </div>
                          <div className="ml-6 pt-1">
                            <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                            <p className="text-zinc-600 text-lg font-light leading-relaxed">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                    className="lg:w-1/2 w-full max-w-md mx-auto"
                  >
                    <div className="bg-zinc-50 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[10px] border-black overflow-hidden h-[650px] relative">
                      {/* iPhone Status Bar */}
                      <div className="bg-zinc-100/80 backdrop-blur-md px-6 py-3 flex justify-between items-center text-xs font-semibold text-black absolute top-0 w-full z-20">
                        <span>9:41</span>
                        <div className="flex space-x-1.5 items-center">
                          <div className="w-4 h-3 bg-black rounded-sm relative"><div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20"></div></div>
                        </div>
                      </div>
                      {/* Chat Header */}
                      <div className="bg-white px-4 py-4 pt-12 border-b border-zinc-200 flex items-center justify-center shadow-sm relative z-10">
                        <div className="text-center">
                          <div className="font-bold text-black text-lg">Local Plumber AI</div>
                          <div className="text-xs text-emerald-600 font-medium flex items-center justify-center mt-0.5">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                            Online
                          </div>
                        </div>
                      </div>
                      {/* Chat Body */}
                      <div className="bg-zinc-50 h-full p-5 pt-6 space-y-6 overflow-hidden relative">
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="flex justify-end">
                          <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 text-[15px] max-w-[85%] shadow-sm font-medium leading-relaxed">
                            Hey this is the automated assistant for Local Plumbing. We saw we just missed your call! I'm under a sink right now, but how can we help?
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }} className="flex justify-start">
                          <div className="bg-white border border-zinc-200 text-black rounded-2xl rounded-tl-sm px-5 py-3 text-[15px] max-w-[85%] shadow-sm font-medium leading-relaxed">
                            Hi, my water heater just burst in the garage and there's water everywhere! Do you guys do emergency replacements?
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 2.5 }} viewport={{ once: true }} className="flex justify-end">
                          <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 text-[15px] max-w-[85%] shadow-sm font-medium leading-relaxed">
                            Yes we do! Go ahead and shut off the main water valve if you can. What is your home address? I'll have the owner call you the second he is free.
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 3.5 }} viewport={{ once: true }} className="flex justify-start">
                          <div className="bg-white border border-zinc-200 text-black rounded-2xl rounded-tl-sm px-5 py-3 text-[15px] max-w-[85%] shadow-sm font-medium leading-relaxed">
                            We are just down the street on Elm. Thank you, I'll turn it off now.
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Gradient fade at bottom of phone */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-50 to-transparent z-10"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-32 bg-black border-t border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
                  <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Pricing that just makes sense.</motion.h2>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 font-light">If our AI catches just one missed call a month, it pays for itself for the entire year.</motion.p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-lg mx-auto">
                  <div className="bg-zinc-900 rounded-[2rem] p-10 text-white shadow-2xl relative border border-emerald-500/30 overflow-hidden group hover:border-emerald-500/60 transition-colors duration-500">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
                    <div className="absolute -inset-24 bg-emerald-500/10 blur-[80px] -z-10 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
                    
                    <div className="absolute top-0 right-8 transform translate-y-6">
                      <span className="bg-white text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">Most Popular</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">The "Capture" Plan</h3>
                    <p className="text-zinc-400 mb-8 font-light">Everything you need to stop losing jobs.</p>
                    <div className="mb-10">
                      <span className="text-6xl font-extrabold tracking-tight">$197</span>
                      <span className="text-zinc-400 font-medium">/month</span>
                    </div>
                    
                    <ul className="space-y-5 mb-10">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                        <span className="text-zinc-300 font-medium">Full AI Mission Control CRM</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                        <span className="text-zinc-300 font-medium">Instant Missed Call Text-Back</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                        <span className="text-zinc-300 font-medium">Automated Google Reviews</span>
                      </li>
                      <li className="flex items-start text-white font-bold bg-white/5 p-3 rounded-lg border border-white/10">
                        <CheckCircle className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                        <span>$500 Setup Fee Waived (Limited Time)</span>
                      </li>
                    </ul>
                    
                    <a href="#contact" className="block w-full emerald-gradient hover:opacity-90 text-white text-center font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      Start 14-Day Free Trial
                    </a>
                    <p className="text-center text-sm text-zinc-500 mt-5 font-medium">No long-term contracts. Cancel anytime.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA / Contact Section */}
            <div id="contact" className="bg-zinc-950 py-32 border-t border-white/5 relative">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to stop losing money to competitors?</motion.h2>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">Join the contractors nationwide who are using AI to book jobs while they sleep. Try it 100% free for 14 days.</motion.p>
                  
                  <motion.div variants={fadeIn} className="glass-card rounded-[2rem] p-8 md:p-10 max-w-md mx-auto shadow-2xl border border-white/10 text-left">
                    <h3 className="text-2xl font-bold text-white mb-8">Request a Demo</h3>
                    <form action="https://formspree.io/f/mqewdzov" method="POST" className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Your Name</label>
                        <input type="text" name="name" required className="w-full bg-black/50 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-600" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Company Name</label>
                        <input type="text" name="company" required className="w-full bg-black/50 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-600" placeholder="John's Plumbing" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Cell Phone</label>
                        <input type="tel" name="phone" required className="w-full bg-black/50 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-600" placeholder="(555) 123-4567" />
                      </div>
                      <button type="submit" className="w-full emerald-gradient text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all mt-4 text-lg">
                        Get My Free Trial
                      </button>
                      
                      {/* CRITICAL SMS DISCLAIMER - DO NOT ALTER WORDING */}
                      <p className="text-xs text-zinc-500 text-center mt-5 leading-relaxed">
                        By providing your phone number, you agree to receive text messages from Lone Star Systems. Reply STOP to opt out. Message and data rates may apply.
                      </p>
                    </form>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Hexagon className="h-6 w-6 text-emerald-500 fill-emerald-500/20 group-hover:fill-emerald-500/40 transition-all" />
            <span className="font-bold text-xl text-white tracking-tight">Lone Star Systems</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-8 text-sm font-medium">
            <button 
              onClick={() => {
                setShowPrivacy(true);
                window.scrollTo(0, 0);
              }} 
              className="text-zinc-400 hover:text-white transition-colors mb-4 md:mb-0"
            >
              Privacy Policy
            </button>
            <span className="text-zinc-600">&copy; {new Date().getFullYear()} Lone Star Systems. Proudly serving the USA.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
