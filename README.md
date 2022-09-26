# `fast-check` non-termination demo

Minimal demo for bug report [#3237](https://github.com/dubzzz/fast-check/issues/3237).

To reproduce, clone this repository and run:

```sh
npm ci
npm run test
```

Test execution seems to run forever.
