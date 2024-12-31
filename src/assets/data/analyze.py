import os
import sys
import json

# change working directory
os.chdir("C:/Users/Admin/Documents/custom/web design/bookstore-website/src/assets/data")


def main():
    try:
        with open("./books.json", mode="r") as books_data:
            books = json.load(books_data)

            categories = []
            for book in books:
                categories.append(book["category"])

            print(set(categories))
        # pass
    except:
        print("An error occured {}".format(sys.exc_info()))


if __name__ == "__main__":
    # print("Working directory: {}".format(os.getcwd()))
    main()
