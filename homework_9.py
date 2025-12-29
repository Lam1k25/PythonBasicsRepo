def number_sequence(start, end, even=True):
    """
    Генератор чисел в заданном диапазоне.
    :param start: начало диапазона
    :param end: конец диапазона
    :param even: True — чётные, False — нечётные
    """
    for number in range(start, end + 1):
        if even and number % 2 == 0:
            yield number
        elif not even and number % 2 != 0:
            yield number


# --- Основная программа ---
try:
    start = int(input("Введите начало диапазона: "))
    end = int(input("Введите конец диапазона: "))

    choice = input("Выберите тип последовательности (чётные / нечётные): ").strip().lower()

    if choice == "чётные":
        even = True
    elif choice == "нечётные":
        even = False
    else:
        print("Ошибка: нужно выбрать 'чётные' или 'нечётные'")
        exit()

    print("Сгенерированная последовательность:")
    for num in number_sequence(start, end, even):
        print(num, end=" ")

except ValueError:
    print("Ошибка: пожалуйста, вводите только целые числа.")