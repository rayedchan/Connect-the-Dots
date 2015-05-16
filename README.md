# Connect the Dots #
Implemented using JavaScript and JQuery. The program can be ran by viewing the "index.html" file, which located in the "public_html: directory.  

### Side Notes ###

* Dot placement is restricted to the black box.
* No more than 9 dots can be solved or else the program will crash.
* Dot placement will not be placed on the location of the mouse click if the user happens to re-size the browser. The users would have refresh the page if a specific window size is desired.

### Overview  ###

1. Given N points, permutate all the point-point (line segments) relations and all the possible cycle graphs that can be formulated. (TODO: May consider using Steinhaus–Johnson–Trotter algorithm to get all permutations since current implementation is convoluted and there are too much allocation of these temporary objects.)

2. For each permutation of a cycle graph, check to see if there are any intersection among the cycle graph's line segments excluding line segments connected by endpoint to endpoint. (TODO: Cleanup Line Segment Intersection algorithm). When a solution is found, call the Canvas APIs to make the lines.
