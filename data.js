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
        "url": "https://github.com/manchikalapudi"
      }
    ],
    "email": "",
    "photo": ""
  },
  "posts": [
    {
      "id": "p4",
      "type": "Post",
      "title": "My Claude learning plan: 8 weeks, built from a year of Anthropic's own posts",
      "date": "2026-09-22",
      "summary": "A step-by-step path from using Claude well to building, testing, and applying agents, based on a catalog of 100+ Anthropic posts.",
      "body": "I used Claude to build a catalog of more than 100 Claude-focused posts Anthropic published between October 2025 and September 2026, across the Claude blog, the Engineering blog, and the newsroom. Reading through it, three patterns shaped this plan. The Claude blog is where the practical how-tos live. The Engineering blog is small but deep. And Anthropic's biggest content shift this year has been from general developer tooling toward real-world, industry-specific use. So the plan moves the same way: use Claude well, build with Claude Code, build agents, test and secure what I build, then apply it to a real domain.\n\n### Phase 1 (Weeks 1–2): Foundations\n\nThe goal is to understand the current model family and how to give Claude good context before building anything.\n\n**Read:** “Claude models explained: choosing the best model for your use case,” “The new rules of context engineering for Claude 5 generation models,” “What a task costs on Opus 5.5,” and the newsroom's “Introducing Claude Opus 5.5.”\n\n**Practice:** Work through “Projects redesigned,” the post on Claude's memory, and “The Claude Cowork product guide,” so I'm using the apps the way Anthropic intends.\n\n**Build:** A Claude Project for this learning plan that holds my notes, the Claude-built catalog, and a running list of questions.\n\n### Phase 2 (Weeks 3–4): Claude Code\n\nThe goal is to get comfortable letting Claude work in a real codebase.\n\n**Read:** “The Claude Code guide for startups,” “Maximizing the value of your Claude Code sessions,” “Auto mode is now the default in Claude Code” with its companion “Running auto mode in production,” “Building verification loops in Claude Code with skills,” and “Introducing dynamic workflows in Claude Code.” For the reasoning behind the design, the Engineering post “How we built Claude Code auto mode.”\n\n**Build:** Improve this site with Claude Code, starting with topic tags and search for my posts.\n\n### Phase 3 (Weeks 5–6): Agents and the Claude Platform\n\nThe goal is to understand how agents are structured, not just how to call the API.\n\n**Read (Engineering blog first):** “Equipping agents for the real world with Agent Skills,” “Code execution with MCP,” “Introducing advanced tool use on the Claude Developer Platform,” “Effective harnesses for long-running agents,” and “Harness design for long-running application development.”\n\n**Then the Claude blog:** “Agent Harness Design: 3 Patterns,” the “New in Claude Managed Agents” series (April–June 2026), “Build production agents with computer use, the Skills API, and the Files API,” and “Reducing cost and improving performance with Claude Platform.”\n\n**Build:** A small agent that checks the Claude blog's category pages and sorts new posts into the same categories the catalog uses. This automates the kind of cataloging I had Claude do by hand.\n\n### Phase 4 (Week 7): Evals and Safety\n\nThe goal is to learn how to tell whether what I built actually works, and how to run it safely.\n\n**Read:** “Demystifying evals for AI agents,” “Quantifying infrastructure noise in agentic coding evals,” “How we contain Claude across products,” and “How Anthropic secures its AI-native software development lifecycle.”\n\n**Build:** An eval set for my Phase 3 agent. I'll hand-label 30 posts and measure how often the agent's categories match mine.\n\n### Phase 5 (Week 8): Real-World Use\n\nThe goal is to see how teams use Claude in production. This is where Anthropic's publishing has been heading all year.\n\n**Read:** Three customer stories (Warp, Datadog, and monday.com are strong picks for builders) and three posts from the “how Anthropic uses Claude” genre, such as the finance team, the CI/CD on-call post, and test impact analysis.\n\n**Write:** A post comparing what those teams did with what I built, and what I'd do differently.\n\n### Staying Current\n\nOnce the plan is done, I'll spend about 20 minutes a week on upkeep. I'll check the Claude blog's four category pages (Agents, Claude Code, Enterprise AI, Product announcements) for new guides, and the newsroom for model releases, since models never launch on the Claude blog.",
      "tags": [
        "Claude",
        "learning plan",
        "agents"
      ],
      "link": "https://manchikalapudi.github.io/learning-plan.html",
      "pinned": false
    },
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
