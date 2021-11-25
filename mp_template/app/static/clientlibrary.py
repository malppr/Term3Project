from org.transcrypt.stubs.browser import *

# write down any library you need for the client
# this uses Transcrypt to create the javascript library

def gen_death():
    console.log('totalcases')
    total_death = float (document.getElementsByName("numbers")[0].value)
    new_cases = float (document.getElementsByName("numbers")[1].value)
    new_tests = float (document.getElementsByName("numbers")[2].value)
    people_vacc = float (document.getElementsByName("numbers")[3].value)
    new_vaccinations = float (document.getElementsByName("numbers")[4].value)
    console.log('totalcases')
    nodeath = 0.00213017390431345*total_death + 0.0104366986021982*new_cases  +(-0.0000346189224419462)*new_tests  +(-9.64601985212872*(10**-7))*people_vacc  +(-0.0000234387200641009)*new_vaccinations + 2.84284881239246
    #still need to normalise and get correct beta values
    document.getElementById("sorted1").innerHTML = str(nodeath)