import cv2
cap = cv2.VideoCapture(1)
while True:
    _, frame = cap.read()
    cv2.imshow("Output", frame)
    if cv2.waitKey(10) == ord('q'):
        break
