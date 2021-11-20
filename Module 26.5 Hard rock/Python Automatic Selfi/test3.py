import cv2

# load classifier
face_cascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
smile_cascade = cv2.CascadeClassifier("haarcascade_smile.xml")

cap = cv2.VideoCapture(1)

while True:
    _, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # find facess
    face = face_cascade.detectMultiScale(gray, 1.5, 5)

    # iterate through all faces and draw rectangle
    for(x, y, w, h) in face:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (0, 255, 255), 2)

        face_roi = frame[y:y+h, x:x+w]
        face_gray = gray[y:y+h, x:x+w]
        
        # detect smile 
        smiles =  smile_cascade.detectMultiScale(face_gray, 1.3, 25)

        for(x, y, w, h) in smiles:
            cv2.rectangle(face_roi, (x,y), (x+w, y+h), (0, 0, 255), 2)

    cv2.imshow("Output", frame)
    if cv2.waitKey(10) == ord('q'):
        break
