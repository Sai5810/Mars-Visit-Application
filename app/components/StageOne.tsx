"use client";

import React from 'react';
import { FormData } from "../types";

interface StageOneProps {
  nextStage: () => void;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StageOne: React.FC<StageOneProps> = ({ nextStage, formData, handleChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStage();
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-800">
      <h2 className="text-xl font-bold mb-4">Stage 1: Personal Information</h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Nationality</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </form>
  );
};

export default StageOne;