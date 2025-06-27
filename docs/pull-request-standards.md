# Pull Request & Code Review Standards

These standards ensure consistency, quality, and professional communication across all code contributions.

## 1. Pull Request Format

### Title Convention
Follow the Conventional Commits format:
```
<type>(<scope>): <description>

Examples:
feat(components): add new Button component with variants
fix(tests): resolve Jest configuration issues
docs(storybook): update component documentation
refactor(utils): improve type safety in utility functions
```

### Description Template
Use this template for all PR descriptions:

```markdown
## 🚀 [Type] Brief Summary

### 📝 Changes Made
- **Change 1**: Description of what was changed
- **Change 2**: Description of what was changed
- **Change 3**: Description of what was changed

### 🔧 Technical Details
- **Files Modified**: List key files changed
- **Dependencies**: Any new dependencies added/removed
- **Breaking Changes**: None OR describe breaking changes

### ✅ Testing
- **Unit Tests**: [X] Added/Updated OR [X] Not Required
- **E2E Tests**: [X] Added/Updated OR [X] Not Required
- **Coverage**: X% coverage maintained/improved
- **Manual Testing**: Brief description of manual testing done

### 📊 Impact
- **Performance**: No impact OR describe performance changes
- **Bundle Size**: No impact OR describe size changes
- **Accessibility**: No impact OR describe a11y improvements

### 🎯 Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated (if needed)
- [ ] Tests added/updated and passing
- [ ] No breaking changes (or clearly documented)
```

### Required Labels
Apply appropriate labels:
- `type:feat` - New features
- `type:fix` - Bug fixes
- `type:docs` - Documentation updates
- `type:refactor` - Code refactoring
- `type:test` - Test improvements
- `type:chore` - Maintenance tasks
- `priority:high` - Urgent fixes
- `priority:medium` - Standard features
- `priority:low` - Nice-to-have improvements

## 2. Code Review Format

### Review Types

#### ✅ Approval Review
```markdown
## ✅ LGTM! Excellent work

### 🎯 Highlights
- **Quality**: [Specific quality aspects that stood out]
- **Implementation**: [What was implemented well]
- **Testing**: [Testing quality remarks]

### 💡 Minor Suggestions (Optional)
- Consider [suggestion] for future improvement
- [Optional enhancement idea]

**Approved!** 🚀
```

#### 🔄 Changes Requested Review
```markdown
## 🔄 Changes Requested

### ⚠️ Must Fix
1. **[Critical Issue]**: Description of the issue
   - **Location**: `file.tsx:line`
   - **Problem**: What's wrong
   - **Solution**: Suggested fix
   - **Impact**: Why this needs to be fixed

2. **[Another Critical Issue]**: Description
   - **Location**: `file.tsx:line`
   - **Problem**: What's wrong
   - **Solution**: Suggested fix

### 💡 Suggestions
1. **[Improvement]**: Description
   - **Location**: `file.tsx:line`
   - **Current**: What it is now
   - **Suggested**: What it could be
   - **Benefit**: Why this would be better

### 🎯 Positive Feedback
- [Something that was done well]
- [Another positive aspect]

### 📝 Next Steps
1. Address the "Must Fix" items
2. Consider the suggestions
3. Re-request review when ready

Great work overall! Looking forward to the updates. 👍
```

#### 💬 Comment Review (Feedback Only)
```markdown
## 💬 Feedback & Suggestions

### 🎯 Overall Assessment
[High-level feedback about the approach/implementation]

### 💡 Suggestions for Improvement
1. **[Area]**: [Specific suggestion]
   - **Why**: [Reasoning]
   - **How**: [Implementation approach]

2. **[Another Area]**: [Specific suggestion]
   - **Why**: [Reasoning]
   - **How**: [Implementation approach]

### 🌟 What's Working Well
- [Positive aspect 1]
- [Positive aspect 2]

### 📚 Resources (Optional)
- [Link to relevant documentation]
- [Reference to similar implementation]

No blocking issues, just sharing thoughts! Feel free to address or discuss. 🤝
```

## 3. Review Guidelines

### For Reviewers

#### What to Look For
1. **Code Quality**
   - Follows project conventions
   - Clean, readable code
   - Proper error handling
   - Type safety (TypeScript)

2. **Functionality**
   - Meets requirements
   - Handles edge cases
   - No obvious bugs
   - Performance considerations

3. **Testing**
   - Adequate test coverage
   - Tests are meaningful
   - E2E tests for critical paths
   - No failing tests

4. **Documentation**
   - TSDoc comments for complex logic
   - Storybook stories updated
   - README updates if needed

#### Review Response Time
- **Critical fixes**: Within 4 hours
- **Regular features**: Within 24 hours
- **Documentation**: Within 48 hours

#### Tone Guidelines
- Be constructive and supportive
- Explain the "why" behind suggestions
- Acknowledge good work
- Ask questions when unsure
- Suggest solutions, not just problems

### For PR Authors

#### Before Requesting Review
- [ ] Self-review completed
- [ ] All tests passing
- [ ] No lint errors
- [ ] Description is complete and accurate
- [ ] Screenshots added for UI changes
- [ ] Breaking changes documented

#### Responding to Reviews
- Address all "Must Fix" items
- Respond to suggestions with either implementation or explanation
- Ask for clarification if feedback is unclear
- Thank reviewers for their time and feedback
- Re-request review after making changes

## 4. Special Cases

### Emergency Hotfixes
For critical production fixes:
```markdown
## 🚨 HOTFIX: Brief Description

### 🔥 Critical Issue
**Problem**: [What's broken in production]
**Impact**: [How users are affected]
**Root Cause**: [What caused the issue]

### 🛠️ Fix Applied
**Solution**: [What was done to fix it]
**Testing**: [How it was verified]
**Risk**: [Any risks with this fix]

### 📋 Follow-up Actions
- [ ] [Action item 1]
- [ ] [Action item 2]
- [ ] Post-mortem scheduled

**Requires immediate merge for production stability**
```

### Large Feature PRs
For significant features that can't be broken down:
```markdown
## 🎯 FEATURE: [Feature Name]

### 📋 Epic/Issue Reference
Closes #[issue-number]
Part of Epic: [epic-reference]

### 🎨 Design Reference
- [Figma/Design link]
- [Mockups or screenshots]

### 🏗️ Architecture Changes
**High-level approach**: [Brief architecture description]
**New patterns introduced**: [Any new patterns]
**Dependencies**: [New dependencies and why]

### 🔍 Review Strategy
**Suggested review order**:
1. Start with `[core-file].tsx` for main logic
2. Review `[tests].spec.tsx` for test coverage
3. Check `[stories].stories.tsx` for documentation
4. Review supporting files

**Focus areas**:
- [ ] Architecture and patterns
- [ ] Performance implications
- [ ] Test coverage completeness
- [ ] Documentation quality

### 📊 Metrics
- **Files changed**: X files
- **Lines added**: +X lines
- **Lines removed**: -X lines
- **Test coverage**: X%
```

## 5. Automation Integration

### Required Checks
All PRs must pass:
- [ ] Unit tests (Jest)
- [ ] E2E tests (Playwright)
- [ ] Linting (Biome)
- [ ] Type checking (TypeScript)
- [ ] Build success

### Auto-merge Criteria
PRs can be auto-merged if:
- All checks pass
- Approved by at least 1 reviewer
- No "Changes Requested" reviews
- Author has write access
- Not marked as "do not merge"

### Branch Protection
- `main` branch requires:
  - Up-to-date with base branch
  - Status checks passing
  - At least 1 approving review
  - No stale reviews after updates

## 6. Communication

### Effective Communication
- Use emojis for visual clarity
- Be specific with file names and line numbers
- Include code snippets when helpful
- Link to relevant documentation or issues
- Acknowledge when suggestions are implemented

### Conflict Resolution
If there's disagreement:
1. Discuss in PR comments first
2. Schedule a call if needed
3. Involve team lead if no consensus
4. Document the decision for future reference

---

*These standards ensure consistent, high-quality code reviews that help maintain code quality while fostering a positive, collaborative development environment.* 