import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: "Flutter", level: 95, color: "bg-blue-500" },
  { name: "Kotlin", level: 90, color: "bg-yellow-500" },
  { name: "HTML/CSS", level: 85, color: "bg-cyan-500" },
  { name: "Javascript", level: 75, color: "bg-blue-600" },
  { name: "React", level: 70, color: "bg-purple-500" }
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85, color: "bg-green-500" },
  { name: "Express", level: 80, color: "bg-gray-500" },
  { name: "MongoDB", level: 75, color: "bg-green-600" },
  { name: "MySQL", level: 70, color: "bg-blue-400" },
  { name: "PostgreSQL", level: 65, color: "bg-pink-500" }
];

const otherSkills: Skill[] = [
  { name: "Git/GitHub", level: 85, color: "bg-orange-500" },
  { name: "UI/UX Design", level: 95, color: "bg-indigo-500" },
  { name: "Responsive Design", level: 90, color: "bg-teal-500" },
  { name: "Testing", level: 70, color: "bg-red-500" },
  { name: "Data Structure & Algorithms", level: 90, color: "bg-blue-700" }
];

const SkillBar: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and proficiency levels.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-6 text-center"
            >
              Frontend Development
            </motion.h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-6 text-center"
            >
              Backend Development
            </motion.h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-6 text-center"
            >
              Other Skills
            </motion.h3>
            {otherSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;