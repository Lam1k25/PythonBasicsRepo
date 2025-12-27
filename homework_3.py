def count_vowels(text: str) -> int:
    vowels = "aeiou"
    return sum(1 for char in text.lower() if char in vowels)


import unittest


class TestCountVowels(unittest.TestCase):

    def test_regular_string(self):
        self.assertEqual(count_vowels("hello"), 2)

    def test_mixed_case(self):
        self.assertEqual(count_vowels("HeLLo WoRLD"), 3)

    def test_only_vowels(self):
        self.assertEqual(count_vowels("aeiouAEIOU"), 10)

    def test_no_vowels(self):
        self.assertEqual(count_vowels("bcdfg"), 0)

    def test_empty_string(self):
        self.assertEqual(count_vowels(""), 0)


if __name__ == "main":
    unittest.main()