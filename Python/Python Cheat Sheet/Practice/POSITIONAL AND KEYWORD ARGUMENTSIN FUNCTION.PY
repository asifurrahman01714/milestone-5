# Using positional arguments:
def describe_pet(animal, name): 
       """Display information about a pet.""" 
       print (f"\nI have a {animal}.") 
       print (f"Its name is {name}.") 

describe_pet('hamster', 'harry') 
describe_pet('dog', 'willie')



# Using keyword arguments:
def describe_pet(animal, name):
    """Display information about a pet.""" 
    print (f"\nI have a {animal}.") 
    print (f"Its name is {name}.") 

describe_pet(animal='hamster', name='harry') 
describe_pet(name='willie', animal='dog')

