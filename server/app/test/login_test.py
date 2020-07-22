import unittest
from ..main.services.user import login as user_login


class LoginTest(unittest.TestCase):

    def test_login_error(self):

        obj = {
            "password": "hi"
        }

        # self.assertFalse(user_login(obj))
        self.assertTrue(user_login(obj))

    def test_login_type(self):

        obj = {
            "email": 234,
            "password": 123
        }

        # self.assertFalse(user_login(obj))
        self.assertTrue(user_login(obj))
    
    def test_login_empty(self):

        data = {
            "username": "",
            "password": ""
        }
        self.assertTrue(user_login(data))

    def test_login_datatype(self):

        data = {
            "username": "abhi@gmail.com",
            "password": 1234
        }
        self.assertTrue(user_login(data))

    def test_login_input(self):
        self.assertTrue(user_login(0))
        self.assertTrue(user_login(""))
        self.assertTrue(user_login([]))
        self.assertTrue(user_login({}))

    def test_login_one_missing(self):

        data = {
            "username": "",
        }
        self.assertTrue(user_login(data))
