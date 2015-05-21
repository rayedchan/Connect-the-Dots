/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function permute(array) {
    // Identity
    if(!array.length) {
        return [];
    }
    
    var ret = [array],
        len = array.length,
        modlen = len - 1,
        mover = array[modlen],
        which,
        subset = permute(array.slice(0, -1)),
        permlen = subset.length;
    
    for(var iy = 0; iy < permlen; iy++) {
        which = subset[iy];
        if(iy % 2) {
            for(var ix = 0; ix <= modlen; ix ++) {
                ret.push(which.slice(0, ix).concat([mover], which.slice(ix)));
            }
        } else {
            for(var ix = modlen - 1; ix >= 0; ix --) {
                ret.push(which.slice(0, ix).concat([mover], which.slice(ix)));
            }
        }
    }
    return ret;
}
