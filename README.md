# Beta Builders Design System

A personal collection of React components.

[View Storybook](https://edgardamasceno-dev.github.io/beta-builders-design-system)

## Versioning

This library uses [Git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) for version control. To release a new version, create a new tag and push it to the repository.

```bash
git tag v1.0.1
git push origin v1.0.1
```

## Installation

This library is intended to be installed directly from a private GitHub repository.

In your project's `package.json`, add the following to your dependencies. You can specify a version by appending a tag to the repository URL (e.g., `#v1.0.1`).

```json
"dependencies": {
  "beta-builders-design-system": "github:edgardamasceno-dev/beta-builders-design-system#v1.0.1"
}
```

Then, run your package manager's install command:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Styling

This library is designed to inherit styles from your application. For this to work correctly, you'll need to configure your project to share its Tailwind and shadcn styles.

1.  **Peer Dependencies:**

    Ensure that you have the following packages installed in your project. These are required for the components to function correctly.

    ```bash
    npm install tailwind-merge clsx
    ```

2.  **Configure Tailwind CSS:**

    For the styles to be applied correctly, you need to tell Tailwind to scan the design system's component files for classes. Update your `tailwind.config.js`:

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

3.  **Import the Stylesheet:**

    In your main application file (e.g., `main.tsx` or `App.tsx`), import the stylesheet:

    ```tsx
    import 'beta-builders-design-system/dist/index.css'
    ```

## Usage

Here's how to use the `CounterCard` component.

```tsx
import { CounterCard } from 'beta-builders-design-system';

function MyComponent() {
  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <CounterCard
        title="Vagas Preenchidas"
        count={78}
        maxCount={100}
        variant="percentage"
        showSlotsInfo={true}
      />
    </div>
  );
}

export default MyComponent;
```

## Development

This project uses [Storybook](https://storybook.js.org/) for component development. To start the development server, run:

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
