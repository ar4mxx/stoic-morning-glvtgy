import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneMissed, ArrowRight, CheckCircle, ShieldCheck, TrendingUp, Hexagon, ArrowLeft, MessageSquare, Camera, Clock, Star, LayoutDashboard, Globe, Zap, Users, BarChart3, Calendar, Lock, Truck, Bot, Sparkles, DollarSign, Flame, Crown, ChevronDown, ChevronUp, Bell, FileText, Smartphone, Send, Shield, AlertTriangle, RefreshCw } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

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
                <a href="#roi" className="text-sm text-zinc-400 hover:text-white font-medium transition-colors">ROI</a>
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
                Claim Founders Spot
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
                    <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">🔥 3 Founding Member Spots Available</span>
                  </motion.div>
                  
                  <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
                    Stop Losing $2,000 Jobs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 glow-text">Voicemail.</span>
                  </motion.h1>
                  
                  <motion.p variants={fadeIn} className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    When you're under a sink or on a roof, you can't answer the phone. Our AI instantly texts back missed calls, answers questions, and books the job before they call your competitor.
                  </motion.p>
                  
                  <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#contact" className="w-full sm:w-auto emerald-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center group">
                      Claim Your Founders Spot
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex items-center text-zinc-400 text-sm font-medium">
                      <Flame className="h-5 w-5 mr-2 text-orange-500" />
                      Only 3 founding spots — $99/mo locked for life
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* FOUNDERS PROGRAM BANNER */}
            <div className="py-16 bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-cyan-900/10 pointer-events-none"></div>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-[2rem] p-[1px]">
                    <div className="bg-zinc-950 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400"></div>
                      <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                        <div className="flex-1">
                          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                              <Flame className="h-3.5 w-3.5" />
                              Only 3 Spots
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                              Filling fast
                            </span>
                          </motion.div>

                          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                            Join Our Founding 3
                          </motion.h2>

                          <motion.p variants={fadeIn} className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                            We're onboarding our first 3 clients at an exclusive lifetime rate. You'll get white-glove setup, direct access to the founders, and a locked-in price of <span className="text-white font-semibold">$99/mo — forever</span>. In exchange, we ask for honest feedback and a testimonial. Only 3 spots. Once they're gone, they're gone.
                          </motion.p>

                          <motion.div variants={fadeIn} className="grid sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800">
                              <div className="text-2xl font-extrabold text-emerald-400">$99</div>
                              <div className="text-xs text-zinc-500 mt-1">One-time setup <span className="line-through text-zinc-600">$199</span></div>
                            </div>
                            <div className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800">
                              <div className="text-2xl font-extrabold text-emerald-400">30 Days</div>
                              <div className="text-xs text-zinc-500 mt-1">Free trial, fully active</div>
                            </div>
                            <div className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800">
                              <div className="text-2xl font-extrabold text-emerald-400">$99/mo</div>
                              <div className="text-xs text-zinc-500 mt-1">Locked in for life <span className="line-through text-zinc-600">$249</span></div>
                            </div>
                          </motion.div>

                          <motion.div variants={fadeIn} className="flex items-start gap-3 text-sm text-zinc-500 mb-8">
                            <FileText className="h-4 w-4 mt-0.5 flex-shrink-0 text-zinc-600" />
                            <span>Requirements: Written or video testimonial + 2 feedback calls (Week 2 & Week 4 of trial)</span>
                          </motion.div>

                          <motion.div variants={fadeIn}>
                            <a href="#contact" className="inline-flex items-center emerald-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 group">
                              Apply for Founding Membership
                              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </motion.div>
                        </div>

                        <div className="hidden lg:flex flex-col items-center gap-4">
                          <div className="relative">
                            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-emerald-500/20">
                              <div className="w-32 h-32 rounded-full bg-zinc-950 flex items-center justify-center">
                                <div className="text-center">
                                  <Crown className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                                  <div className="text-3xl font-extrabold text-white">3</div>
                                  <div className="text-xs text-zinc-500 font-medium">spots left</div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute -inset-4 rounded-full border border-emerald-500/10 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

            {/* FEATURES SECTION - FULL PLATFORM */}
            <div id="features" className="py-32 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                  className="text-center max-w-4xl mx-auto mb-16"
                >
                  <motion.h2 variants={fadeIn} className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-4">Full Platform — Nothing Locked</motion.h2>
                  <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-6">Everything you need. One plan.</motion.h3>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 font-light">Every feature below is included in the Starter plan. No gated tiers, no upsells — you get the full platform from day one.</motion.p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[
                    { icon: <Bot className="h-4 w-4" />, label: "AI Receptionist", color: "emerald" },
                    { icon: <LayoutDashboard className="h-4 w-4" />, label: "CRM Dashboard", color: "purple" },
                    { icon: <Truck className="h-4 w-4" />, label: "Dispatch", color: "cyan" },
                    { icon: <Zap className="h-4 w-4" />, label: "Automation", color: "yellow" },
                    { icon: <BarChart3 className="h-4 w-4" />, label: "Analytics", color: "blue" },
                    { icon: <Calendar className="h-4 w-4" />, label: "Integrations", color: "teal" },
                    { icon: <Lock className="h-4 w-4" />, label: "Security", color: "red" },
                  ].map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCategory(i)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                        activeCategory === i
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                      }`}
                    >
                      {cat.icon}
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Feature Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* AI Receptionist */}
                    {activeCategory === 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { icon: <MessageSquare className="h-8 w-8 text-emerald-400" />, title: "Missed Call Text-Back", desc: "When a customer calls and you can't answer, the AI instantly texts them back and starts a conversation. No more lost leads." },
                          { icon: <Bot className="h-8 w-8 text-emerald-400" />, title: "Full AI Conversations", desc: "Powered by Google's Gemini AI. Handles the entire customer interaction — from first text to confirmed booking — without you lifting a finger." },
                          { icon: <Camera className="h-8 w-8 text-emerald-400" />, title: "Photo-First Triage", desc: "The AI asks customers to send a photo of their issue before anything else. Your tech shows up knowing exactly what they're walking into." },
                          { icon: <Calendar className="h-8 w-8 text-emerald-400" />, title: "Smart Booking", desc: "The AI collects the customer's name, address, and issue details, then books them into an available time slot automatically." },
                          { icon: <Clock className="h-8 w-8 text-emerald-400" />, title: "After-Hours Emergency Triage", desc: "24/7 coverage. Life-threatening emergencies get routed to 911. Urgent issues get escalated to you. Non-urgent requests get scheduled." },
                          { icon: <Globe className="h-8 w-8 text-emerald-400" />, title: "Bilingual Support", desc: "Conversations happen in English or Spanish automatically. The AI detects the customer's language and responds naturally." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CRM Dashboard */}
                    {activeCategory === 1 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { icon: <MessageSquare className="h-8 w-8 text-purple-400" />, title: "Real-Time Inbox", desc: "See every customer conversation as it happens. Live updates — no refreshing needed." },
                          { icon: <Sparkles className="h-8 w-8 text-purple-400" />, title: "Customer Intelligence", desc: "AI automatically extracts the customer's name, address, issue description, and urgency level from the conversation. Zero manual data entry." },
                          { icon: <Users className="h-8 w-8 text-purple-400" />, title: "Human Takeover", desc: "Pause the AI on any thread and reply manually. Resume AI when you're done. You're always in control." },
                          { icon: <FileText className="h-8 w-8 text-purple-400" />, title: "Internal Notes", desc: "Add private notes to any customer thread. Only you and your team can see them." },
                          { icon: <RefreshCw className="h-8 w-8 text-purple-400" />, title: "Thread Management", desc: "Archive completed conversations, delete old threads, and keep your inbox clean." },
                          { icon: <Smartphone className="h-8 w-8 text-purple-400" />, title: "Mobile-Ready", desc: "Full dashboard works on your phone. Manage your business from anywhere." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dispatch System */}
                    {activeCategory === 2 && (
                      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                          { icon: <Send className="h-8 w-8 text-cyan-400" />, title: "One-Click Tech Dispatch", desc: "When a job is booked, send your technician a full briefing SMS with one click — customer name, address, issue, photo, and appointment time." },
                          { icon: <Users className="h-8 w-8 text-cyan-400" />, title: "Multi-Technician Roster", desc: "Add your whole team. Choose which tech to dispatch for each job." },
                          { icon: <Clock className="h-8 w-8 text-cyan-400" />, title: "Tech Delay Notifications", desc: "Tech running late? One click notifies the customer with an updated ETA. No awkward phone calls needed." },
                          { icon: <Smartphone className="h-8 w-8 text-cyan-400" />, title: "Tech SMS Commands", desc: "Your tech can text \"LATE 15\" from their phone and the customer automatically gets notified." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Automation */}
                    {activeCategory === 3 && (
                      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                          { icon: <Star className="h-8 w-8 text-yellow-400" />, title: "Google Review Automation", desc: "After every completed job, the AI automatically texts the customer asking for a 5-star review with your Google review link. Reviews roll in on autopilot." },
                          { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Lead Nurture Sequences", desc: "If a customer goes quiet mid-conversation, the AI follows up at 15 minutes and 60 minutes. No lead falls through the cracks." },
                          { icon: <Bell className="h-8 w-8 text-yellow-400" />, title: "Pre-Appointment Reminders", desc: "Customers get a text reminder ~1 hour before their technician arrives. Reduces no-shows and \"I forgot\" calls." },
                          { icon: <AlertTriangle className="h-8 w-8 text-yellow-400" />, title: "Escalation Alerts", desc: "If a customer is upset or the AI can't handle something, you get an instant email alert with the full conversation transcript." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Analytics */}
                    {activeCategory === 4 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { icon: <DollarSign className="h-8 w-8 text-blue-400" />, title: "Revenue Pipeline", desc: "Track total pipeline value based on your average ticket size. See exactly how much money the AI is making you." },
                          { icon: <TrendingUp className="h-8 w-8 text-blue-400" />, title: "Conversion Tracking", desc: "See your lead-to-booking conversion rate in real time." },
                          { icon: <Zap className="h-8 w-8 text-blue-400" />, title: "Speed-to-Book", desc: "Know exactly how fast the AI is closing leads — measured in minutes." },
                          { icon: <BarChart3 className="h-8 w-8 text-blue-400" />, title: "7-Day Trend Charts", desc: "Visual charts showing daily leads vs. bookings over the past week." },
                          { icon: <AlertTriangle className="h-8 w-8 text-blue-400" />, title: "Urgency Distribution", desc: "See the breakdown of high, medium, and low urgency jobs coming in." },
                          { icon: <Truck className="h-8 w-8 text-blue-400" />, title: "Service Category Breakdown", desc: "Track which types of jobs (plumbing, HVAC, electrical, etc.) are most common." },
                          { icon: <Users className="h-8 w-8 text-blue-400" />, title: "Tech Workload", desc: "See how dispatches are distributed across your team." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Integrations */}
                    {activeCategory === 5 && (
                      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                          { icon: <Calendar className="h-8 w-8 text-teal-400" />, title: "Google Calendar Sync", desc: "The AI checks your real-time availability before booking. No double-bookings. Customers only see open slots." },
                          { icon: <CheckCircle className="h-8 w-8 text-teal-400" />, title: "Calendar Event Creation", desc: "Every confirmed booking creates a Google Calendar event automatically with all customer details." },
                          { icon: <MessageSquare className="h-8 w-8 text-teal-400" />, title: "Twilio SMS", desc: "Dedicated local phone number in your area code. All texts come from a real local number, not a shortcode." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Reliability & Security */}
                    {activeCategory === 6 && (
                      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                          { icon: <Shield className="h-8 w-8 text-red-400" />, title: "Webhook Security", desc: "Every incoming message is cryptographically verified. No spoofing, no spam." },
                          { icon: <Lock className="h-8 w-8 text-red-400" />, title: "Rate Limiting", desc: "Built-in protection against SMS bombing and abuse." },
                          { icon: <RefreshCw className="h-8 w-8 text-red-400" />, title: "Crash Recovery", desc: "If the AI ever has an issue, the customer gets a graceful fallback message and you get an instant alert. No silent failures." },
                          { icon: <ShieldCheck className="h-8 w-8 text-red-400" />, title: "Duplicate Protection", desc: "Smart idempotency ensures customers never get double-texted, even if the network hiccups." },
                        ].map((f, i) => (
                          <div key={i} className="glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                            <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Feature Count Badge */}
                <div className="text-center mt-12">
                  <span className="inline-flex items-center gap-2 text-sm text-zinc-500 font-medium">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    34 features included — no hidden upgrades
                  </span>
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

            {/* ROI Section */}
            <div id="roi" className="py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/15 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
                  <motion.h2 variants={fadeIn} className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-4">The Numbers Don't Lie</motion.h2>
                  <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Your AI Pays for Itself in the First Week</motion.h3>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <div className="glass-card rounded-[2rem] p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500"></div>

                    {/* The Math */}
                    <div className="space-y-6 mb-10">
                      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
                        <div className="flex items-center gap-3 flex-wrap justify-center">
                          <span className="text-3xl md:text-4xl font-extrabold text-white">8</span>
                          <span className="text-zinc-400 font-light">missed calls/week</span>
                          <span className="text-zinc-600 text-2xl">×</span>
                          <span className="text-3xl md:text-4xl font-extrabold text-white">$250</span>
                          <span className="text-zinc-400 font-light">avg ticket</span>
                          <span className="text-zinc-600 text-2xl">×</span>
                          <span className="text-3xl md:text-4xl font-extrabold text-emerald-400">73%</span>
                          <span className="text-zinc-400 font-light">AI booking rate</span>
                        </div>
                      </div>

                      <div className="border-t border-zinc-800 pt-6">
                        <div className="grid sm:grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-3xl font-extrabold text-white">~6</div>
                            <div className="text-sm text-zinc-500 mt-1">extra jobs/week</div>
                          </div>
                          <div>
                            <div className="text-3xl font-extrabold text-emerald-400">$6,000+</div>
                            <div className="text-sm text-zinc-500 mt-1">recovered revenue/mo</div>
                          </div>
                          <div>
                            <div className="text-3xl font-extrabold text-white">24:1</div>
                            <div className="text-sm text-zinc-500 mt-1">ROI ratio</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5 text-center">
                        <span className="text-zinc-400 font-light">Your investment: </span>
                        <span className="text-white font-bold text-lg">$249/mo</span>
                        <span className="text-zinc-400 font-light"> → pays for itself </span>
                        <span className="text-emerald-400 font-bold">before the first week is over</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 font-light leading-relaxed text-center">
                      The average home service business misses 8+ calls per week. At a $250 average ticket, that's over $6,000 in lost revenue every month. Our AI recovers 73% of those missed opportunities — automatically.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-32 bg-black border-t border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
                  <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">One plan. Everything included.</motion.h2>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 font-light">No tiers, no feature gating. Every client gets the full platform.</motion.p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                  {/* Starter Plan */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                    <div className="bg-zinc-900 rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
                      <div className="absolute top-0 inset-x-0 h-0.5 bg-zinc-700"></div>

                      <h3 className="text-2xl font-bold mb-2">Starter</h3>
                      <p className="text-zinc-400 mb-6 font-light">Everything you need to stop losing jobs.</p>

                      {/* Annual Toggle */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
                        <button
                          onClick={() => setIsAnnual(!isAnnual)}
                          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-emerald-500' : 'bg-zinc-700'}`}
                        >
                          <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>Annual</span>
                        {isAnnual && <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">Save $600</span>}
                      </div>

                      <div className="mb-2">
                        <span className="text-5xl font-extrabold tracking-tight">{isAnnual ? '$199' : '$249'}</span>
                        <span className="text-zinc-400 font-medium">/month</span>
                      </div>
                      {isAnnual && <p className="text-xs text-zinc-500 mb-6">Billed yearly at $2,388/yr</p>}
                      {!isAnnual && <p className="text-xs text-zinc-500 mb-6">&nbsp;</p>}

                      <div className="bg-zinc-800/50 rounded-xl p-3 mb-8 text-center">
                        <span className="text-sm text-zinc-300 font-medium">$199 one-time setup fee</span>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                        {['Full AI Receptionist & CRM', 'Dispatch System & Automation', 'Google Calendar & Review Automation', 'Analytics Dashboard', 'Bilingual Support (EN/ES)', 'Dedicated Local Phone Number'].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="#contact" className="block w-full bg-zinc-800 hover:bg-zinc-700 text-white text-center font-bold text-lg py-4 rounded-xl transition-all">
                        Get Started
                      </a>
                      <p className="text-center text-sm text-zinc-500 mt-4 font-medium">Month-to-month. Cancel anytime.</p>
                    </div>
                  </motion.div>

                  {/* Founders Plan */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
                    <div className="bg-zinc-900 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative border border-emerald-500/40 overflow-hidden group hover:border-emerald-500/60 transition-colors duration-500">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 via-emerald-400 to-cyan-400"></div>
                      <div className="absolute -inset-24 bg-emerald-500/10 blur-[80px] -z-10 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                          <Flame className="h-3 w-3" />
                          Founding Member
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                          3 spots left
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">Founders Program</h3>
                      <p className="text-zinc-400 mb-6 font-light">Exclusive lifetime rate for our first 3 clients.</p>
                      
                      <div className="mb-2">
                        <span className="text-5xl font-extrabold tracking-tight text-emerald-400">$99</span>
                        <span className="text-zinc-400 font-medium">/month</span>
                        <span className="ml-2 text-zinc-600 line-through text-lg">$249</span>
                      </div>
                      <p className="text-xs text-emerald-400 font-semibold mb-6">Locked in for life — 60% off forever</p>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-zinc-800/50 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-white">$99</div>
                          <div className="text-xs text-zinc-500">setup <span className="line-through">$199</span></div>
                        </div>
                        <div className="bg-zinc-800/50 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-white">30 Days</div>
                          <div className="text-xs text-zinc-500">free trial</div>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-6">
                        {['Everything in Starter — full platform', 'White-glove onboarding & setup', 'Direct access to the founders', 'Price locked in forever'].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-start gap-2 text-xs text-zinc-500 mb-8 bg-zinc-800/30 rounded-lg p-3">
                        <FileText className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-zinc-600" />
                        <span>Requires: testimonial + 2 feedback calls</span>
                      </div>
                      
                      <a href="#contact" className="block w-full emerald-gradient hover:opacity-90 text-white text-center font-bold text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        Claim Your Founders Spot
                      </a>
                      <p className="text-center text-sm text-zinc-500 mt-4 font-medium">Only 3 spots. Once filled, this offer is permanently gone.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* CTA / Contact Section */}
            <div id="contact" className="bg-zinc-950 py-32 border-t border-white/5 relative">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to stop losing money to voicemail?</motion.h2>
                  <motion.p variants={fadeIn} className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">Apply for one of our 3 founding member spots. $99/mo locked in for life, 30 days free, white-glove setup.</motion.p>
                  
                  <motion.div variants={fadeIn} className="glass-card rounded-[2rem] p-8 md:p-10 max-w-md mx-auto shadow-2xl border border-white/10 text-left">
                    <h3 className="text-2xl font-bold text-white mb-8">Apply for Founding Membership</h3>
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
                        Apply Now
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
