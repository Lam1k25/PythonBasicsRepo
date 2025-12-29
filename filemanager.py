class FileManager:
    def __init__(self, filename):
        self.filename = filename
        self.file = None

    def write(self, text):
        if self.file:
            self.file.write(text)
        else:
            raise ValueError("Файл не открыт для записи")

    def enter(self):
        self.file = open(self.filename, 'w', encoding='utf-8')
        return self

    def exit(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()