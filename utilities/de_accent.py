# This program will find all instances of accented characters in the words and change them into an unaccented version

# initialize all alphabet letters, and accented letters lists
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

accented = []
# open the fivers.txt file
with open('fivers.txt', 'r') as file:
# read through the file and search for words that aren't composed of entirely alphabet characters. 
    for word in file:
        for letter in word:
            if letter not in alphabet:
                temp_letter = letter
            if letter == 'ˡ' or letter == 'ᵉ' or letter == 'ˢ':
                print (word)
# add new "strange" letters to a list to be replaced in the next step below
                if temp_letter not in accented:
                    accented.append(temp_letter)

print(accented)