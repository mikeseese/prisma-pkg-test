# Prisma <> pkg Test Repo

This project reproduces an issue with packaging Prisma in a pkg bundle.

## Reproduction steps

1. Run this on a Windows 11 OS (10 will likely be fine) with `node@18`
1. Clone
1. `corepack prepare` or `yarn set version 1.22.19` (or if you're using `1.22.19` by default, skip this step)
1. `yarn`
    - This installs dependencies, generates the prisma client, adds the hack, compiles TS, and runs pkg
1. `yarn test`

The test will out put `PASSED` or `FAILED` to stdout to show if it succeeded. If failed, you'll see an error related to `.node` file not being able to be required.

## Workarounds Applied

I've applied these workarounds to this project to try to get the test to pass:
1. `pkg` [doesn't support `node@20` yet](https://github.com/vercel/pkg/issues/2014), so just to make sure we weren't using Prisma's node addon files built for v20 but pkg was using node@18, I've set the `engines` restriction of this project to 18.
1. I've added the [hack](https://github.com/prisma/ecosystem-tests/blob/dev/binaries/pkg/run.sh#L9-L13) that Prisma has implemented in their own tests in [hack.js](./hack.js)
