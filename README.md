# Connect the Dots #
Implemented using JavaScript and JQuery. The program can be ran by viewing the "index.html" file, which located in the "public_html: directory.  

### Side Notes ###

* Dot placement is restricted to the black box.
* No more than 10 dots can be solved or else the program will crash.
* Dot placement will not be placed on the location of the mouse click if the user happens to re-size the browser. The users would have refresh the page if a specific window size is desired.

### Overview  ###
This uses a brute force algorithm that generates all the possible graphs made from a given set of dots. Then uses the "Line Segment to Line Segment Intersection" algorithm to determine if the given graph has any intersections. 

1. Given N points, permute all the point-point (line segments) relations and all the possible cycle graphs that can be formulated.

2. For each permutation of a cycle graph, check to see if there are any intersection among the cycle graph's line segments excluding line segments connected by endpoint to endpoint. When a solution is found, call the Canvas APIs to make the lines.
