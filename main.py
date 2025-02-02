import random
def str_checker(t):
    return t == str(t)
def main():
    # find the number of testcases
    num_testcases = input("how many test casese would you like to generate?\n")
    if str_checker(num_testcases):
        return "please input an integer"
    num_testcases = int(num_testcases)
    
    # find the number of testcases in one input, if needed
    if_t_exists = input("does the problem have multiple testcases in one input? 1 for yes, 0 for no\n")
    if str_checker(if_t_exists):
        return "invalid response. please try again"
    if_t_exists = int(if_t_exists)
    
    if if_t_exists != 1 or if_t_exists != 2:
        return 'invalid response. please try again'
    if if_t_exists == 1:
        t = input("input the amount of testcases per input for you want.\n")
        if str_checker:
            return "please input an integer"
        t = int(t)
    
    # most simple case, n and an array after
    
    n_exists = input('does the input start with an n? 1/0\n')
    if str_checker(n_exists):
        return "invalid response. try again"
    
main()