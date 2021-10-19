# Open the file "demofile2.txt" and append content to the file:
file = open("programming.txt", "a")
file.write("Now the file has more content!")
file.close()

#open and read the file after the appending:
file = open("programming.txt", "r")
print (file.read())