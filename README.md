# Beta Builders Design System

A modern React component library built with TypeScript, Storybook, and TailwindCSS. Features comprehensive testing, automated deployment, and conventional commit workflows.

[View Storybook](https://edgardamasceno-dev.github.io/beta-builders-design-system)

## 📦 Installation

### Via npm (Recommended)

Install the package directly from GitHub:

```bash
npm install github:edgardamasceno-dev/beta-builders-design-system#v0.0.2
```

Or with other package managers:

```bash
# Yarn
yarn add github:edgardamasceno-dev/beta-builders-design-system#v0.0.2

# pnpm
pnpm add github:edgardamasceno-dev/beta-builders-design-system#v0.0.2
```

### Via package.json

Add to your `package.json` dependencies:

```json
{
  "dependencies": {
    "beta-builders-design-system": "github:edgardamasceno-dev/beta-builders-design-system#v0.0.2"
  }
}
```

## 🎨 Styling Setup

This library is designed to inherit styles from your application. For this to work correctly, you'll need to configure your project to share its Tailwind and shadcn styles.

### 1. Install Peer Dependencies

```bash
npm install clsx tailwind-merge react react-dom
```

### 2. Configure Tailwind CSS

Update your `tailwind.config.js` to include the design system's component files:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/beta-builders-design-system/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Import Styles

In your main application file (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'beta-builders-design-system/dist/index.css'
```

## 🚀 Usage

### CounterCard Component

The `CounterCard` is a versatile component for displaying numerical data with optional progress indication.

#### Basic Usage

```tsx
import { CounterCard } from 'beta-builders-design-system';

function App() {
  return (
    <div className="p-4 max-w-sm">
      <CounterCard
        title="Total Users"
        count={1234}
      />
    </div>
  );
}
```

#### With Progress Indication

```tsx
import { CounterCard } from 'beta-builders-design-system';

function App() {
  return (
    <div className="p-4 max-w-sm">
      <CounterCard
        title="Vagas Preenchidas"
        count={78}
        maxCount={100}
        variant="percentage"
        showSlotsInfo={true}
        slotsAvailableText="vagas disponíveis"
        description="Processo seletivo atual"
      />
    </div>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | **Required.** The title displayed at the top of the card |
| `count` | `number` | - | **Required.** The main number to display |
| `maxCount` | `number` | - | Optional maximum count for progress indication |
| `description` | `string` | - | Optional description text below the title |
| `variant` | `"default" \| "percentage"` | `"default"` | Visual variant - percentage shows color coding |
| `className` | `string` | `""` | Additional CSS classes |
| `showSlotsInfo` | `boolean` | `false` | Whether to show remaining slots information |
| `slotsAvailableText` | `string` | `"slots disponíveis"` | Text for available slots |

#### Visual Variants

- **default**: Simple counter display
- **percentage**: Color-coded based on percentage filled:
  - 🟢 Green: < 60%
  - 🟡 Yellow: 60-89%
  - 🔴 Red: ≥ 90%

#### Examples

```tsx
// Simple counter
<CounterCard
  title="Downloads"
  count={42580}
/>

// Progress with custom text
<CounterCard
  title="Event Registrations"
  count={45}
  maxCount={50}
  variant="percentage"
  showSlotsInfo={true}
  slotsAvailableText="spots remaining"
  description="Summer Conference 2024"
/>

// With custom styling
<CounterCard
  title="Revenue"
  count={125000}
  className="bg-gradient-to-r from-blue-50 to-indigo-50"
  description="This month"
/>
```

## 🔧 Versioning

This library uses [Semantic Versioning](https://semver.org/) and Git tags for version control. 

### Latest Version: v0.0.2

- Fixed deployment configurations
- Enhanced CI/CD pipeline
- Improved commitizen configuration
- 100% test coverage maintained

### Updating

To update to the latest version:

```bash
npm install github:edgardamasceno-dev/beta-builders-design-system#v0.0.2
```

## 📚 Development

This project uses [Storybook](https://storybook.js.org/) for component development. To start the development server:

```bash
npm run dev
```

This will open Storybook in your browser, where you can view and interact with the components in isolation.

### Contributing

Before contributing, please read our standards and guidelines:

- 📋 **Pull Request Standards** - Defined in `.cursor/rules/pull-request-management.mdc`
- 🧪 **Testing Strategy** - Defined in `.cursor/rules/testing-strategy.mdc`
- 🎨 **Storybook** - All components must have stories (see `.cursor/rules/storybook-best-practices.mdc`)
- ⚛️ **React Guidelines** - Follow clean code practices (see `.cursor/rules/react-clean-code.mdc`)

### Testing

```bash
# Run unit tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run all tests
npm test
```

## 📄 License

This project is available under the MIT License.
