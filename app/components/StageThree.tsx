"use client";

import React from 'react';

interface StageThreeProps {
  prevStage: () => void;
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

export default function StageThree({ prevStage, formData, handleChange, handleSubmit }: StageThreeProps) {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className="text-gray-800">
      <h2 className="text-xl font-bold mb-4">Stage 3: Health and Safety</h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Health Declaration</label>
        <select
          name="healthDeclaration"
          value={formData.healthDeclaration}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Emergency Contact Information</label>
        <input
          type="text"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Any Medical Conditions</label>
        <textarea
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button 
          type="button" 
          onClick={prevStage} 
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}