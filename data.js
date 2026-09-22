/*
  YOUR SITE CONTENT
  -----------------
  Edit this file to update your profile and add journal entries, then upload it to GitHub.

  To add an entry, copy one of the { ... } blocks inside "posts", paste it at the top of the list,
  and change the values. Give every entry a unique "id" (e.g. "p4", "p5").

  type:   "Announcement" | "Post" | "Milestone" | "Project"
  date:   "YYYY-MM-DD"
  body:   use \n for a new line. Blank line (\n\n) = new paragraph, "### " = heading,
          "- " = bullet, **bold**, `code`, [link text](https://...)
  link:   optional URL to a project, GitHub repo or certificate
  pinned: true shows it at the top (only pin one)
  sample: delete this line (or set false) once you replace the example text
*/
window.SITE = {
  "profile": {
    "name": "Venkatesh Manchikalapudi",
    "headline": "Learning AI in public — notes, experiments and projects as I go from curious to capable.",
    "location": "Chicago, IL",
    "bio": "I'm documenting my path into artificial intelligence: the courses I take, the concepts that finally click, and the projects I build along the way.\n\nThis site is both my learning journal and my portfolio. If you're hiring, collaborating, or just learning too, I'd love to connect.",
    "now": "Working through the fundamentals of machine learning and building my first small projects with Python.",
    "skills": [
      "Python",
      "Prompt engineering",
      "Machine learning basics",
      "Data analysis",
      "LLMs"
    ],
    "links": [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/"
      }
    ],
    "email": "",
    "photo": ""
  },
  "posts": [
    {
      "id": "p1",
      "type": "Announcement",
      "title": "Starting my AI learning journey — in public",
      "date": "2026-09-22",
      "summary": "Why I'm writing down everything I learn about AI, and what you can expect to find here.",
      "body": "Today I'm starting a public log of my AI learning journey.\n\nThe plan is simple: every time I finish a course module, understand a new concept, or ship a small project, I'll write it up here. Writing it down forces me to understand it — and over time, this page becomes a portfolio of real work.\n\n### What I'll post\n- **Posts** — notes on concepts I'm learning\n- **Milestones** — courses and certifications completed\n- **Projects** — things I've built, with links\n- **Announcements** — bigger updates like this one",
      "tags": [
        "meta"
      ],
      "link": "",
      "pinned": true,
      "sample": true
    },
    {
      "id": "p2",
      "type": "Post",
      "title": "Week 1 notes: how a language model predicts the next word",
      "date": "2026-09-20",
      "summary": "Tokens, probabilities and why an LLM is 'just' autocomplete at enormous scale — my plain-English notes.",
      "body": "This week I learned that a large language model reads text as **tokens** — chunks of words — and at every step predicts which token is most likely to come next.\n\n### Key ideas\n- Text is split into tokens before the model sees it\n- The model outputs a probability for every possible next token\n- Temperature controls how adventurous the choice is\n\nWhat surprised me most: all the 'intelligence' emerges from doing this one prediction task extremely well, over a huge amount of training text.",
      "tags": [
        "LLMs",
        "fundamentals"
      ],
      "link": "",
      "pinned": false,
      "sample": true
    },
    {
      "id": "p3",
      "type": "Milestone",
      "title": "Finished: Python for Data Analysis",
      "date": "2026-09-12",
      "summary": "Completed my first course — pandas, NumPy and plotting. On to machine learning next.",
      "body": "I completed my first course of the journey.\n\n### What I can do now\n- Load and clean data with `pandas`\n- Work with arrays in `NumPy`\n- Make basic charts to explore a dataset\n\nNext up: an introduction to machine learning.",
      "tags": [
        "Python",
        "course"
      ],
      "link": "",
      "pinned": false,
      "sample": true
    }
  ]
};
