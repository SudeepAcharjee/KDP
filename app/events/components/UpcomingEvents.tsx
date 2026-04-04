'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, Search } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: "Jimmy Jimmy Aaja Aaja: The Bollywood Easter Party",
    image: "/images/jimmy_jimmy.png",
    month: "APR",
    day: "04",
    year: "2026",
    time: "11:00 PM – 03:00 AM",
    venue: "Two Dots And A Dash, Glasgow",
    description: "Exclusive Bollywood night hosted by Club Bollyistan. Featuring non-stop Bollywood beats, vibrant energy, and the ultimate Easter celebration.",
    type: "Club Night",
    category: "Bollywood",
    link: "https://www.skiddle.com/whats-on/Glasgow/Two-Dots-And-A-Dash/Jimmy-Jimmy-Aaja-Aaja/42292343/"
  },
  {
    id: 2,
    title: "Stirling Bolly Finale",
    image: "/images/event1.jpg",
    month: "APR",
    day: "18",
    year: "2026",
    time: "10:00 PM – 02:30 AM",
    venue: "Fubar, Stirling",
    description: "KDP Studios presents Season Finale Bollywood Night at Fubar! Enjoy Bollywood beats by DJ Radha as we wrap up the season with a bang.",
    type: "Concert",
    category: "Bollywood",
    link: "https://www.skiddle.com"
  }
];

const UpcomingEvents = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    const filtered = eventsData.filter(event => 
      (filter === 'All' || event.category === filter) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [filter, searchTerm]);

  return (
    <section className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 bg-purple-50 rounded-full mb-6 border border-purple-100"
            >
              Tour & Experiences
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight leading-[1.1]"
            >
              Upcoming <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">Legendary</span> Events
            </motion.h1>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                placeholder="Search events..."
                className="w-full bg-zinc-50 border border-zinc-100 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-purple-200 transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex bg-zinc-50 p-1 rounded-full border border-zinc-100 w-full sm:w-auto">
              {['All', 'Bollywood'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${filter === cat ? 'bg-white text-purple-600 shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={event.id}
                className="group flex flex-col md:flex-row bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden hover:border-purple-200 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(168,85,247,0.15)]"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-[40%] aspect-[4/5] md:aspect-auto overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-6 left-6 flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 min-w-[70px]">
                    <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">{event.month}</span>
                    <span className="text-3xl font-black text-white">{event.day}</span>
                    <span className="text-[10px] font-black text-white/50">{event.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 md:p-10 flex flex-col">
                  <div className="mb-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium">
                        <MapPin size={16} className="text-purple-500" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium">
                        <Clock size={16} className="text-purple-500" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-purple-600 transition-all duration-500 group/btn"
                  >
                    Grab Tickets 
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-zinc-400 text-lg font-medium">No events found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
