## Challenge #21
"Let's QUACK head for home!" LARRY states anxiously. However, you realize quickly that the x, y and z coordinates you've set in your `navigation` object won't get you precisely to Earth. You need to confirm with your home base before resetting the nagivation's x, y and z coordinates. It looks like you'll need to write a function called `returnToEarth()`. This function is a bit complicated, so you ask LARRY to walk you through it. LARRY responds, quacking that your function should:

- Call the built-in `broadcast()` function three times. Each of these calls should pass either "x", "y" or "z" as a parameter.

  - Store the response from each `broadcast()` call in it's own variable (The `broadcast()` function returns a coded-message from Earth with the correct coordinate to return home in `HEX`! Check out the hints for more on this)

- Decode the returned message using the `decodeMessage()` function you wrote earlier

- Change the decoded hex-coordinate to an integer using `parseInt()`

- Set each of the `navigation` object's x, y and z parameters to the integer coordinates

Call your `returnToEarth()` and head for home. "QUACK" shouts LARRY one final time "That's one small step for ducks and a giant leap for duck-kind." Mission complete.
