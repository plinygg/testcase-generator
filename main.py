import random
def str_checker(t):
    return not t.isdigit()
def main():
    required = []
    
    ticker = 1
    while True:
        dyna_string = "What goes on line #{a}? \n1. one number, the length of an array \n2. one number \n3. an array of numbers \n4. a set of numbers (n, m)\n5. a string \n6. an array of strings \n7. that's it\n".format(a=str(ticker))
        queue = input(dyna_string)
        if str_checker(queue) or int(queue) > 7:
            print("invalid input. please try again")
            return
        queue = int(queue)
        if queue == 7:
            break
        required.append(queue)
        ticker += 1
    
    len_array = -1
    output = []
    for part in required:
        temp = []
        if part == 1:
            time_constraint = input("Are there time constraints to this number?")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            rand = random.randrange(0, time_constraint)
            temp.append(rand)
            len_array = rand
        elif part == 2:
            time_constraint = input("Are there time constraints to this number?")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            temp.append(random.randrange(0, time_constraint))
        elif part == 3:
            time_constraint = input("Are there constraints to the size of an individual number?")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            if len_array != -1:
                for _ in range(len_array):
                    temp.append(random.randrange(0, time_constraint))
        elif part == 4:
            number = input("how many numbers are in the line?")
            if str_checker(number):
                print('broooo invalid')
                return
            number = int(number)
            time_constraint = input("Are there constraints to the size of an individual number?")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            for _ in range(number):
                temp.append(random.randrange(0, time_constraint))
        elif part == 5:
            time_constraint = input("how long do you want the string to be?")
            if str_checker(number):
                print('broooo invalid')
                return
            time_constraint = int(time_constraint)
            allowed = input("how many letters are allowed? input all for all")
            if allowed != "all" or str_checker(allowed):
                print('invalid input')
                return
            allowed = int(allowed)
            letters = []
            for _ in range(len(allowed)):
                letter = input("input an allowed letter")
                if len(letter) > 1 or not str_checker(letter):
                    print('invalid input')
                    return
                letters.append(letter)
            string = ""
            for _ in range(random.randrange(1, time_constraint)):
                string += chr(random.randrange(0, len(letters)))
            temp.append(string)
        elif part == 6:
            pass
main()