import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollToTopButton from './ScrollToTop';
import { projects } from '@/constants';

// Define types for your project
interface Project {
  iconUrl: string;
  theme: string;
  name: string;
  description: string;
  link: string;
  color: string; // Add color to each project
}

const CARD_OFFSET = 15; // Increased the offset for more space between cards
const SCALE_FACTOR = 0.07; // Adjusted scaling for a more dynamic effect

const Project: React.FC = () => {
  // Assign a color to each project initially when setting the state
  const initialProjects = projects.map((project, index) => ({
    ...project,
    color: getColor(index), // Assign color based on initial index
  }));

  // Set the initial state with the projects, each having a unique color
  const [cards, setCards] = useState<Project[]>(initialProjects);

  // Function to move the dragged card to the end of the array
  const moveToEnd = (from: number) => {
    setCards((prevCards) => {
      const newCards = move(prevCards, from, prevCards.length - 1);
      return newCards;
    });
  };

  return (
    <div className='p-10 flex flex-col justify-center items-center'>
      <h1 className='text-[#032668] text-6xl mb-10'>Projects</h1>

      <div className='relative flex items-center justify-center h-screen'>
        <ul className='relative w-[500px] h-[500px]' /* Increased container size */>
          {cards.map((project, index) => {
            const canDrag = index === 0;

            return (
              <motion.li
                key={project.name}
                className={`absolute w-[450px] h-[300px] rounded-2xl shadow-xl list-none flex justify-center items-center text-center transition-transform duration-300`}
                style={{
                  backgroundColor: project.color, // Use the color assigned to the project
                  cursor: canDrag ? 'grab' : 'auto',
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: cards.length - index,
                }}
                drag={canDrag ? 'y' : false}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                onDragEnd={() => moveToEnd(index)}
              >
                <div className='p-8 text-white'>
                  <h2 className='text-4xl font-bold'>{project.name}</h2> {/* Larger title */}
                  <p className='mt-4 text-lg'>{project.description}</p> {/* Larger description */}
                  <a
                    href={project.link}
                    className='mt-6 inline-block text-xl text-lightblue underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Project
                  </a>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

// Function to get different colors for each card
const getColor = (index: number): string => {
  const colors = ["#266678", "#cb7c7a", "#36a18b", "#cda35f", "#747474"];
  return colors[index % colors.length]; // Repeat colors if more projects than colors
};

// Utility function to move array items
const move = <T,>(array: T[], from: number, to: number): T[] => {
  const updatedArray = [...array];
  const [movedItem] = updatedArray.splice(from, 1); // Remove the item from 'from' index
  updatedArray.splice(to, 0, movedItem); // Insert the item at 'to' index
  return updatedArray;
};

export default Project;
