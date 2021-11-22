import random

def Data():
    for i in range(5):
        yield random.randint(1, 10) 
        
    
for num in Data():
    print(num)
