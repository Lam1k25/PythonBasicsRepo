# # from MainWindow import MainWindow
# # if __name__ == "__main__":
# #     app = MainWindow()
# #     app.mainloop()
# # two_d_nums: list[list[int]] = [[1, 2, 3],
# #                                [10, 11, 12]
# #                                 ]
# # for row in two_d_nums:
# #     for el in row:
# #         print(el)
# # for i in range(len(two_d_nums)):
# #     for j in range(len(two_d_nums[i])):
# #         print(two_d_nums[i][j])
# #
# # i: int = 0
# # while i < len(two_d_nums):
# #     j: int = 0
# #     while j < len(two_d_nums[i]):
# #         print(two_d_nums[i][j])
# #         j += 1
# #     i += 1
# # name: str = "Danis"
# # surname: str = "Zamaldinov"
# # print(name * 3)
# #
# # list_1: list[int] = [10, 20 ,30]
# # list_2: list[str] = ['a', 'b ', 'c']
#
# # 192.168.0.300
#
# #nums: list[str] = [int(el) for el in input().split()]
# #for num in nums:
# #    print("+" * num)
#
# # ip_add: list[str] = (input())
# #nums: list[str] = [int(el) for el in input().split('.')]
# #flag = True
# #if len(nums) != 4:
# #    print('wrong')
# #else:
# #    for el in nums:
# #            flag = False
# #            break
#
# #if flag == True:
# #    print('корректно')
# #else:
# #    print("некорректно")
#
#
# # nums: str = input()
# # separator = input("введите разделитель:")
# # print(separator.join(nums))
#
# #print(input().join(input()))
#
# # nums: list[int] = [int(num) for num in input().split()]
# # print(sorted(nums), sorted(nums, reverse=True), sep='\n')
# # words: str = input().split()
# # print(len(max(words)))
# # print(len(max(input().split())))
#
# # print(len(max(input().split(), key=len)))
# #
# # nums: str = input()
# # count: int = 0
# # for i in range(len(nums)):
# #     for j in range(i + 1, len(nums)):
# #         if nums[i] == nums[j]:
# #             count += 1
# # print(count)
# # from typing import Any
# #
# # population: dict[str, Any] = {
# #     "Moscow": 14_000_000,
# #     "Saint-Petersburg": 9_000_000,
# #     "Kazan": 1_300_000,
# #     "Zimbabve": "empty"
# # }
# # print(population["Kazan"])
# # print(population.get("Paris", "no key"))
# # p_pop: Any = population.get("Paris")
# # if p_pop:
# #     print('dfgsgsg')
# # else:
# #     print(population.get("Moscow"))
# #
# # print(population.keys())
# # print(population.values())
# # print(population.items())
# #
# # for i, v in population.items():
# #     print(i, v)
# #
# # # population.pop("Zimbabve")
# # # print(population)
# # def square(x):
# #     return x * x
#
# def say_hello(name: str) -> None:
#     print("hello,", name)
#
#
# def my_max(a: int, b: int) -> int:
#     """
#     Возвращает максимальное число из двух
#     """
#     if a > b:
#         return a
#     return b
#
#
# print(my_max(5, 3))
#
# x: int = 10
#
#
# def func() -> None:
#     a = 5
#     print(a)
#
#
# func()
# print(x)

# words: list[str] = input().split()
# words_count: dict[str, int] = {el: 0 for el in words}
# for el in words:
#     words_count[el] = 0
# for el in words:
#     words_count[el] += 1
# print(words_count)
# store: dict[str, int] = {
#     'хлеб': 60,
#     'молоко': 80,
#     'сыр': 150
# }
# product: str = input('введите товар:')
# if product in store:
#     print("Цена:", store.get(product))
# else:
#     print("такого товара нет")
# students = {
#     "Анна": [5, 4, 5, 5],
#     "Борис": [3, 4, 4, 5]
# }
#
#
# def average(grades: [list[int]]) -> float:
#     return sum(grades) / len(grades)
#
#
# for name, grades in students.items():
#     print(name, "->", average(grades


# print(math.cos(30))
# print(dt.datetime.now())
# print(dt.date.today())



# def greet(name: str) -> str:
#     return f'Hello, {name}'
#
#
# def sum(num_1: int | float, num_2: int | float) -> int | float:
#     return num_1 + num_2
#
#
# def multi(num_1: int | float, num_2: int | float) -> int | float:
#     return num_1 * num_2
#
#
# def main():
#     print(greet("danis"))
#     print(sum(12, 67))
#     print(multi(2, 2))
#
#
# main()
# from funcs import (
#     show_menu,
#     show_expenses,
#     show_expenses_by_category,
#     add_expense,
#     delete_expenses)
#
#
# expenses: dict[str, list[float | int]] = {}
#
#
# def show_menu():
#     print("Выберите действие: ")
#     print("1. Добавить расход")
#     print("2. Посмотреть расходы")
#     print("3. Посмотреть расходы по категории")
#     print("4. Удалить расходы")
#     print("5. Выйти")
#
#
# def add_expense(expense: dict) -> None:
#     category: str = input('Введите категорию: ')
#     expense: list[int] = [float(num) for num in input().split()]
#
#     if expenses.get(category):
#         expenses[category] = expense
#     else:
#         for ex in expense:
#             expense[category].append(ex)
#
#
# def show_expenses(expenses: dict) -> None:
#     for key, val in expenses.items():
#         print(f"{key} - {sum(val)}")
#
#
# def show_expenses_by_category(category: str, expenses: dict) -> None:
#     print(f"{category} - {expenses.get(category, 0)}")
#
#
# def delete_expenses(expenses: dict, category: str) -> None:
#     if expenses.get(category):
#         del expenses[category]
#     else:
#         print("нет такой категории")
#
#
# def main() -> None:
#     print("Добро пожаловать в программу учёта расходов!")
#     show_menu()
#     expenses: dict[str, list[float | int]] = {}
#     while True:
#         user_input: int = int(input("Выберите вариант: "))
#         if user_input == 1:
#             add_expense(expenses)
#         elif user_input == 2:
#             show_expenses(expenses)
#         elif user_input == 3:
#             category: str = input("Введите категорию: ")
#             show_expenses_by_category(expenses, category)
#         elif user_input == 4:
#             category: str = input("Введите категорию: ")
#             delete_expenses(expenses, category)
#         elif user_input == 5:
#             break
#         else:
#             print("непонятно")
#
# if __name__ == "__main__":
#     main()
# nums: list[int] = [10, 20, 30, 40, 100]
# greeting: str = "Hello, It`s me!"
# nums_2: list[int] = nums[1:3]
# print(nums[1:3])
# print(greeting[:5])
# print(nums[::-1])
# print(nums_2)


from typing import Any


def linear_search(elements: list[Any], elem: Any) -> int:
    for i in range(len(elements)):
        if elements[i] == elem:
            return i



if __name__ == "__main__":
    elements: list[Any] = [100, "hi", 3.14, "!", True]
    print(linear_search(elements, "!"))
