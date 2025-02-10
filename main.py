import random
def str_checker(t):
    return not t.isdigit()
def main():
    required = []
    
    num_testcases = input("how many test cases do you want?\n")
    if str_checker(num_testcases):
        print("invalid input")
        return
    num_testcases = int(num_testcases)
    
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
            time_constraint = input("Are there time constraints to this number?\n")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            rand = random.randrange(0, time_constraint)
            temp.append(rand)
            len_array = rand
        elif part == 2:
            time_constraint = input("Are there time constraints to this number?\n")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            temp.append(random.randrange(0, time_constraint))
        elif part == 3:
            time_constraint = input("Input the constraint to this number\n")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            if len_array != -1:
                for _ in range(len_array):
                    temp.append(random.randrange(0, time_constraint))
        elif part == 4:
            number = input("how many numbers are in the line?\n")
            if str_checker(number):
                print('broooo invalid')
                return
            number = int(number)
            time_constraint = input("Input the constraints to the number\n")
            if str_checker(time_constraint):
                print('invalid input. please try again')
                return
            time_constraint = int(time_constraint)
            for _ in range(number):
                temp.append(random.randrange(0, time_constraint))
        elif part == 5:
            time_constraint = input("how long do you want the string to be?\n")
            if str_checker(number):
                print('broooo invalid')
                return
            time_constraint = int(time_constraint)
            allowed = input("how many letters are allowed? input all for all\n")
            if allowed != "all" or str_checker(allowed):
                print('invalid input')
                return
            allowed = int(allowed)
            letters = []
            for _ in range(len(allowed)):
                letter = input("input an allowed letter\n")
                if len(letter) > 1 or not str_checker(letter):
                    print('invalid input')
                    return
                letters.append(letter)
            string = ""
            for _ in range(random.randrange(1, time_constraint)):
                string += chr(random.randrange(0, len(letters)))
            temp.append(string)
        elif part == 6:
            time_constraint = input("how long do you want the array to be?\n")
            if str_checker(number):
                print('broooo invalid')
                return
            time_constraint = int(time_constraint)
            allowed = input("how many letters are allowed? input all for all\n")
            if allowed != "all" or str_checker(allowed):
                print('invalid input')
                return
            allowed = int(allowed)
            letters = []
            for _ in range(len(allowed)):
                letter = input("input an allowed letter\n")
                if len(letter) > 1 or not str_checker(letter):
                    print('invalid input')
                    return
                letters.append(letter)
            array_string = []
            for _ in range(random.randrange(1, time_constraint)):
                string.append(chr(random.randrange(0, len(letters))))
            temp.append(array_string)
        else:
            return
        output.append(temp)
    for line in output:
        temp = ""
        for item in line:
            temp += str(item)
        print(temp)
        
    # find out how to print a # of testcases with random numbers
main()