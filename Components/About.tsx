import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const About = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const myServices = [
    {
      icon: '/web.svg',
      title: 'Website Development',
      description: 'I built a responsive web application using Next.Js, React.Js etc.. It features a clean design, optimized performance, and a smooth user experience across devices. The project focuses on delivering both functionality and aesthetic appeal.'
    },
    {
      icon: '/solver.svg',
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges and finding efficient solutions through critical thinking and programming. With a strong foundation in algorithms and data structures, I have successfully solved various technical problems, optimizing code for performance and scalability.'
    },
    {
      icon: '/desktop.svg',
      title: 'Desktop Application Dev',
      description: 'I developed desktop applications using Java (JFrame) and C# (Windows Forms), focusing on creating intuitive and user-friendly interfaces. My projects include custom functionality, efficient data handling, and seamless performance, providing solutions for real-world tasks.'
    },
    {
      icon: '/writer.svg',
      title: 'Report Writer',
      description: 'I have strong experience in writing detailed, well-researched reports, presenting complex information in a clear and structured format. My reports focus on data-driven insights, accuracy, and clarity, catering to both technical and non-technical audiences.'
    }
  ];

  const workProcesses = [
    { icon: '/message.svg', title: 'Communication' },
    { icon: '/idea.svg', title: 'Idea & Planning' },
    { icon: '/design.svg', title: 'Design' },
    { icon: '/develop.svg', title: 'Development' },
    { icon: '/test.svg', title: 'Testing' },
    { icon: '/launch.svg', title: 'Launch' }
  ];

  const hobbies = [
    { icon: '/knight.svg', title: 'Chess' },
    { icon: '/game.svg', title: 'Video Games' },
    { icon: '/plane.svg', title: 'Travelling' },
    { icon: '/football.svg', title: 'Football' },
    { icon: '/camera.svg', title: 'Photography' },
    { icon: '/music.svg', title: 'Music Lover' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const [text] = useTypewriter({
    words: ['React.js Developer', 'SQL Database Expert', 'Web App Enthusiast','Next.js Developer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section initial="hidden" animate="visible">
      {/* Services Section */}
      <motion.div className="p-10 flex justify-center items-center flex-col space-y-10" variants={fadeIn}>
        <h1 className="text-[#032668] text-6xl">About Me</h1>
        <h1 className='text-3xl '>HI, My name is <span className='font-LuckiestGuy text-blue-900'>Muhammad Maaz</span></h1>
        <h2 className="text-xl font-semibold text-myBlue mt-4">{text}<Cursor /></h2>
        <p className="text-myBlue border-b-4 border-myBlue font-LuckiestGuy">Services</p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl cursor-pointer" variants={slideUp}>
          {myServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 flex flex-col items-center text-center space-y-4 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16" />
              <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Work Process Section */}
      <motion.div className="mt-10 p-10 flex justify-center items-center flex-col space-y-10 bg-blue-50" variants={fadeIn}>
        <p className="text-myBlue border-b-4 border-myBlue font-LuckiestGuy">Work Process</p>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-10 max-w-5xl" variants={slideUp}>
          {workProcesses.map((work, index) => (
            <motion.div key={index} className="flex flex-col items-center text-center space-y-4">
              <img src={work.icon} alt={work.title} className="w-16 h-16" />
              <h3 className="text-lg font-semibold text-gray-800">{work.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Proud To Work With */}
      <motion.div className="mt-10 p-10 flex justify-center items-center flex-col space-y-10" variants={fadeIn}>
        <p className="text-myBlue border-b-4 border-myBlue font-LuckiestGuy">Proud To Work With</p>
        <Image
          src='/scripter.png'
          alt='Scripter Logo'
          width={400}
          height={200}
          className="shadow-md px-8 py-2"
        />
      </motion.div>

      {/* Fun Fact Section */}
      <motion.div className="mt-10 p-10 flex justify-center items-center flex-col space-y-10 bg-blue-50 cursor-pointer" variants={fadeIn}>
        <p className="text-myBlue border-b-4 border-myBlue font-LuckiestGuy">Fun Fact</p>
        <motion.div className="flex justify-center items-center gap-24 text-center" variants={slideUp}>
          {hobbies.map((hobby, index) => (
            <motion.div key={index} className="flex items-center flex-col space-y-3" whileHover={{ scale: 1.1 }}>
              <img src={hobby.icon} alt={hobby.title} className="w-16 h-16" />
              <h3 className="text-lg font-semibold text-gray-800">{hobby.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={handleScrollTop}
          className="fixed bottom-10 right-10 bg-myBlue text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          Back To Top
        </motion.button>
      )}

      <motion.div className='flex justify-center items-center mt-4 h-24'>
        <p className='text-myBlue'>Copyright @ 2024 By <span className='text-myBlue font-bold'>Muhammad Maaz</span></p>
      </motion.div>
    </motion.section>
  );
};

export default About;
