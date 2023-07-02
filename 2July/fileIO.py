# f = open("myfile.txt", "r")
# # f.write("third write to the methiod")
# a = f.read()
# print(a)
# f.close()

############

with open("myfile.txt", "r") as fo:
    a = fo.read()
    print(a)
