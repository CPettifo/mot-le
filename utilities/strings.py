list = ["ABREV", "BIGWORD", "smallword"]

for word in list:
    print(word)
    counter = 0
    for x in word:
        if x.isupper():
            counter += 1
            print(counter)