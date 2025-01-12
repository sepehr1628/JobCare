import { create } from "zustand";

import { getProducts } from "../services/apiProducts";
import { getProjects } from "../services/apiProjects";
import { getFreelancers } from "../services/apiFreelancers";
import ProductCard from "../features/products/ProductCard";
import FreelancerCard from "../features/freelancers/FreelancerCard";
import ProjectCard from "../features/projects/ProjectCard";

const marketFilters = {
  brand: ["Asus", "Apple", "Acer", "HP", "Lenovo"],
  category: ["mobile", "laptop"],
};
const freelancerFilters = {
  skills: ["Front-end", "Back-end", "DevOps", "Linux", "Network"],
  level: ["Senior", "Mid-level", "Junior"],
};
const projectFilters = {
  level: ["beginner", "Intemediate", "Advanced"],
  category: ["Seo", "Back-end", "DevOps", "Web design", "Network Marketing"],
};

const useFilterStore = create((set) => ({
  "/market": {
    keys: ["brand", "category"],
    queryFn: ({ sorting, filter }) => getProducts({ sorting, filter }),
    card: ProductCard,
    items: marketFilters,
  },
  "/freelancers": {
    keys: ["skills", "level"],
    queryFn: ({ sorting, filter }) => getFreelancers({ sorting, filter }),
    card: FreelancerCard,
    items: freelancerFilters,
  },
  "/projects": {
    keys: ["level", "category"],
    queryFn: ({ sorting, filter }) => getProjects({ sorting, filter }),
    card: ProjectCard,
    items: projectFilters,
  },
}));

export default useFilterStore;
