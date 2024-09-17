'use client';
import { User, FolderHeart, BookOpen, Phone, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';  
import { motion } from 'framer-motion'; 



import Resume from './Resume';
import Link from 'next/link';
import Image from 'next/image';
import Contact from './Contact';
import About from './About';
import Project from './Project';

const SideBar = () => {
  const [activeSection, setActiveSection] = useState<string | null>('about'); 
  const [collapsed, setCollapsed] = useState(false); 

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Sidebar */}
      <motion.div
        animate={{ width: collapsed ? 80 : 240 }} 
        className="fixed top-0 left-0 z-50 flex flex-col bg-gradient-to-b bg-[#051766] h-screen items-center overflow-hidden shadow-lg"
      >
        {/* Collapse/Expand Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mt-6 p-2 bg-white rounded-full text-[#051766] hover:bg-blue-700 transition-all duration-300"
        >
          {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>

        {/* Logo (only visible if not collapsed) */}
        {!collapsed && (
          <div className="mt-6">
            <Image src="/mlogo.png" alt="Profile Picture" width={300} height={300} className="" />
          </div>
        )}

        {/* Menu Items */}
        <div className={`flex flex-col flex-1 mt-12 space-y-8 ${collapsed ? 'items-center justify-center' : 'items-start px-4'}`}>
          <button
            onClick={() => handleSectionClick('about')}
            className={`flex items-center space-x-3 transition-all duration-300 ${
              activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-400'
            } hover:text-white`}
          >
            <User size={24} />
            {!collapsed && <span className="text-base">About</span>}
          </button>

          <button
            onClick={() => handleSectionClick('resume')}
            className={`flex items-center space-x-3 transition-all duration-300 ${
              activeSection === 'resume' ? 'text-white font-semibold' : 'text-gray-400'
            } hover:text-white`}
          >
            <FolderHeart size={24} />
            {!collapsed && <span className="text-base">Resume</span>}
          </button>

          {/* <button
            onClick={() => handleSectionClick('portfolio')}
            className={`flex items-center space-x-3 transition-all duration-300 ${
              activeSection === 'portfolio' ? 'text-white font-semibold' : 'text-gray-400'
            } hover:text-white`}
          >
            <Lightbulb size={24} />
            {!collapsed && <span className="text-base">Portfolio</span>}
          </button> */}

          <button
            onClick={() => handleSectionClick('Project')}
            className={`flex items-center space-x-3 transition-all duration-300 ${
              activeSection === 'Project' ? 'text-white font-semibold' : 'text-gray-400'
            } hover:text-white`}
          >
            <BookOpen size={24} />
            {!collapsed && <span className="text-base">Projects</span>}
          </button>

          <button
            onClick={() => handleSectionClick('contact')}
            className={`flex items-center space-x-3 transition-all duration-300 ${
              activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-400'
            } hover:text-white`}
          >
            <Phone size={24} />
            {!collapsed && <span className="text-base">Contact</span>}
          </button>

          <button>
            <Link href="/" className="text-gray-400 hover:text-white transition-all duration-300">
              <Home
                size={24}
                className={`inline ${activeSection === 'home' ? 'text-white font-semibold' : ''}`}
              />
              {!collapsed && <span className="text-base ml-3">Home</span>}
            </Link>
          </button>
        </div>
      </motion.div>

      {/* Main content */}
      <div className={`top-0 bottom-0 right-0 overflow-y-auto transition-all duration-500 ${collapsed ? 'ml-[80px]' : 'ml-[240px]'} pt-20`}>
        {activeSection === 'about' && <About />}
        {activeSection === 'resume' && <Resume />}
        {/* {activeSection === 'portfolio' && <Portfolio />} */}
        {activeSection === 'Project' && <Project />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </>
  );
};

export default SideBar;
