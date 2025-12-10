# Исходная матрица
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

print("Исходная матрица:")
for row in matrix:
    print(row)
print()

# 1. Сумма по строкам
sum_rows = [sum(row) for row in matrix]
print(f"Сумма по строкам: {sum_rows}")

# 2. Сумма по столбцам
sum_cols = [sum(row[i] for row in matrix) for i in range(len(matrix[0]))]
print(f"Сумма по столбцам: {sum_cols}")

# 3. Транспонировать матрицу
transposed = [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]
print("Транспонированная матрица:")
for row in transposed:
    print(row)

# 4. Умножить каждое число на 2 (через map)
multiplied_by_2 = list(map(lambda row: list(map(lambda x: x * 2, row)), matrix))
print("Матрица, умноженная на 2:")
for row in multiplied_by_2:
    print(row)