# countriez

<!-- > Live on [countriez](https://threap-app.vercel.app/) -->
> On Develop

### Stack used

- [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/learn/)
- [Tailwind](https://tailwindcss.com/)

### Developing

A Node.js LTS setup with [npm](https://www.npmjs.com/) is recommended.

In the project directory, you can run:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# build for production
npm run build

# run unit tests
npm run test

# run end to end tests
npm run e2e

# run storybook
npm run storybook

# run ci-test implementation
npm run ci:test
```

## Architecture

### State management

[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Deployment (CI / CD)

<!-- I used [Vercel](https://vercel.com/) through [Github Action](https://github.com/features/actions) for CI / CD -->
Still on develop. Haven't deploy it yet

### Directory structure

<!-- - `.github/` - ci / cd config
- `.storybook` - storybook config
- `cypress` - end to end testing scripts and other files -->
- `src/animations` - TS file used for animation config.
- `src/components` - UI/Layout components that are used globally throughout project.
- `src/services` - TS file used for query GraphQL
- `src/pages` - Pages of countriez Website.
- `src/stores` - State management store.
- `src/public` - React public directory, used for storing static assets.