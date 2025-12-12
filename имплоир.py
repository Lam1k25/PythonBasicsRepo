from typing import List, Optional


# Базовый класс Person
class Person:
    def __init__(self, name: str, age: int):
        self._name = name
        self._age = age

    @property
    def name(self) -> str:
        return self._name

    @property
    def age(self) -> int:
        return self._age

    def __str__(self) -> str:
        return f"Имя: {self._name}, Возраст: {self._age}"


# Класс Employee, наследуется от Person
class Employee(Person):
    def __init__(self, name: str, age: int, position: str):
        super().__init__(name, age)
        self._position = position

    @property
    def position(self) -> str:
        return self._position

    def display_info(self) -> str:
        return f"{super().__str__()}, Должность: {self._position}"

    def __str__(self) -> str:
        return self.display_info()


# Класс Manager, наследуется от Employee
class Manager(Employee):
    def __init__(self, name: str, age: int, position: str):
        super().__init__(name, age, position)
        self._team: List[Employee] = []

    @property
    def team(self) -> List[Employee]:
        return self._team.copy()  # Возвращаем копию для инкапсуляции

    def add_to_team(self, employee: Employee) -> bool:
        """Добавляет сотрудника в команду менеджера."""
        if employee not in self._team:
            self._team.append(employee)
            return True
        return False

    def display_team_info(self) -> str:
        """Отображает информацию о команде менеджера."""
        if not self._team:
            return f"У менеджера {self.name} нет сотрудников в команде."

        team_info = f"\nКоманда менеджера {self.name}:\n"
        for i, employee in enumerate(self._team, 1):
            team_info += f"{i}. {employee.display_info()}\n"
        return team_info

    def __str__(self) -> str:
        base_info = super().display_info()
        return f"{base_info}, Размер команды: {len(self._team)} сотрудников"


# Класс для управления приложением
class UserManagementApp:
    def __init__(self):
        self._employees: List[Employee] = []
        self._managers: List[Manager] = []

    def add_employee(self, name: str, age: int, position: str, is_manager: bool = False) -> bool:
        """Добавляет нового сотрудника или менеджера."""
        try:
            age = int(age)
            if age < 18 or age > 100:
                print("Ошибка: Возраст должен быть от 18 до 100 лет.")
                return False

            if not name.strip():
                print("Ошибка: Имя не может быть пустым.")
                return False

            # Проверяем, существует ли уже сотрудник с таким именем
            all_people = self._employees + self._managers
            if any(person.name == name for person in all_people):
                print(f"Ошибка: Сотрудник с именем '{name}' уже существует.")
                return False

            if is_manager:
                manager = Manager(name, age, position)
                self._managers.append(manager)
                self._employees.append(manager)  # Менеджер также является сотрудником
                print(f"Менеджер {name} успешно добавлен.")
            else:
                employee = Employee(name, age, position)
                self._employees.append(employee)
                print(f"Сотрудник {name} успешно добавлен.")

            return True

        except ValueError:
            print("Ошибка: Возраст должен быть целым числом.")
            return False

    def assign_to_manager(self, manager_name: str, employee_name: str) -> bool:
        """Назначает сотрудника в команду менеджера."""
        # Ищем менеджера
        manager = None
        for m in self._managers:
            if m.name == manager_name:
                manager = m
                break

        if not manager:
            print(f"Ошибка: Менеджер с именем '{manager_name}' не найден.")
            return False

        # Ищем сотрудника (но не самого менеджера)
        employee = None
        for e in self._employees:
            if e.name == employee_name and e.name != manager_name:
                employee = e
                break

        if not employee:
            print(f"Ошибка: Сотрудник с именем '{employee_name}' не найден.")
            return False

        # Проверяем, не пытаемся ли добавить менеджера в свою же команду
        if employee_name == manager_name:
            print("Ошибка: Менеджер не может быть добавлен в свою собственную команду.")
            return False

        # Проверяем, не находится ли сотрудник уже в команде
        if employee in manager.team:
            print(f"Ошибка: Сотрудник {employee_name} уже в команде менеджера {manager_name}.")
            return False

        # Добавляем в команду
        if manager.add_to_team(employee):
            print(f"Сотрудник {employee_name} успешно добавлен в команду менеджера {manager_name}.")
            return True
        else:
            print(f"Ошибка при добавлении сотрудника в команду.")
            return False

    def display_all_people(self):
        """Отображает всех сотрудников и менеджеров."""
        if not self._employees:
            print("В системе пока нет сотрудников.")
            return

        print("\n=== СПИСОК ВСЕХ СОТРУДНИКОВ ===")

        # Сначала выводим менеджеров
        if self._managers:
            print("\n--- Менеджеры ---")
            for i, manager in enumerate(self._managers, 1):
                print(f"{i}. {manager}")
                # Показываем информацию о команде менеджера
                print(manager.display_team_info())

        # Затем остальных сотрудников
        regular_employees = [e for e in self._employees if e not in self._managers]
        if regular_employees:
            print("\n--- Сотрудники ---")
            for i, employee in enumerate(regular_employees, 1):
                print(f"{i}. {employee}")

        print(f"\nВсего сотрудников: {len(self._employees)}")
        print(f"Из них менеджеров: {len(self._managers)}")

    def run(self):
        """Основной цикл приложения."""
        print("=" * 50)
        print("ПРИЛОЖЕНИЕ ДЛЯ УЧЕТА ПОЛЬЗОВАТЕЛЕЙ В КОМПАНИИ")
        print("=" * 50)

        while True:
            print("\n--- МЕНЮ ---")
            print("1. Добавить нового сотрудника")
            print("2. Добавить нового менеджера")
            print("3. Назначить сотрудника в команду менеджера")
            print("4. Просмотреть всех сотрудников")
            print("5. Выйти из программы")

            choice = input("\nВыберите действие (1-5): ").strip()

            if choice == "1":
                self._add_employee_ui()
            elif choice == "2":
                self._add_manager_ui()
            elif choice == "3":
                self._assign_to_manager_ui()
            elif choice == "4":
                self.display_all_people()
            elif choice == "5":
                print("Выход из программы. До свидания!")
                break
            else:
                print("Ошибка: Неверный выбор. Пожалуйста, выберите от 1 до 5.")

    def _add_employee_ui(self):
        """Пользовательский интерфейс для добавления сотрудника."""
        print("\n--- ДОБАВЛЕНИЕ НОВОГО СОТРУДНИКА ---")
        name = input("Введите имя сотрудника: ").strip()
        age = input("Введите возраст сотрудника: ").strip()
        position = input("Введите должность сотрудника: ").strip()

        self.add_employee(name, age, position, is_manager=False)

    def _add_manager_ui(self):
        """Пользовательский интерфейс для добавления менеджера."""
        print("\n--- ДОБАВЛЕНИЕ НОВОГО МЕНЕДЖЕРА ---")
        name = input("Введите имя менеджера: ").strip()
        age = input("Введите возраст менеджера: ").strip()
        position = input("Введите должность менеджера: ").strip()

        self.add_employee(name, age, position, is_manager=True)

    def _assign_to_manager_ui(self):
        """Пользовательский интерфейс для назначения сотрудника в команду менеджера."""
        if not self._managers:
            print("Ошибка: В системе нет менеджеров. Сначала добавьте менеджера.")
            return

        if len(self._employees) <= len(self._managers):
            print("Ошибка: В системе нет сотрудников для назначения в команду.")
            return

        print("\n--- НАЗНАЧЕНИЕ СОТРУДНИКА В КОМАНДУ МЕНЕДЖЕРА ---")

        # Показываем список менеджеров
        print("Доступные менеджеры:")
        for i, manager in enumerate(self._managers, 1):
            print(f"{i}. {manager.name}")

        manager_name = input("Введите имя менеджера: ").strip()

        # Показываем список сотрудников (кроме менеджеров)
        regular_employees = [e for e in self._employees if e not in self._managers]
        print("\nДоступные сотрудники:")
        for i, employee in enumerate(regular_employees, 1):
            print(f"{i}. {employee.name}")

        employee_name = input("Введите имя сотрудника: ").strip()

        self.assign_to_manager(manager_name, employee_name)


# Основная функция для запуска приложения
def main():
    app = UserManagementApp()

    # Добавим несколько тестовых данных для демонстрации
    app.add_employee("Иван Петров", 35, "Технический директор", is_manager=True)
    app.add_employee("Анна Сидорова", 28, "Менеджер проектов", is_manager=True)
    app.add_employee("Петр Иванов", 25, "Разработчик")
    app.add_employee("Мария Смирнова", 30, "Дизайнер")
    app.add_employee("Сергей Козлов", 27, "Тестировщик")

    # Назначим сотрудников в команды
    app.assign_to_manager("Иван Петров", "Петр Иванов")
    app.assign_to_manager("Иван Петров", "Мария Смирнова")
    app.assign_to_manager("Анна Сидорова", "Сергей Козлов")

    # Запускаем основное приложение
    app.run()


if __name__ == "__main__":
    main()