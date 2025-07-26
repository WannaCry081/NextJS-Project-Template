# Commit Message Guidelines

Use this format to keep commit messages clear and consistent.

Format: `<type>: <emoji> <short message>`

Example:
`feat: ✨ add new search functionality`

## Types and Emojis:

- feat: ✨ a new feature
  Example: feat: ✨ add user onboarding screen

- fix: 🐛 a bug fix
  Example: fix: 🐛 fix header layout issue on mobile

- refactor: ♻️ code change that doesn’t fix a bug or add a feature
  Example: refactor: ♻️ simplify state management logic

- docs: 📝 documentation changes
  Example: docs: 📝 add API usage section to README

- style: 💄 formatting or style change, no logic
  Example: style: 💄 reformat code using Prettier

- chore: 💬 routine tasks or config
  Example: chore: 💬 update localization text

- perf: ⚡️ performance improvements
  Example: perf: ⚡️ reduce image load time

- test: ✅ add or update tests
  Example: test: ✅ add unit tests for auth utils

- ci: 🔁 CI or deployment config
  Example: ci: 🔁 update GitHub Actions workflow

- revert: ⏪ revert a previous commit
  Example: revert: ⏪ revert auth state changes

- wip: 🚧 work in progress
  Example: chore: 🚧 initial dashboard setup

- chore: 🚚 rename or move files
  Example: chore: 🚚 rename utils directory

- data: 🗃️ add or update datasets
  Example: data: 🗃️ update population dataset

- build: ➕ add dependency
  Example: build: ➕ add axios

- build: ➖ remove dependency
  Example: build: ➖ remove lodash

- remove: 🔥 delete code
  Example: refactor: 🔥 delete legacy module

- update: 🔨 add or update code
  Example: update: 🔨 add email validation

- asset: 🍱 add or update static assets
  Example: asset: 🍱 add company logo

## Best Practices:

- Use imperative mood: "add", not "added"
- Keep messages short and clear
- Use only one emoji and one type per commit
- Split big changes into small commits
- Try to keep messages under 72 characters
