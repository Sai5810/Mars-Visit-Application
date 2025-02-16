"use client";

import React from 'react';
import { FormData } from "../types";

interface StageTwoProps {
  nextStage: () => void;
  prevStage: () => void;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export default function StageTwo({ nextStage, prevStage, formData, handleChange }: StageTwoProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStage();
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-800">
      <h2 className="text-xl font-bold mb-4">Stage 2: Travel Preferences</h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Departure Date</label>
        <input
          type="date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Return Date</label>
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Accommodation Preference</label>
        <select
          name="accommodation"
          value={formData.accommodation}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="spaceHotel">Space Hotel</option>
          <option value="martianBase">Martian Base</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Special Requests or Preferences</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
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
          Next
        </button>
      </div>
    </form>
  );
}