# My Design System

A personal collection of React components.

## Installation

This library is intended to be installed directly from a private GitHub repository.

In your project's `package.json`, add the following to your dependencies, replacing `<github_user>/<repo_name>` with the actual repository path:

```json
"dependencies": {
  "my-ds": "github:<github_user>/<repo_name>"
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

## Setup

To use the components, you need to import the library's stylesheet.

1.  **Import the CSS:**

    In your main application file (e.g., `main.tsx` or `App.tsx`), import the stylesheet:

    ```tsx
    import 'my-ds/dist/ds.css'
    ```

2.  **Configure Tailwind CSS:**

    For the styles to be applied correctly, you need to tell Tailwind to scan the design system's component files for classes. Update your `tailwind.config.js`:

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/my-ds/dist/**/*.js', // Add this line
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

## Usage

Here's how to use the `CounterCard` component.

```tsx
import { CounterCard } from 'my-ds';

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
