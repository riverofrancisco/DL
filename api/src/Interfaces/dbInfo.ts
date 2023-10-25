enum levelCourse {
    "beginner",
    "intermediate",
    "advanced"
}

enum categories {
    "web-development",
    "front-end",
    "back-end",
    "data-base",
    "digital-marketing",
    "social-networks",
    "advertising",
    "copywriting",
    "web-design",
    "graphic-design",
    "ux-design",
    "ui-design",
    "data-science",
    "big-data",
    "data-analytics",
    "machine-learning",
    "search-engine-optimization-(seo)"
}

enum typeUsers {
    "admin", 
    "teacher", 
    "student"
}

export interface Course {
    name: string;
    img: string;
    level: levelCourse;
    description: string;
    descriptionComplete: string;
    duration: number;
    instructor: string;
    price: number;
    rating?: [];
    deleted: boolean;
    category: string[];
}

export interface Category {
    name: categories;
    img: string;
    description: string;
}

export interface User {
    id: string;
    rank?: typeUsers;
    cart?: []
    fullname: string;
    email: string;
    lastLogin?: string;
    banned?: boolean;
}