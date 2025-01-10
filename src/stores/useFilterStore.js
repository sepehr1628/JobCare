import { create } from "zustand";

const useFilterStore = create(() => ({
  marketFilters: {
    brand: ["Asus", "Apple", "Acer", "HP", "Lenovo"],
    category: ["mobile", "laptop"],
  },
  freelancerFilters: {
    skills: ["Front-end", "Back-end", "DevOps", "Linux", "Network"],
    level: ["Senior", "Mid-level", "Junior"],
  },
  projectFilters: {
    level: ["beginner", "Intemediate", "Advanced"],
    category: ["Seo", "Back-end", "DevOps", "Web design", "Network Marketing"],
  },
  filterSubjects: {
    "/freelancers": ["skills", "level"],
    "/market": ["brand", "category"],
    "/projects": ["level", "category"],
  },
}));

export default useFilterStore;
