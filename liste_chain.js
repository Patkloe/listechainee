// version 1
/** Iterative **/
class Node{
 constructor(element){
  this.element = element;
  this.next = null;
 }
}
class Linkedlist{
 constructor(){
  this.head = null;
  }
  add(element){
   var newnode = new Node(element);
   var res = null;
   var curres = res;
   var navigate ;
   if(this.head === null){
      this.head = newnode;
      res = newnode;  // on ajoute au sommet la tete
      console.log("Head of the list : " + " " + this.head.element);
   }
   else{
     navigate = this.head;
     while(navigate.next){
          navigate = navigate.next;
     }
          navigate.next = newnode;
          
    if(res !== null) {
                curres = res;
                curres.next = newnode; 
                newnode.next = null;
     }  
     else {   
 	         res = newnode;   // chainage
     }
   }
   return res;
  } // end add
}// end class Linkedlist
var test = new Linkedlist();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
