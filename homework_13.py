import json
import os


class Task:
    def init(self, title, is_done=False):
        self.title = title
        self.is_done = is_done

    def mark_done(self):
        self.is_done = True

    def to_dict(self):
        return {
            "title": self.title,
            "is_done": self.is_done
        }

    @staticmethod
    def from_dict(data):
        return Task(data["title"], data["is_done"])


class TaskManager:
    def init(self, filename="tasks.json"):
        self.filename = filename
        self.tasks = []
        self.load_from_file()

    def add_task(self, title):
        self.tasks.append(Task(title))
        print(f'Задача "{title}" добавлена.')

    def mark_task_done(self, title):
        for task in self.tasks:
            if task.title == title:
                task.mark_done()
                print(f'Задача "{title}" отмечена как выполненная.')
                return
        print("Задача не найдена.")

    def show_tasks(self):
        if not self.tasks:
            print("Список задач пуст.")
            return

        for i, task in enumerate(self.tasks, 1):
            status = "Выполнено" if task.is_done else "Не выполнено"
            print(f"{i}. {task.title} - {status}")

    def save_to_file(self):
        with open(self.filename, "w", encoding="utf-8") as file:
            json.dump([task.to_dict() for task in self.tasks], file, ensure_ascii=False, indent=4)
        print("Данные сохранены. Программа завершена.")

    def load_from_file(self):
        if os.path.exists(self.filename):
            with open(self.filename, "r", encoding="utf-8") as file:
                data = json.load(file)
                self.tasks = [Task.from_dict(item) for item in data]


def main():
    manager = TaskManager()

    while True:
        command = input("\nВведите команду (add, done, show, exit): ").strip().lower()

        if command == "add":
            title = input("Введите название задачи: ")
            manager.add_task(title)

        elif command == "done":
            title = input("Введите название задачи: ")
            manager.mark_task_done(title)

        elif command == "show":
            manager.show_tasks()

        elif command == "exit":
            manager.save_to_file()
            break

        else:
            print("Неизвестная команда.")


if name == "main":
    main()