
// Import React to resolve React namespace in type definitions
import React from 'react';

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  type: 'math' | 'english';
  grade: string;
}

export interface Method {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}