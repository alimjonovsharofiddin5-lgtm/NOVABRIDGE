export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  PROFILE: '/api/auth/profile',

  // Courses
  COURSES: '/api/courses',
  COURSE_DETAIL: (id: string) => `/api/courses/${id}`,

  // AI Tutor
  TUTOR_CHAT: '/api/tutor/chat',

  // Marketplace
  MARKETPLACE: '/api/marketplace',
  MARKETPLACE_SELL: '/api/marketplace/sell',

  // University
  UNIVERSITY_RECOMMENDATIONS: '/api/university/recommendations',

  // Jobs
  JOBS: '/api/jobs',
  APPLY_JOB: (id: string) => `/api/jobs/${id}/apply`,
}
