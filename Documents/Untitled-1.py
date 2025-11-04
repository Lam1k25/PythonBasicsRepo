n: int = int(input())  
m: int = int(input())  
  
matrix =  []
for i in range(n):  
    row = list(map(int, input(f"Строка {i + 1}: ").split()))  
    matrix.append(row)  
  
transposed = [[matrix[j][i] for j in range(n)] for i in range(m)]  
  
#print("\nТранспонированная матрица:")  
for row in transposed:  
    print(" ".join(map(str, row)))  
