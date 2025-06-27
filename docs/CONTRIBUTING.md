# Contributing Guide

Welcome to the Beta Builders Design System! This guide will help you contribute effectively.

## 🚀 Quick Start

1. **Fork & Clone** the repository
2. **Install dependencies**: `npm install`
3. **Start development**: `npm run dev` (opens Storybook)
4. **Run tests**: `npm run test:coverage`

## 📋 Standards & Guidelines

### Pull Requests
- **Title**: Follow [Conventional Commits](https://www.conventionalcommits.org/) format
- **Description**: Use the [PR template](.github/pull_request_template.md) (auto-populated)
- **Complete Guide**: [Pull Request Standards](pull-request-standards.md)

### Code Reviews
- **Templates**: Use [Review Templates](review-templates.md) for consistency
- **Response Time**: 24-48 hours for standard PRs, 4 hours for hotfixes
- **Tone**: Be constructive, supportive, and explain the "why" behind suggestions

### Code Quality
- **Components**: Single responsibility, TypeScript interfaces, TSDoc comments
- **Testing**: 100% coverage expected, both unit and E2E tests
- **Storybook**: All components must have stories with proper documentation

## 🛠️ Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feat/component-name

# Develop with hot reload
npm run dev

# Test continuously
npm run test:coverage
npm run test:e2e
```

### 2. Quality Checks
```bash
# Lint & format
npm run lint
npm run format

# Type checking
npm run type-check

# Full test suite
npm test
```

### 3. Pull Request
1. Use the PR template (auto-populated)
2. Follow the [PR Standards](pull-request-standards.md)
3. Request review from team members
4. Address feedback using [Review Templates](review-templates.md)

## 🧪 Testing Requirements

### Unit Tests
- **Location**: `tests/unit/components/`
- **Coverage**: 100% required
- **Tool**: Jest + React Testing Library
- **Command**: `npm run test:coverage`

### E2E Tests
- **Location**: `tests/e2e/`
- **Tool**: Playwright (Chromium, Firefox, WebKit)
- **Command**: `npm run test:e2e`

### Test Structure
```
tests/
├── unit/
│   └── components/
│       ├── component-name.test.tsx
│       └── ui/
│           └── ui-component.test.tsx
└── e2e/
    └── component-name.spec.ts
```

## 📚 Documentation

### Component Documentation
- **TSDoc**: Required for all prop interfaces
- **Storybook**: Stories for all component variants
- **README**: Update if adding new components

### Storybook Stories
- **Location**: Co-located with components (`component.stories.tsx`)
- **Format**: CSF 3.0 with `tags: ['autodocs']`
- **Coverage**: All props, states, and variants

## 🎯 Component Checklist

When adding a new component:

- [ ] **Implementation**
  - [ ] TypeScript interface with TSDoc comments
  - [ ] Follows React best practices
  - [ ] Proper error handling
  - [ ] Accessibility considerations

- [ ] **Testing**
  - [ ] Unit tests with 100% coverage
  - [ ] E2E tests for critical interactions
  - [ ] All tests passing

- [ ] **Documentation**
  - [ ] Storybook stories with all variants
  - [ ] Auto-generated docs page
  - [ ] Usage examples

- [ ] **Quality**
  - [ ] No linting errors
  - [ ] Type checking passes
  - [ ] Performance optimized
  - [ ] Mobile responsive

## 🔄 Review Process

### For Reviewers
1. **Check Functionality**: Does it work as expected?
2. **Review Code Quality**: Follows standards and best practices?
3. **Test Coverage**: Are tests comprehensive and passing?
4. **Documentation**: Is it properly documented?
5. **Use Templates**: Apply appropriate [review template](review-templates.md)

### For Authors
1. **Self-Review**: Review your own PR first
2. **Address Feedback**: Respond to all review comments
3. **Update Tests**: Ensure tests cover new functionality
4. **Re-request Review**: After making changes

## 🏷️ Labels & Priorities

### Type Labels
- `type:feat` - New features
- `type:fix` - Bug fixes  
- `type:docs` - Documentation
- `type:refactor` - Code refactoring
- `type:test` - Test improvements
- `type:chore` - Maintenance

### Priority Labels
- `priority:high` - Urgent fixes
- `priority:medium` - Standard features
- `priority:low` - Nice-to-have improvements

## 📞 Getting Help

- **Questions**: Open a discussion or comment on relevant PR
- **Issues**: Create an issue with detailed description
- **Standards**: Check [Pull Request Standards](pull-request-standards.md)
- **Templates**: Use [Review Templates](review-templates.md)

---

Thank you for contributing to the Beta Builders Design System! 🎉 