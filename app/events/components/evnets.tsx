'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Mock event data
const eventsData = [
  {
    id: 1,
    title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
    image: "/images/eventhero.jpg",
    month: "APR",
    day: "14",
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "K-Pop",
    dayOfWeek: "Weekday"
  },
  {
    id: 2,
    title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
    image: "/images/eventhero.jpg",
    month: "AUG",
    day: "20",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "K-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 3,
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    image: "/images/eventhero.jpg",
    month: "SEP",
    day: "18",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Festival",
    category: "K-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 4,
    title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
    image: "/images/eventhero.jpg",
    month: "APR",
    day: "14",
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "K-Pop",
    dayOfWeek: "Weekday"
  },
  {
    id: 5,
    title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
    image: "/images/eventhero.jpg",
    month: "AUG",
    day: "20",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "K-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 6,
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    image: "/images/eventhero.jpg",
    month: "SEP",
    day: "18",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Festival",
    category: "K-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 7,
    title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
    image: "/images/eventhero.jpg",
    month: "APR",
    day: "14",
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "J-Pop",
    dayOfWeek: "Weekday"
  },
  {
    id: 8,
    title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
    image: "/images/eventhero.jpg",
    month: "AUG",
    day: "20",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "J-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 9,
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    image: "/images/eventhero.jpg",
    month: "SEP",
    day: "18",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Festival",
    category: "J-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 10,
    title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
    image: "/images/eventhero.jpg",
    month: "APR",
    day: "14",
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "C-Pop",
    dayOfWeek: "Weekday"
  },
  {
    id: 11,
    title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
    image: "/images/eventhero.jpg",
    month: "AUG",
    day: "20",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Concert",
    category: "C-Pop",
    dayOfWeek: "Weekend"
  },
  {
    id: 12,
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    image: "/images/eventhero.jpg",
    month: "SEP",
    day: "18",
    description: "Directly seated and inside for you to enjoy the show.",
    type: "Festival",
    category: "C-Pop",
    dayOfWeek: "Weekend"
  }
];

// Filter options
const dayOptions = ["All Days", "Weekday", "Weekend"];
const eventTypeOptions = ["All Types", "Concert", "Festival", "Fan Meeting"];
const categoryOptions = ["Any Category", "K-Pop", "J-Pop", "C-Pop"];

export default function UpcomingEvents() {
  // State for visible items count
  const [visibleItems, setVisibleItems] = useState(6);
  
  // State for filters
  const [dayFilter, setDayFilter] = useState("All Days");
  const [eventTypeFilter, setEventTypeFilter] = useState("All Types");
  const [categoryFilter, setCategoryFilter] = useState("Any Category");
  
  // Filtered events based on selected filters
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  
  // Apply filters
  useEffect(() => {
    let filtered = [...eventsData];
    
    if (dayFilter !== "All Days") {
      filtered = filtered.filter(event => event.dayOfWeek === dayFilter);
    }
    
    if (eventTypeFilter !== "All Types") {
      filtered = filtered.filter(event => event.type === eventTypeFilter);
    }
    
    if (categoryFilter !== "Any Category") {
      filtered = filtered.filter(event => event.category === categoryFilter);
    }
    
    setFilteredEvents(filtered);
    // Reset visible items when filters change
    setVisibleItems(6);
  }, [dayFilter, eventTypeFilter, categoryFilter]);
  
  // Load more events
  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-6 md:mb-0">Upcoming Events</h1>
        
        <div className="flex flex-wrap gap-4">
          {/* Day Filter */}
          <div className="relative">
            <select 
              className="appearance-none bg-gray-100 text-gray-700 py-3 px-6 pr-8 rounded-full focus:outline-none"
              value={dayFilter}
              onChange={(e) => setDayFilter(e.target.value)}
            >
              {dayOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Event Type Filter */}
          <div className="relative">
            <select 
              className="appearance-none bg-gray-100 text-gray-700 py-3 px-6 pr-8 rounded-full focus:outline-none"
              value={eventTypeFilter}
              onChange={(e) => setEventTypeFilter(e.target.value)}
            >
              {eventTypeOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <select 
              className="appearance-none bg-gray-100 text-gray-700 py-3 px-6 pr-8 rounded-full focus:outline-none"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categoryOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.slice(0, visibleItems).map((event) => (
          <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-64 w-full">
              <Image 
                src={event.image} 
                alt={event.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="flex flex-col items-center mr-4">
                  <span className="text-sm font-semibold text-indigo-600 uppercase">{event.month}</span>
                  <span className="text-3xl font-bold text-gray-900">{event.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load More Button */}
      {filteredEvents.length > visibleItems && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={loadMore}
            className="py-3 px-12 border border-indigo-500 text-indigo-500 font-medium rounded-full hover:bg-indigo-50 transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}