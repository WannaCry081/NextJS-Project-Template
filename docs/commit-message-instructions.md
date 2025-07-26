# ✅ Commit Message Guidelines (Conventional + Emoji Style)

Use this format to write clear, consistent commit messages that help with team collaboration, changelog generation, and Git history readability.

---

## 📌 Format

```
<type>: <emoji> <short message>
```

**Example:**

```
feat: ✨ Add new search functionality
```

---

## 🏷️ Types and Emojis

- **feat**: ✨ A new feature
  _Example_: `feat: ✨ Add user onboarding screen`

- **fix**: 🐛 A bug fix
  _Example_: `fix: 🐛 Fix header layout issue on mobile`

- **refactor**: ♻️ Code changes that don’t fix a bug or add a feature
  _Example_: `refactor: ♻️ Simplify state management logic`

- **docs**: 📝 Documentation-only changes
  _Example_: `docs: 📝 Add API usage section to README`

- **style**: 💄 Changes related to formatting, white space, or style (no logic changes)
  _Example_: `style: 💄 Reformat code using Prettier`

- **chore**: 💬 Routine tasks such as config changes, literal updates, etc.
  _Example_: `chore: 💬 Update localization text`

- **build**: 🧹 Changes that affect the build system or external dependencies
  _Example_: `build: 🧹 Upgrade to Node.js 20`

- **perf**: ⚡ Performance improvements
  _Example_: `perf: ⚡ Reduce image load time on dashboard`

- **test**: ✅ Adding or updating tests
  _Example_: `test: ✅ Add unit tests for auth utils`

- **ci**: 🔁 Continuous Integration and deployment changes
  _Example_: `ci: 🔁 Update GitHub Actions workflow for testing`

- **revert**: ⏪ Reverts a previous commit
  _Example_: `revert: ⏪ Revert auth state changes`

- **wip**: 🚧 Work in progress — not ready for production
  _Example_: `chore: 🚧 Initial setup for dashboard layout`

- **move**: 🚚 Moving or renaming files
  _Example_: `refactor: 🚚 Move shared components to /common`

- **data**: 🗃️ Adds or updates datasets
  _Example_: `chore: 🗃️ Update population dataset for 2025`

---

## 💡 Best Practices

- Use the **imperative mood**: “Add”, not “Added” or “Adds”
- Keep messages **concise and meaningful**
- **Use only one emoji and type** per commit
- **Break large changes** into smaller, focused commits
- Message should be **under 72 characters** when possible
