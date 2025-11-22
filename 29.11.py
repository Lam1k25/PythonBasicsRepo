students = [
    {"name": "Анна", "score": 88},
    {"name": "Павел", "score": 95},
    {"name": "Игорь", "score": 72},
    {"name": "Марина", "score": 91},
]

sorted_students = sorted(students, key=lambda x: x["score"], reverse=True)
filtered_students = list(filter(lambda x: x["score"] > 85, students))
names_uppercase = list(map(lambda x: x["name"].upper(), filtered_students))
print("Имена в верхнем регистре:", names_uppercase)