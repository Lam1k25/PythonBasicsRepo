class Student:
    students = []  # список всех студентов

    def init(self, name):
        self.name = name
        self.grades = []
        Student.students.append(self)

    
    @staticmethod
    def is_valid_grade(grade):
        return 1 <= grade <= 5

    
    def add_grade(self, grade):
        if Student.is_valid_grade(grade):
            self.grades.append(grade)
        else:
            raise ValueError("Оценка должна быть в диапазоне от 1 до 5")

    def average_grade(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

    
    @classmethod
    def average_all_students(cls):
        all_grades = []
        for student in cls.students:
            all_grades.extend(student.grades)

        if not all_grades:
            return 0
        return sum(all_grades) / len(all_grades)

    @classmethod
    def find_student(cls, name):
        for student in cls.students:
            if student.name == name:
                return student
        return None



def menu():
    print("\nВыберите действие:")
    print("1. Добавить нового студента")
    print("2. Добавить оценки студенту")
    print("3. Вывести среднюю оценку студента")
    print("4. Вывести среднюю оценку всех студентов")
    print("5. Проверить допустимость оценки")
    print("0. Выход")


while True:
    menu()
    choice = input("Ваш выбор: ")

    try:
        if choice == "1":
            name = input("Введите имя студента: ")
            Student(name)
            print("Студент добавлен.")

        elif choice == "2":
            name = input("Введите имя студента: ")
            student = Student.find_student(name)

            if not student:
                print("Студент не найден.")
                continue

            grade = int(input("Введите оценку (1–5): "))
            student.add_grade(grade)
            print("Оценка добавлена.")

        elif choice == "3":
            name = input("Введите имя студента: ")
            student = Student.find_student(name)

            if not student:
                print("Студент не найден.")
            else:
                print(f"Средняя оценка {student.name}: {student.average_grade():.2f}")

        elif choice == "4":
            avg = Student.average_all_students()
            print(f"Средняя оценка всех студентов: {avg:.2f}")

        elif choice == "5":
            grade = int(input("Введите оценку для проверки: "))
            if Student.is_valid_grade(grade):
                print("Оценка допустима.")
            else:
                print("Недопустимая оценка!")

        elif choice == "0":
            print("Выход из программы.")
            break

        else:
            print("Неверный выбор.")

    except ValueError as e:
        print(f"Ошибка: {e}")