import { Router } from 'express'
import { TodoDatasourceImpl } from '../../infrastructure/datasource/todo.datasource.impl'
import { TodoRepositoryImpl } from '../../infrastructure/repositories/todo.repository.impl'
import { TodosController } from './controller'

export class TodosRoutes {
  static get routes(): Router {
    const router = Router()
    const datasource = new TodoDatasourceImpl()
    const todoRepository = new TodoRepositoryImpl(datasource)

    const todosController = new TodosController(todoRepository)

    router.get('/', todosController.getTodos)
    router.get('/:id', todosController.getTodoById)
    router.post('/', todosController.createTodo)
    router.put('/:id', todosController.updateTodo)
    router.delete('/:id', todosController.deleteTodo)

    return router
  }
}
