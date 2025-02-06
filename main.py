import random
def str_checker(t):
    return not t.isdigit()
def main():
    required = []
    
    ticker = 1
    prefix = input("what is the time constraint for n?")
    if str_checker(prefix):
        print("Invalid. try again")
        return
    time_constraint = int(prefix)

    while True:
        dyna_string = "What goes on line #{a}? \n1. one number, the length of an array \n2. one number \n3. an array of numbers \n4. a set of numbers (n, m)\n5. a string \n6. that's it\n".format(a=str(ticker))
        queue = input(dyna_string)
        if str_checker(queue) or int(queue) > 6:
            print("invalid input. please try again")
            return
        queue = int(queue)
        if queue == 6:
            break
        required.append(queue)
        ticker += 1
    
    len_array = -1
    output = []
    for part in required:
        temp = []
        if part == 1:
            rand = random.randrange(0, time_constraint)
            temp.append(rand)
            len_array = rand
        elif part == 2:
            temp.append(random.randrange(0, 10000))
        elif part == 3:
            if len_array != -1:
                for _ in range(len_array):
                    temp.append(random.randrange(0, 100000)) 
                    # for next time, see if it is possible to implement the ability to only have small amounts of numbers               
    
    
main()