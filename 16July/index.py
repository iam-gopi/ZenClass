# * dynamic language
# * high level programming language
# * free & open source
# * beginner friendly
# * have oops/structure oriented programming

# dynamic language?
# dont have to use datatype while declaring a variable
# DT assign based on the type of value of variable

# variable?
# a location in memory which going to hold the value
# ex: a = 178
# a = 123
# if(a > 18) {

# }

# Data type?
# describe type of data assign to a variable
# types:
# Primitive - int, float - 34.23, double, long,
#           - true, false
#           - char
# non - primitive - string, class, interface
# message = "hi, how are you? im doing well."
#     pre defined -> int, str (collection of character), char(single alphabet), boolean, long, double, float and decimal
#     user defined -> class
# age = "18"
# input

# inp = input("Enter your name ")
# print(type(inp))

# function => set of instructions that can be reused.
# purpose => reduce duplication, increase code readability

# type casting
# -------------
# to find out a type of variable we can type(<variable_name>)
# a = 15
# print(type(a))

# b = "15"
# print(type(b))
# print(b + str(a))


# condition stmt
# age = input('Enter your age ')
# age = int(age)
# if (age > 18 and age <= 100):
#     print("Eligible")
# elif (age > 100):
#     print("Invalid age")
# else:
#     print("not eligible")

# gender = input("Enter your gender")
# match(gender):
#     case "male":
#         print("A Queue")

#     case "female":
#         print("b Queue")
#     case _:
#         print("nothing works")


# loops
# while
#     do while
# for

# a = [1, 2, 3, 4, 5]
# for _ in range(10):  # [0,1,2,3,4,5,6,7,9]
#     print("gopi")
# a = 0
# while (a <= 10):
#     print(a)
#     a = a + 1

# do:
#     print(a)
#     a = a + 1
# while(a <= 10)

def add_two_numbers(a, b):
    print(a+b)
    return a + b


a = add_two_numbers(10, 10)
print(f"result of add two number is {a + 10}")

