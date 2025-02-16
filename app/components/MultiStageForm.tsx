"use client";

import { useState } from "react";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import SubmissionSummary from "./SubmissionSummary";

export default function MultiStageForm() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
  });

  const nextStage = () => setStage((prev) => prev + 1);
  const prevStage = () => setStage((prev) => prev - 1);
  const restartForm = () => {
    setFormData({
      fullName: '',
      dateOfBirth: '',
      nationality: '',
      email: '',
      phone: '',
      departureDate: '',
      returnDate: '',
      accommodation: '',
      specialRequests: '',
      healthDeclaration: '',
      emergencyContact: '',
      medicalConditions: '',
    });
    setStage(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setStage(4); // Move to the summary stage
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      {stage === 1 && <StageOne nextStage={nextStage} formData={formData} handleChange={handleChange} />}
      {stage === 2 && <StageTwo nextStage={nextStage} prevStage={prevStage} formData={formData} handleChange={handleChange} />}
      {stage === 3 && <StageThree prevStage={prevStage} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />}
      {stage === 4 && <SubmissionSummary formData={formData} restartForm={restartForm} />}
    </div>
  );
}