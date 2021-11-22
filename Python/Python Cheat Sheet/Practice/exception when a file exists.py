try:
    fp = open("/Python Cheat Sheet/Practice/count.py", "r")
    fp.read()
except Exception: 
    print("Files does not exist. Make sure you have the file with the above name")
else:
    print("Operation completed successfully")
