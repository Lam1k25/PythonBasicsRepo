def show_menu():
    """Выводит меню программы"""
    print("\n" + "="*40)
    print("Добро пожаловать в программу учёта расходов!")
    print("="*40)
    print("1. Добавить расход")
    print("2. Показать все расходы")
    print("3. Показать статистику")
    print("4. Удалить расход")
    print("5. Выйти")
    print("="*40)

def add_expense(expenses):
    """Добавляет новый расход"""
    print("\n--- Добавление нового расхода ---")
    
    category = input("Введите категорию расхода: ").strip()
    if not category:
        print("Ошибка: категория не может быть пустой!")
        return
    
    try:
        amount = float(input("Введите сумму расхода: "))
        if amount <= 0:
            print("Ошибка: сумма должна быть положительной!")
            return
    except ValueError:
        print("Ошибка: введите корректное число!")
        return
    
    expense = {
        'category': category,
        'amount': amount
    }
    
    expenses.append(expense)
    print(f"✓ Расход добавлен: {category} - {amount:.2f} руб.")

def show_expenses(expenses):
    """Выводит все расходы"""
    print("\n--- Все расходы ---")
    
    if not expenses:
        print("Расходы отсутствуют.")
        return
    
    for i, expense in enumerate(expenses, 1):
        print(f"{i}. {expense['category']}: {expense['amount']:.2f} руб.")

def show_stats(expenses):
    """Показывает статистику по расходам"""
    print("\n--- Статистика расходов ---")
    
    if not expenses:
        print("Расходы отсутствуют.")
        return
    
    # Общая сумма расходов
    total = sum(expense['amount'] for expense in expenses)
    print(f"Общая сумма расходов: {total:.2f} руб.")
    
    # Расходы по категориям
    print("\nРасходы по категориям:")
    categories = {}
    
    for expense in expenses:
        category = expense['category']
        amount = expense['amount']
        if category in categories:
            categories[category] += amount
        else:
            categories[category] = amount
    
    if categories:
        for category, amount in categories.items():
            print(f"  {category}: {amount:.2f} руб.")
        
        # Самая затратная категория
        max_category = max(categories.items(), key=lambda x: x[1])
        print(f"\nСамая затратная категория: {max_category[0]} ({max_category[1]:.2f} руб.)")

def delete_expense(expenses):
    """Удаляет запись по индексу"""
    print("\n--- Удаление расхода ---")
    
    if not expenses:
        print("Расходы отсутствуют.")
        return
    
    show_expenses(expenses)
    
    try:
        index = int(input("\nВведите номер расхода для удаления: ")) - 1
        
        if 0 <= index < len(expenses):
            deleted_expense = expenses.pop(index)
            print(f"✓ Расход удален: {deleted_expense['category']} - {deleted_expense['amount']:.2f} руб.")
        else:
            print("Ошибка: неверный номер расхода!")
    except ValueError:
        print("Ошибка: введите корректный номер!")

def main():
    """Основная функция программы"""
    expenses = []
    
    while True:
        show_menu()
        
        try:
            choice = input("\nВыберите действие (1-5): ").strip()
            
            if choice == '1':
                add_expense(expenses)
            elif choice == '2':
                show_expenses(expenses)
            elif choice == '3':
                show_stats(expenses)
            elif choice == '4':
                delete_expense(expenses)
            elif choice == '5':
                print("\nСпасибо за использование программы! До свидания!")
                break
            else:
                print("Ошибка: выберите действие от 1 до 5!")
        
        except KeyboardInterrupt:
            print("\n\nПрограмма прервана пользователем.")
            break
        except Exception as e:
            print(f"Произошла ошибка: {e}")

# Запуск программы
if __name__ == "main":
    main()