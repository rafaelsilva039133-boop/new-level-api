# Users

## User

```txt
POST   /users          // cria usuário
GET    /users/me       // usuário logado
GET    /users/:id      // busca usuário
PATCH  /users/:id      // atualiza usuário
DELETE /users/:id      // remove usuário
```

Estrutura:

```txt
user

- id
- clerkId
- name
- email
- level
- currentXp
- createdAt
```

# Tasks

## Task

```txt
POST   /tasks          // cria tarefa
GET    /tasks          // lista tarefas do usuário
GET    /tasks/:id      // busca tarefa
PATCH  /tasks/:id      // atualiza tarefa
PATCH  /tasks/:id/done // conclui tarefa
DELETE /tasks/:id      // remove tarefa
```

Estrutura:

```txt
task

- id
- title
- content
- userId
- createdAt
- dueDate
- completedAt
- category
- difficulty
```

# Posts

## Post

```txt
POST   /posts          // cria post
GET    /posts          // lista posts
GET    /posts/:id      // busca post
PATCH  /posts/:id      // atualiza post
DELETE /posts/:id      // remove post
GET    /users/:id/posts // posts do usuário
```

Estrutura:

```txt
post

- id
- title
- content
- userId
- createdAt
```

# XP

```txt
GET /xp-bar            // retorna level e xp atual
```

Resposta:

```txt
{
  level,
  currentXp
}
```
