import { create } from 'zustand'

interface Course {
  id: string
  title: string
  description: string
  progress: number
  thumbnail: string
}

interface CourseStore {
  courses: Course[]
  currentCourse: Course | null
  isLoading: boolean
  setCourses: (courses: Course[]) => void
  setCurrentCourse: (course: Course | null) => void
  setLoading: (loading: boolean) => void
}

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  currentCourse: null,
  isLoading: false,
  setCourses: (courses) => set({ courses }),
  setCurrentCourse: (currentCourse) => set({ currentCourse }),
  setLoading: (isLoading) => set({ isLoading }),
}))
