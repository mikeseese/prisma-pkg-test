# Prisma <> pkg Test Repo

This project reproduces an issue with packaging Prisma in a pkg bundle.

## Reproduction steps

1. Run this on a Windows 11 OS (10 will likely be fine) with `node@18`
1. Clone
1. `corepack prepare` or `yarn set version 1.22.19` (or if you're using `1.22.19` by default, skip this step)
1. `yarn` - Runs all of the commands necessary, but you can rerun them if you'd like:
    - `yarn generate` - generates two clients, one with a custom output
    - `yarn build` - compiles TS
    - `yarn pkg` - packages both builds, one with the custom output client
    - `yarn test` - runs both exes, showing the normal output passes but he custom fails

## Workarounds Applied

I've applied these workarounds to this project to try to get the test to pass:
1. `pkg` [doesn't support `node@20` yet](https://github.com/vercel/pkg/issues/2014), so just to make sure we weren't using Prisma's node addon files built for v20 but pkg was using node@18, I've set the `engines` restriction of this project to 18.
1. I've added the [workaround](https://github.com/prisma/prisma/issues/20841) that adds the client's `index.js` to the `assets` array or `pkg`, which is **required** to get the `normal` test passing, but the `custom` one continues to fail using the same strategy
1. This isn't applied, but I've tried adding `--public-packages '*'` to the custom test as mentioned in the prior GH issue workaround, but this doesn't change the end result
