# Campus Events Board — GitHub Team Practical

ST0526 Continuous Integration and Continuous Delivery — Week 1 practical.

A small, dependency-free web project for a **90-minute team collaboration lesson**.
All dates and events are fictional classroom examples.

## Run locally

Open `index.html` in any modern browser. No npm installation or server is needed.

## Team tasks

| Member | Feature | File |
|---|---|---|
| A | Add 2+ events (unique `id`, valid categories) | `data/events.js` |
| B | Search by title or location, case-insensitive | `js/search.js` |
| C | Filter by category | `js/filter.js` |
| D | Improve cards, badges and mobile layout | `styles.css` |

Each student works on a **different branch**, submits a **pull request**, and gets a peer to review it. Do not push feature changes directly to `main`.

For a 3-person team, Member A also handles the styling task, either in the same PR or a second one.

## Team conflict exercise

When the lecturer announces the conflict challenge, **two members independently** create branches from the latest `main` and replace the **same first line** in `TEAM-MOTTO.md` with different mottos. Open two PRs, merge the first, and resolve the conflict on the second before merging. **Do not start this early**.

## Definition of done

- Site loads with 5 or more events
- Search and category filter both work (including together)
- Layout is readable on a narrow browser window
- Every member has a commit on a feature branch and a PR (3-member teams: minimum 3 PRs)
- Every feature PR has a peer review comment
- A merge conflict was resolved or documented, with evidence

See your lecturer's student instruction handout for the timed steps and submission instructions.
