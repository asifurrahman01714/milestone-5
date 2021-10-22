try:
    numerator = 4
    denominator = 0 
    print(numerator/denominator)
except ZeroDivisionError: 
    print("Cannot divide a number by zero, please try again with another valid value")

# With error message
try:
    numerator = 4
    denominator = 0 
    print(numerator/denominator)
except ZeroDivisionError as e: 
    print("Cannot divide a number by zero, please try again with another valid value,", e)
