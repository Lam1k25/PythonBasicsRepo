num_students = int(input("Введите количество студентов: "))


students = []

for i in range(num_students):
    name = input("Введите имя студента: ")
    grades_input = input("Введите оценки через пробел: ")
    
   
    grades_list = [int(grade) for grade in grades_input.split()]
    
    
    students.append([name, grades_list])

print("\n" + "="*40)
print("Имя\t\tСредний балл")
print("-"*40)


average_grades = []
names_list = []


for student in students:
    name = student[0]
    grades = student[1]
    
 
    total = 0
    count = 0
    for grade in grades:
        total += grade
        count += 1
    

    if count > 0:
        average = total / count
    else:
        average = 0
    
  
    average_grades.append(average)
    names_list.append(name)
    
    
    print(f"{name}\t\t{average:.1f}")


max_avg = max(average_grades)
min_avg = min(average_grades)
max_index = average_grades.index(max_avg)
min_index = average_grades.index(min_avg)


group_total = 0
group_count = 0
for avg in average_grades:
    group_total += avg
    group_count += 1

group_average = group_total / group_count if group_count > 0 else 0

print("\n" + "=" * 40)
print(f"Лучший студент: {names_list[max_index]} ({max_avg:.1f})")
print(f"Худший студент: {names_list[min_index]} ({min_avg:.1f})")
print(f"Средний балл по группе: {group_average:.2f}")


print("\n" + "="*40)
print("ДОПОЛНИТЕЛЬНЫЙ ОТЧЕТ")
print("="*40)


print("\nКачественная оценка:")
for student in students:
    name = student[0]
    grades = student[1]
    
    
    avg = sum(grades) / len(grades) if len(grades) > 0 else 0
    
    
    if avg >= 4.5:
        assessment = "Отлично"
    elif avg >= 3.5:
        assessment = "Хорошо"
    elif avg >= 2.5:
        assessment = "Удовлетворительно"
    else:
        assessment = "Плохо"
    
    print(f"{name}: {assessment}")


excellent_students = [
    student[0] for student in students 
    if len(student[1]) > 0 and sum(student[1]) / len(student[1]) >= 4.5
]

print(f"\nСтуденты с средним баллом >= 4.5: {excellent_students}")





all_grades = []
for student in students:
    all_grades.extend(student[1])


if all_grades:
    all_grades.sort()  
    print(f"Все оценки (отсортированные): {all_grades}")
    print(f"Минимальная оценка в группе: {min(all_grades)}")
    print(f"Максимальная оценка в группе: {max(all_grades)}")
    print(f"Количество всех оценок: {len(all_grades)}")