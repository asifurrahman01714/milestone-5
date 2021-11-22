try:
    fp = open("example.txt", "r")
    fp.read()
except Exception: 
    print("Files does not exist. Make sure you have the file with the above name")
