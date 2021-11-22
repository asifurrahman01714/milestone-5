# Exclude common elements of two sets and combine all the elements in one set except the common elements of those two sets
A = {'apple', 'banana'} 
B= {'cherry', 'apple'} 
A.symmetric_difference_update(B) 
print(A) 
