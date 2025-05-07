# Ísland.is 2025 - Alhliðateymisverkefni, Stefna

NX monorepo containing 4 projects.

- web
- gateway-api
- skattur-api
- thjodskra-api

## web

Next.js frontend.

To run locally:

```sh
yarn nx run web:dev
```

To generate graphql types:

```sh
yarn run web:codegen
```

## gateway-api

Nest.js GraphQL service

To run locally:

```sh
yarn nx run gateway-api:serve
```

## skattur-api

Nest.js REST service

To run locally:

```sh
yarn nx run skattur-api:serve
```

## thjodskra-api

Nest.js REST service

To run locally:

```sh
yarn nx run skattur-api:serve
```
