# Pet Shelter API

Express + TypeScript API for listing shelter pets and fetching a pet by id.

## Requirements

- Node.js 22+

## Setup

```bash
npm install
npm start
```

The server listens on `http://localhost:8000`.

## Endpoints

### List pets

`GET /pets`

Optional query parameters (combine with `&`):

| Parameter | Example | Description |
| --- | --- | --- |
| `species` | `cat` | Filter by species (`cat`, `dog`) |
| `adopted` | `true` | Filter by adoption status |
| `minAge` | `1` | Minimum age |
| `maxAge` | `5` | Maximum age |

Examples:

```text
GET http://localhost:8000/pets
GET http://localhost:8000/pets?species=cat
GET http://localhost:8000/pets?species=dog&adopted=false
GET http://localhost:8000/pets?minAge=1&maxAge=3
```

### Get pet by id

`GET /pets/:id?password=auth`

Requires the query parameter `password=auth`. The id must be a number.

```text
GET http://localhost:8000/pets/1?password=auth
```

| Status | When |
| --- | --- |
| `401` | Missing or invalid password |
| `400` | Id is not a number |
| `404` | Pet not found |

Unknown routes return `404` with `{ "message": "ROUTE NOT FOUND" }`.

## Project structure

```text
src/
  index.ts
  data/pets.ts
  routes/pets.routes.ts
  controllers/pets.controllers.ts
  middleware/pets.middleware.ts
```
