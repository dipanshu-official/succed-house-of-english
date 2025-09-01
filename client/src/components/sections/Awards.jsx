import React from "react";
import { Award, Trophy } from "lucide-react";
import img1 from "../../public/award/img1.jpg";
import img2 from "../../public/award/img2.jpg";
import img3 from "../../public/award/img3.jpg";
import img4 from "../../public/award/img4.jpg";
import img5 from "../../public/award/img5.jpg";
import img6 from "../../public/award/img6.jpg";

export const Awards = () => {
  const students = [
    {
      id: "1",
      name: "Sarah Johnson",
      achievement: "IELTS 8.5 Score",
      course: "IELTS Preparation",
      year: "2024",
      image: img1,
    },
    {
      id: "2",
      name: "Michael Chen",
      achievement: "TOEFL 115/120",
      course: "TOEFL Preparation",
      year: "2024",
      image: img2,
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      achievement: "Cambridge C2 Proficiency",
      course: "Advanced English",
      year: "2023",
      image: img3,
    },
    {
      id: "4",
      name: "James Wilson",
      achievement: "Business English Certification",
      course: "Business English",
      year: "2024",
      image: img4,
    },
    {
      id: "5",
      name: "Priya Patel",
      achievement: "Academic English Excellence",
      course: "Academic Writing",
      year: "2023",
      image: img5,
    },
    {
      id: "6",
      name: "Robert Thompson",
      achievement: "Speaking Fluency Award",
      course: "Conversation Classes",
      year: "2024",
      image: img6,
    },
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Student Success</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Achievers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating the remarkable achievements of our students.
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-orange-500 p-2 rounded-full">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{student.name}</h3>
                <p className="text-orange-600 font-semibold mb-1">
                  {student.achievement}
                </p>
                <p className="text-gray-500 text-sm">
                  {student.course} • {student.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
