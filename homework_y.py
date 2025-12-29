import time
from functools import wraps
from datetime import datetime


def log_action(action_name):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()

            print(
                f"[{datetime.now().strftime('%H:%M:%S')}] "
                f"Действие: {action_name}, "
                f"Время выполнения: {end_time - start_time:.4f} сек."
            )
            return result
        return wrapper
    return decorator



tasks = []
undo_stack = []



@log_action("Добавление задачи")
def add_task():
    task = input("Введите текст задачи: ").strip()
    if task:
        tasks.append(task)
        print("Задача добавлена.")
    else:
        print("Задача не может быть пустой.")


def show_tasks():
    if not tasks:
        print("Список задач пуст.")
        return

    print("Список задач:")
    for i, task in enumerate(tasks, start=1):
        print(f"{i}. {task}")


@log_action("Выполнение задачи")
def complete_task():
    if not tasks:
        print("Список задач пуст.")
        return

    show_tasks()
    try:
        index = int(input("Введите номер задачи для выполнения: ")) - 1
        task = tasks.pop(index)
        undo_stack.append(task)
        print("Задача выполнена.")
    except (ValueError, IndexError):
        print("Некорректный номер задачи.")


@log_action("Отмена действия")
def undo_action():
    if not undo_stack:
        print("Нет действий для отмены.")
        return

    task = undo_stack.pop()
    tasks.append(task)
    print("Последняя задача восстановлена.")



def main():
    print("Менеджер задач запущен.")
    while True:
        command = input(
            "\nВведите команду (add, show, complete, undo, exit): "
        ).strip().lower()

        if command == "add":
            add_task()
        elif command == "show":
            show_tasks()
        elif command == "complete":
            complete_task()
        elif command == "undo":
            undo_action()
        elif command == "exit":
            print("Программа завершена.")
            break
        else:
            print("Неизвестная команда.")


if __name__ == "main":
    main()

