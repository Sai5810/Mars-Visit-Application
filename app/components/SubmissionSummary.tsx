"use client";

import React from 'react';
import { FormData } from "../types";

interface SubmissionSummaryProps {
  formData: FormData;
  restartForm: () => void;
}

export default function SubmissionSummary({ formData, restartForm }: SubmissionSummaryProps) {
  return (
    <div className="text-gray-800 max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Submission Summary</h2>
      <div className="mb-4">
        <h3 className="font-bold">Personal Information</h3>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
        <p><strong>Nationality:</strong> {formData.nationality}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Travel Preferences</h3>
        <p><strong>Departure Date:</strong> {formData.departureDate}</p>
        <p><strong>Return Date:</strong> {formData.returnDate}</p>
        <p><strong>Accommodation:</strong> {formData.accommodation}</p>
        <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Health and Safety</h3>
        <p><strong>Health Declaration:</strong> {formData.healthDeclaration}</p>
        <p><strong>Emergency Contact:</strong> {formData.emergencyContact}</p>
        <p><strong>Medical Conditions:</strong> {formData.medicalConditions}</p>
      </div>
      <button 
        onClick={restartForm} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Over
      </button>
    </div>
  );
}