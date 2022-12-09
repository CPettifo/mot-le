# This program extracts from a txt file and outputs all five-letter non-acronyms

counter = 0
line_counter = 0
search = input("Search for 5-letter word: ")
search_count = 0
fivers = []
search_list = []

with open('dictionary.txt', 'r') as f:
    for line in f:
        if search in line:
            search_list.append(line)
            search_count += 1
        line = line.replace('se', '')
        line = line.replace('au', '')
        line = line.replace('.', '')
        line = line.strip()
        if len(line) == 5:
            counter += 1
            if line not in fivers:
                fivers.append(line)
        line_counter += 1
    f.close()

f = open("fivers.txt", "w")
f.write("")
f.close()

fiver_counter = 0
for x in fivers:
    caps_counter = 0
    for letter in x:
        if letter.isupper():
            caps_counter += 1
    if caps_counter == 0:
        f = open("fivers.txt", "a")
        f.write(x)
        f.write('\n')
        fiver_counter += 1
        f.close()
    else:
        print(caps_counter)
    caps_counter = 0

print(f"{counter} 5-letter words found from {line_counter}")
print(f"Your queried word was found this many times in the dictionary: {search_count}")
pause = input(f"Instances of the word in the dictionary will be outputted below once you press enter")
for x in search_list:
    print(x)
print(f"{fiver_counter} words in fiver.txt now")
