import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private firestore: Firestore) {}

  getTodos(): Observable<Todo[]> {
    const todosCollection = collection(this.firestore, 'todos');
    return collectionData(todosCollection, { idField: 'id' }) as Observable<Todo[]>;
  }

  addTodo(todo: Todo) {
    const todosCollection = collection(this.firestore, 'todos');
    return addDoc(todosCollection, todo);
  }

  updateTodo(todo: Todo) {
    const todoDocRef = doc(this.firestore, `todos/${todo.id}`);
    return updateDoc(todoDocRef, { title: todo.title, completed: todo.completed });
  }

  deleteTodo(id: string) {
    const todoDocRef = doc(this.firestore, `todos/${id}`);
    return deleteDoc(todoDocRef);
  }
}
