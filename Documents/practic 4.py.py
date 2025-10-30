# Task 5
# numbers: list[int] = [3, 7, 1, 9, 4]
# max_num = numbers[0]
# for n in numbers:
#     if n > max_num:
#         max_num = n
# print("Максимум:", max_num)
# Task 6
# nums: list[int] = []
# for i in range(5):
#     x = int(input("Введите число: "))
#     nums.append(x)
# total = 0
# for n in nums:
#     total += n
# print("Сумма:", total)
# Task 7
# names: list[str] = ["Анна", "Борис", "Катя", "Дима"]
# for name in names:
# мой вариант условия:
#   if 'К'in name:
# предложенный вариант условия:
# if name.startswith("К"):
#         print(name)
# Task 8 
# n: int = int(input())
# for i in range(1, n):
#     if i % 3 == 0:
#         continue

# print(i)
#Task 9
# n: int = int(input("Введите n: "))
# fact = 1
# for i in range(1, n+1):
#     fact *= i
# print("Факториал:", fact)
# Task 10
# data:list[int] = input("Введите числа через пробел: ").split()
# nums = [int(x) for x in data]
# avg = sum(nums) / len(nums)
# result = []
# for n in nums:
#     if n > avg:
#         result.append(n)
# print("Числа больше среднего:", result)
# Task 11
# words: list[str] = ["apple", "banana", "cherry", "date"]
# upper_words: list = []
# for w in words:
#     upper_words.append(w.upper())
# print(upper_words)
# Task 12
# n: int = int(input("Введите n: "))
# for i in range(1, n + 1):
#     for j in range(1, n + 1):
#         print(f"{i} * {j} = {i * j}", end="\t")
# print()
# Task 13
# nums: list[int]= [int(x) for x in input("Введите числа через пробел:").split()]
# count: int = 0
# for i in range(1, len(nums)):
#     if nums[i] > nums[i - 1]:
#         count += 1
# print("Количество элементов, больше предыдущего:", count)
# Task 14
nums = [5, 2, 3, 2, 5, 2]
for el in nums:
    if el == 2:
        nums.pop(el)

# while 2 in nums:
# nums.remove(2)
print(nums)