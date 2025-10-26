# task 1
m: int = int(input('введите число:'))
n: int = int(input('введите число:'))
for i in range(m, n + 1, + 1):
    if i % 17 == 0 or i % 10 == 9 or i % 3 == 0 and i % 5 == 0:
        print(i)

# task 2
n: int = int(input())
for i in range(1, n + 1, + 1):
    if  5 <= i <= 9:
        continue
    elif 17 <= i <= 37:
        continue
    elif 78 <= i <= 87:
        continue
    print(i)

# task 3
n: int = int(input())
m = [n, n, n]
for i in range(n):
    print(m)