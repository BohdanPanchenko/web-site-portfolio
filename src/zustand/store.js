import { create } from "zustand";

const useProjectsStore = create((set, get) => ({
  projects: [
    {
      name: "Racoon memory game",
      description:
        "Test your memory and concentration as you flip cards featuring cute raccoon illustrations. Your task is to find the matching pairs of raccoons hidden beneath the cards. ",
      tags: ["All", "vanilla js", "game"],
      image: "racoon.png",
      link: "https://bohdanpanchenko.github.io/racoon-memory-game/",
    },
    {
      name: "Millionaire game",
      description:
        "Millionaire Quiz is an online take of the classic TV game show who wants to be a millionaire. \n - 15 questions\n - 30 seconds to answer each question\n - Three help options",
      tags: ["All", "vanilla js", "game"],

      image: "millionaire-image.png",
      link: "https://bohdanpanchenko.github.io/PROJECT-2/Millionaire/index.html",
    },
    {
      name: "Puzzle game",
      description:
        "A simple game that players complete by assembling many small pieces that connect to each other. Eachpiece contains a small part of a whole picture. You have to attach All pieces together to complete the image.",
      tags: ["All", "vanilla js", "game"],
      image: "puzzle-image.png",
      link: "https://bohdanpanchenko.github.io/Puzzle-game/",
    },
    {
      name: "Photogram",
      description: "An image gallery that fetches images from Unsplash API",
      tags: ["All", "react.js", "redux", "api", "responsive"],
      image: "gallery.png",
      link: "https://photogram-unsplash.vercel.app/",
    },
    {
      name: "Travel landing page",
      description:
        "Landing pages serve as essential tools for businesses and marketers in refining online marketing strategies and generating leads or sales.",
      tags: ["All", "HTML/CSS", "landing page", "responsive"],
      image: "travelling-iamge.png",
      link: "https://bohdanpanchenko.github.io/Travel-landing-page/",
    },
    {
      name: "Financial assistance landing page",
      description:
        "Landing pages serve as essential tools for businesses and marketers in refining online marketing strategies and generating leads or sales.",
      tags: ["All", "HTML/CSS", "landing page", "responsive"],
      image: "finance-image.png",
      link: "https://bohdanpanchenko.github.io/finance-landing/",
    },
    {
      name: "Online courses web site",
      description:
        "Unlock Financial Wisdom with Our Online Courses. Explore topics like budgeting, investing, and wealth management to secure your financial future.",
      tags: ["All", "HTML/CSS", "responsive"],
      image: "online-courses-image.png",
      link: "https://bohdanpanchenko.github.io/cosmos89/index.html",
    },
    {
      name: "Luxury watches web site",
      description:
        "Explore a world of luxury and sophistication as you choose from our exclusive range of timepieces. Make a statement with every second – explore our premium watch selection today.",
      tags: ["All", "HTML/CSS", "responsive"],
      image: "watch-image.png",
      link: "https://bohdanpanchenko.github.io/LUXURY-WATCHES/index.html",
    }, //Your Task Management with React and Redux. Organize, filter, and sort your tasks, edit entries, and update task statuses.
    {
      name: "ToDo list app",
      description:
        "Your Task Management with React and Redux. Organize, filter, and sort your tasks, edit entries, and update task statuses.",
      tags: ["All", "react.js", "redux"],
      image: "todo-list.png",
      link: "https://bohdanpanchenko.github.io/todo-react-redux/",
    },
    {
      name: "Fifteen game",
      description:
        "The object of the puzzle is to arrange the squares in numerical sequence using only the extra space in the grid to slide the numbered titles. ",
      tags: ["All", "vanilla js", "responsive", "game"],
      image: "15-puzzle.svg",
      link: "https://bohdanpanchenko.github.io/Fifteen-game/",
    },

    {
      name: "Calculator",
      description:
        "App that performs arithmetic operations on numbers. Calculator can do addition, subtraction, multiplication, division and calculate square roots.",
      tags: ["All", "vanilla js", "responsive"],
      image: "calculator.png",
      link: "https://bohdanpanchenko.github.io/PROJECT-2/calculator/calculator.html",
    },
    {
      name: "Currency converter",
      description:
        "A program designed to convert the value of one currency into another based on the market rate for that currency.",
      tags: ["All", "angular", "api"],
      image: "exchange-rate-image.png",
      link: "https://lighthearted-begonia-99f188.netlify.app",
    },
  ],
  projectsToShow: [],
  selectedTags: ["All"],
  addTag: (value) =>
    set((state) => {
      if (value === "All") {
        // При клике на All все остальные опции нивелируются
        return { selectedTags: [value] };
      }
      if (get().selectedTags.includes("All")) {
        // удаляем All при клике на любую другую опцию
        let tags = [...get().selectedTags];
        tags.splice(0, 1);
        return { selectedTags: [...tags, value] };
      }
      return { selectedTags: [...get().selectedTags, value] };
    }),
  removeTag: (value) =>
    set((state) => {
      if (get().selectedTags.length <= 1) return state;
      let tags = [...get().selectedTags];
      const idxToRemove = tags.findIndex((el) => el === value);
      tags.splice(idxToRemove, 1);
      return { selectedTags: [...tags] };
    }),

  setProjectsToShow: () => {
    if (get().projectsToShow.length === 0) {
      console.log("hello", get().selectedTags);
      set((state) => ({
        projectsToShow: [...get().projects],
      }));
      return;
    }

    const filteredProjects = [];
    const selectedTags = [...get().selectedTags];
    const projects = [...get().projects];
    for (let i = 0; i < selectedTags.length; i++) {
      for (let j = 0; i < projects.tags; j++) {
        if (selectedTags[i] === projects[j].tags) {
          filteredProjects.push(projects[j]);
          console.log(filteredProjects);
        }
      }
    }
    set((state) => ({
      projectsToShow: [...filteredProjects],
    }));
  },
  applyFilter: () => {
    let filteredProjects = [...get().projects];
    get().selectedTags.forEach((el) => {
      filteredProjects = filteredProjects.filter((project) =>
        project.tags.includes(el)
      );
    });

    console.log(filteredProjects, " filtered projects");
    set((state) => {
      return { projectsToShow: [...filteredProjects] };
    });
  },
}));

export default useProjectsStore;
