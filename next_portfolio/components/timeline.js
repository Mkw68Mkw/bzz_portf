'use client'
import React from 'react';
import { motion } from "framer-motion"

const Timeline = () => {
  const experiences = [
    {
      date: "2023 - 2026",
      title: "Informatikmittelschule",
      subtitle: "Kantonsschule Hottingen",
      description: "Applikationentwicklung, Webentwicklung, Datenbanken, Netzwerktechnik"
    },
    {
      date: "2020 - 2023",
      title: "Langgymnasium, Profil Wirtschaft und Recht",
      subtitle: "Kantonsschule Zürich Nord",
      description: "2 Jahre Untergymnasium, breites Grundlagenwissen in Naturwissenschaften, sowie Latein, 1 Jahr Oberstufe mit Wirtschaft und Recht als Profil"
    },
    {
      date: "2015 - 2019",
      title: "Eishockey ZSC Nachwuchs",
      subtitle: "Zürich, Switzerland",
      description: "Spielte als Stürmer, lernte Teamwork und Führungskompetenz kennen"
    },
    // Add more experiences as needed
  ];

  return (
    <div className="relative max-w-2xl mx-auto py-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative mb-8 pl-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="font-bold mb-2">{exp.date}</div>
          <div className="bg-blue-600 text-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <h4 className="text-md">{exp.subtitle}</h4>
            <p className="mt-2">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
