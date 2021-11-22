def isEven(number):
    if number % 2 == 0:
        return True
    else:
        return False

def isOdd(number):
    if number % 2 != 0:
        return True
    else:
        return False


number = int(input("Enter a number to test:"))
print(isEven(number))
print(isOdd(number))
