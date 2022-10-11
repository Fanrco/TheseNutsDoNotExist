import os
 
#reorganize my nuts
def main():

    nuttyArray = []
    nutsFound = 0
    folder = "nuts"

    for count, filename in enumerate(os.listdir(folder)):
        if(filename[-3:] != "png"):
            continue
        if(filename[:4] == "Nuts"):
            nutsFound += 1
            continue
        nuttyArray.append(filename[:-4])
    
    for nut in range(len(nuttyArray)):
        filename = nuttyArray[nut]

        #rename nut image
        dst = f"Nuts{nut+nutsFound}.png"
        src =f"{folder}/{filename}.png"  
        dst =f"{folder}/{dst}"
        os.rename(src, dst)

        #rename nut yaml
        dst = f"Nuts{nut+nutsFound}.yaml"
        src =f"{folder}/{filename}.yaml"  
        dst =f"{folder}/{dst}"
        os.rename(src, dst)

if __name__ == '__main__':
     
    main()