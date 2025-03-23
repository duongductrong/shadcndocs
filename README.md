# shadcn-docs

A comprehensive documentation site built with MDX and shadcn/ui components.

## Overview

This repository contains the documentation for a collection of reusable components built with shadcn/ui, MDX, and React. It demonstrates how to combine Markdown with React components to create rich, interactive documentation.

## Features

- **MDX Integration**: Seamless combination of Markdown and React components
- **Interactive Components**: Live component previews and examples
- **Documentation Components**:
  - ComponentPreview: Live component demonstrations
  - ComponentSource: Source code display with syntax highlighting
  - Steps: Step-by-step guide creation
  - Callout: Important information highlighting
  - CodeTabs: Organized code examples
  - Codeblock: Syntax-highlighted code blocks

## Documentation Components

The repository includes specialized components for documentation:

- Live component previews with sandbox environments
- Source code displays with syntax highlighting
- Step-by-step guide creation tools
- Warning and information callouts
- Tabbed code examples
- Code blocks with line numbers and highlighting

## UI Components

Includes documentation for various UI components:

- Buttons
- Inputs
- Alerts
- Tables
- Forms
- Navigation menus
- And more...

## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the development server

```bash
npm install
npm run dev
```

## Usage

Example of using a component in MDX:

```mdx
<ComponentPreview
  name="button-demo"
  description="A collection of button variants"
  className="[&_button]:mr-2"
/>
```

## Best Practices

- Group related components together
- Use semantic structure
- Maintain accessibility standards
- Follow consistent styling patterns
- Provide comprehensive examples

## Contributing

We welcome contributions to improve the documentation! Here's how you can help:

1. Fork the repository and create your branch from `master`
2. Make your changes following our code style and documentation guidelines
3. Test your changes locally to ensure they render correctly
4. Submit a pull request with a clear description of your changes
5. Wait for review and address any feedback

Please ensure your contributions:
- Follow the existing documentation structure and style
- Include clear, concise explanations
- Maintain accessibility standards
- Add examples where appropriate
- Update relevant navigation/config files if adding new pages

For major changes, please open an issue first to discuss what you would like to change.

---

This documentation site is built with:

- Next.js
- MDX
- shadcn/ui
- Radix UI
