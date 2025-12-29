import math

class Vector2D:
    def init(self, x, y):
        self.x = x
        self.y = y

    def add(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        return Vector2D(self.x + other.x, self.y + other.y)

    def sub(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        return Vector2D(self.x - other.x, self.y - other.y)

    def length(self):
        return math.sqrt(self.x  2 + self.y  2)

    def str(self):
        return f"Vector({self.x}, {self.y})"