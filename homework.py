a: int = int(input())
b: int = int(input())

max_sum = 0
result_number = a

for num in range(a, b + 1):
    current_sum = 0
    for i in range(1, num + 1):
        if num % i == 0:
            current_sum += i
    
    if current_sum > max_sum:
        max_sum = current_sum
        result_number = num
    elif current_sum == max_sum:
        if num > result_number:
            result_number = num

print('число с максимальной суммой делителей:', result_number, 'сумма делителей этого числа:', max_sum)