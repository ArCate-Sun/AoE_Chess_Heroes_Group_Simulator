import os
import cv2


x1 = 375
y1 = 323
sizex = 255
sizey = 405
xdis = 282
os.makedirs("image")
trainpath = r'C:\Users\jf\Pictures\pictures'


def get_img_file(file_name):
    imagelist = []
    for parent, dirnames, filenames in os.walk(file_name):
        for filename in filenames:
            if filename.lower().endswith(('.bmp', '.dib', '.png', '.jpg', '.jpeg', '.pbm', '.pgm', '.ppm', '.tif', '.tiff', 'PNG')):
                imagelist.append(os.path.join(parent, filename))
        return imagelist

image_name = get_img_file(trainpath)
count = 0
print(image_name)
for pic in image_name:
    image = cv2.imread(pic)
    # cv2.imshow("image", image)
    # cv2.waitKey(0)
    for i in range(6):
        cropped = image[y1:y1+sizey, x1+i*xdis:x1+sizex+i*xdis]
        count += 1
        cv2.imwrite("./image/image"+str(count)+".jpg", cropped)
