function rot13(str) {
    var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", ]
    var b = ["N","O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    var array = Array.from(str)
      var letterFound = []
    
    for(let i=0; i < array.length; i++){
      if(a.indexOf(array[i]) >= 0){
          letterFound.push(b[a.indexOf(array[i])])
      } else if (b.indexOf(array[i]) >= 0){
        letterFound.push(a[b.indexOf(array[i])])
      } else{
        letterFound.push(array[i])
      }
    }
    return letterFound.join("")
  }
  
  
  rot13("SERR PBQR PNZC");