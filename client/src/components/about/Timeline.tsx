import React from 'react';

const milestones = [
  {
    year: "2021",
    title: "Création de la Fromagerie",
    description: "Ouverture de notre première fromagerie artisanale à Sfax."
  },
  {
    year: "2022",
    title: "Expansion de la Production",
    description: "Développement de nouvelles gammes de fromages et modernisation des équipements."
  },
  {
    year: "2023",
    title: "Certification Qualité",
    description: "Obtention de certifications qualité et expansion de notre réseau de distribution."
  }
];

export function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Parcours</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les moments clés qui ont façonné notre histoire
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold mb-4">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}