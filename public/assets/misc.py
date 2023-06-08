import cv2
import os
import glob


def image_resize(image, width=None, height=None, inter=cv2.INTER_AREA):
    # initialize the dimensions of the image to be resized and
    # grab the image size
    dim = None
    (h, w) = image.shape[:2]

    # if both the width and height are None, then return the
    # original image
    if width is None and height is None:
        return image

    # check to see if the width is None
    if width is None:
        # calculate the ratio of the height and construct the
        # dimensions
        r = height / float(h)
        dim = (int(w * r), height)

    # otherwise, the height is None
    else:
        # calculate the ratio of the width and construct the
        # dimensions
        r = width / float(w)
        dim = (width, int(h * r))

    # resize the image
    resized = cv2.resize(image, dim, interpolation=inter)

    # return the resized image
    return resized


def resize_images(output_path, images):
    for image in images:
        img = cv2.imread(image)
        resized = image_resize(img, width=1000)
        file_name = image.split("/")[-1]
        cv2.imwrite(output_path + file_name, resized)
        print("Resized: " + file_name)

    print("Done")


def main():
    curpath = os.getcwd()
    path = curpath + "/BrianCollins/"
    # output_path = curpath + "/spreads_resized/"
    images = glob.glob(path + "*.png")
    # resize_images(output_path, images)

    file_names = [image.split("/")[-1] for image in images]

    print(file_names)


main()
