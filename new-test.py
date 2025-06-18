cube = 27
cube = 8120601
cube = 10000
epsilon = 0.1
guess = 0.0
increment = 0.01
num_guesses = 0
# Look for close enough answer and make sure
# didn't accidentally skip the close enough bound
while abs(guess**3 - cube) >= epsilon:  # and guess <= cube:
    guess += increment
    num_guesses += 1

print("num_guesses = ", num_guesses)
if abs(guess**3 - cube) >= epsilon:
    print("Failed on cube root of", cube, "With these paramenters")
else:
    print(guess, "is close to the cube root of", cube)


# ! One of the core principle of functional programming is to not change things.
# * Change leads to bugs.
# ? In Functional programming [ changing, altering ] things is called *mutation* & the outcome is called the *side-effect*.

# ! The another core principle of functional programming is to always declare your dependencies explicitly.
# * Pass the variable or function as an arguments
# ? Your function don't depends on the global variable.
