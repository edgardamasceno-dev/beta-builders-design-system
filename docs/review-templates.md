# Code Review Templates

Copy and paste these templates to maintain consistency in code reviews.

## ✅ Approval Review Template

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

## 🔄 Changes Requested Template

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

## 💬 Comment Review Template

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

## 🚨 Hotfix Review Template

```markdown
## 🚨 HOTFIX Review

### ✅ Production Issue Resolution
- **Issue**: [Brief description of the production problem]
- **Fix**: [What this PR does to resolve it]
- **Risk Assessment**: [Low/Medium/High and why]

### 🔍 Quick Checklist
- [ ] Fixes the immediate production issue
- [ ] No obvious side effects
- [ ] Minimal changes to reduce risk
- [ ] Has been tested (even if briefly)

### 📋 Post-Merge Actions
- [ ] Monitor production after deployment
- [ ] Create follow-up issue for proper fix (if this is a temporary solution)
- [ ] Update documentation if needed

**Approved for emergency merge** ⚡
```

## 🎯 Feature Review Template

```markdown
## 🎯 Feature Review: [Feature Name]

### 🏗️ Architecture Assessment
- **Approach**: [Feedback on the overall approach]
- **Patterns**: [Comments on patterns used]
- **Scalability**: [How well this scales]

### 🔧 Implementation Quality
- **Code Organization**: [Comments on file structure and organization]
- **Type Safety**: [TypeScript usage feedback]
- **Error Handling**: [Error handling assessment]
- **Performance**: [Performance considerations]

### 📚 Documentation & Testing
- **Test Coverage**: [Comments on test quality and coverage]
- **Storybook**: [Storybook documentation feedback]
- **Code Comments**: [TSDoc and inline comments assessment]

### 🎨 UI/UX (if applicable)
- **User Experience**: [UX feedback]
- **Accessibility**: [A11y considerations]
- **Responsive Design**: [Mobile/tablet feedback]
- **Visual Design**: [Design consistency feedback]

### 🎯 Specific Feedback
1. **[Area 1]**: [Detailed feedback]
2. **[Area 2]**: [Detailed feedback]
3. **[Area 3]**: [Detailed feedback]

### 🚀 Overall Assessment
[High-level summary of the feature quality and readiness]

**Status**: ✅ Approved / 🔄 Needs Changes / 💬 Comments Only
```

## 📝 Documentation Review Template

```markdown
## 📝 Documentation Review

### 📖 Content Quality
- **Clarity**: [How clear and understandable the documentation is]
- **Completeness**: [Whether all necessary information is covered]
- **Accuracy**: [Technical accuracy assessment]
- **Examples**: [Quality of code examples and usage]

### 🎨 Format & Structure
- **Organization**: [How well the content is organized]
- **Formatting**: [Markdown formatting and consistency]
- **Navigation**: [How easy it is to find information]
- **Visual Elements**: [Diagrams, screenshots, etc.]

### 🎯 Specific Suggestions
1. **[Section/Topic]**: [Specific improvement suggestion]
2. **[Another Section]**: [Another improvement suggestion]

### ✅ What's Great
- [Positive aspects of the documentation]
- [Well-written sections]

**Documentation Status**: ✅ Ready to merge / 🔄 Needs improvements
```

## 🧪 Test Review Template

```markdown
## 🧪 Test Review

### 📊 Coverage Assessment
- **Unit Tests**: [Coverage and quality feedback]
- **E2E Tests**: [End-to-end testing feedback]
- **Edge Cases**: [How well edge cases are covered]
- **Error Scenarios**: [Error handling test coverage]

### 🔧 Test Quality
- **Test Structure**: [How well tests are organized]
- **Assertions**: [Quality of test assertions]
- **Test Data**: [Test data and mocking quality]
- **Performance**: [Test execution speed]

### 🎯 Specific Feedback
1. **[Test Area]**: [Specific feedback]
2. **[Another Area]**: [Specific feedback]

### 🚀 Overall Assessment
[High-level assessment of test coverage and quality]

**Test Status**: ✅ Excellent coverage / 🔄 Needs more tests / 💬 Minor suggestions
```

---

## Quick Review Responses

### For Minor Changes
```
Looks good! Just a small suggestion: [brief suggestion]. LGTM! ✅
```

### For Good Work
```
Great implementation! I especially like [specific thing]. Approved! 🚀
```

### For Complex Changes
```
This is a substantial change. Let me review thoroughly and get back to you with detailed feedback. 🔍
```

### For Urgent Reviews
```
Reviewing this priority PR now. Will have feedback within [timeframe]. ⚡
``` 