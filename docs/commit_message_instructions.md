# ✅ Commit Message Guidelines (Conventional + Emoji Style)

Use this format to write clear, consistent commit messages that help with team collaboration, changelog generation, and Git history readability.

### 📌 Format

```
<type>: <emoji> <short message>
```

**Example:**

```
feat: ✨ add new search functionality
```

### 🏷️ Types and Emojis

- **feat**: ✨ A new feature
  _Example_: `feat: ✨ add user onboarding screen`

- **fix**: 🐛 A bug fix
  _Example_: `fix: 🐛 fix header layout issue on mobile`

- **refactor**: ♻️ Code changes that don’t fix a bug or add a feature
  _Example_: `refactor: ♻️ simplify state management logic`

- **docs**: 📝 Documentation-only changes
  _Example_: `docs: 📝 add API usage section to README`

- **style**: 💄 Formatting, white‑space, or style changes (no logic)
  _Example_: `style: 💄 reformat code using Prettier`

- **chore**: 💬 Routine tasks (config changes, literal updates, etc.)
  _Example_: `chore: 💬 update localization text`

- **perf**: ⚡️ Performance improvements
  _Example_: `perf: ⚡️ Reduce image load time on dashboard`

- **test**: ✅ Adding or updating tests
  _Example_: `test: ✅ add unit tests for auth utils`

- **ci**: 🔁 Continuous Integration/deployment changes
  _Example_: `ci: 🔁 update GitHub Actions workflow for testing`

- **revert**: ⏪ Reverts a previous commit
  _Example_: `revert: ⏪ revert auth state changes`

- **wip**: 🚧 Work in progress (not ready for production)
  _Example_: `chore: 🚧 initial setup for dashboard layout`

- **chore**: 🚚 Renaming or moving files
  _Example_: `chore: 🚚 rename utils directory to helpers`

- **data**: 🗃️ Adds or updates datasets
  _Example_: `data: 🗃️ update population dataset for 2025`

- **build**: ➕ Adding a dependency
  _Example_: `build: ➕ add axios as a project dependency`

- **build**: ➖ Removing a dependency
  _Example_: `build: ➖ remove unused lodash dependency`

- **remove**: 🔥 Deleting code
  _Example_: `refactor: 🔥 delete legacy authentication module`

- **remove**: 🔨 Updating or adding code
  _Example_: `update: 🔨 Add input validation for email field`

- **asset**: 🍱 Adding or updating static assets (images, icons, media)
  _Example_: `asset: 🍱 Add company logo to assets folder`

### 💡 Best Practices

- Use the **imperative mood**: “Add”, not “Added” or “Adds”
- Keep messages **concise and meaningful**
- **Use only one emoji and one type** per commit
- **Break large changes** into smaller, focused commits
- Aim for **under 72 characters** when possible
