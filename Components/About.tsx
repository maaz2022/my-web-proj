import { div, section } from "framer-motion/client";

const About = () => {
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

  return (
    <section>
      {/* Services Section */}
      <div className="p-10 flex justify-center items-center flex-col space-y-10">
        <h1 className="text-[#032668] text-5xl font-semibold">About Me</h1>
        <p className="text-myBlue border-b-4 border-myBlue">Services</p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl">
          {myServices.map((service, index) => (
            <div key={index} className="p-6 flex flex-col items-center text-center space-y-4 bg-white shadow-lg rounded-lg">
              <img src={service.icon} alt={service.title} className="w-16 h-16" />
              <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Process Section */}
      <div className="mt-10 p-10 flex justify-center items-center flex-col space-y-10">
        <p className="text-myBlue border-b-4 border-myBlue">Work Process</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 max-w-5xl">
          {workProcesses.map((work, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <img src={work.icon} alt={work.title} className="w-16 h-16" />
              <h3 className="text-lg font-semibold text-gray-800">{work.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
