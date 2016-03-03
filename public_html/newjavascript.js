

function init()
{
    // setup javascripts from page load..
    
   

    var listofstudents = {studentid:"1", studentname:"smthing", studentage:"22", string:"mystring",isstudent: true };


   var abool = true;
   var string = "somt";
   var number = 123;
   
   var array = [listofstudents, abool, string, number];
    
  console.log(array);
  
  assignment3();
  assignment4();
  
  max("a","as","asdfgh","sdfs");
  getcurrentday();  
  animalkingdom();
    
}


function assignment3()
{
    for (var i = 0; i < 3; i++) {
    var studentobject = {studentid: i, studentname: "student" + i}
    var getstringfromstudentobject = tostring(studentobject);
    console.log(getstringfromstudentobject);
    }
}

function tostring(studentobject)
{
 var singlestring = "student ID : " + studentobject.studentid + " Student Name: " + studentobject.studentname; 
 return singlestring;
}


function assignment4()
{
  // name gender(boolean) age create array...
  var students = [];
    
    for (var i = 0; i < 3; i++) {
    var studentobject = {age: 16+i, studentname: "student" + i, isfemale: true}
    students.push(studentobject);
    }

    var studentobject = {age: 32, studentname: "some guy", isfemale: false}
    students.push(studentobject);
    var studentobject = {age: 30, studentname: "some grill", isfemale: true}
    students.push(studentobject);
        var studentobject = {age: 45, studentname: "failurestudent32", isfemale: false}
    students.push(studentobject);
    
    
    // all female studentsto console....
    for (var i = 0; i < students.length; i++) {
        var studentobject = students[i];
        if(studentobject.isfemale === true)
       console.log(students[i]); 
    }
    
    // youngest student to console...
    var age = 23928328392839829382;  // no way u can be older O.o
    var name;
        for (var i = 0; i < students.length; i++) {
        var studentobject = students[i];
        if(studentobject.age < age)
        {
        age = studentobject.age;
        name = studentobject.studentname;
        }
        else
        {
            
        }
    }
    console.log("Student " + name + ", is youngest at the age of, " + age + " years.");
    
    
    var newstudentarray = deletefromarray(students, studentobject);
    
    
    console.log(newstudentarray);
    
    // assignment 6....



    for (var i = 0; i < newstudentarray.length; i++) {
      var studentobject = students[i]; // convert something from the array into a student object..
     if(studentobject.age > 29)
     {
      console.log(studentobject.studentname + " is older than 30.. (" + studentobject.age + ")");   
     }
    }
    
}





function deletefromarray(students, student)
{
    for (var i = 0; i < students.length; i++) {
     if(students[i] === student)   
     {
      students.splice(i, 1);   
     }
    }
    return students;
}


function max()
{
    // was not told to be tested but is tested anyway..
    var size = 0;
   for (var i = 0; i < arguments.length; i++) {
       if(size < arguments[i].length)
       {
    size = arguments[i].length;
       }
       else
       {
           
       }
  }
  console.log("the largest argument is " + size + " in length.");
}

function getcurrentday()
{
    
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// date gives 1-7 format.. so you can tell what day it is (1 is sunday).
  console.log("It is " + days[d.getDay()] + " Today."); 
    
    
}


function animalkingdom()
{
    var animals = [];
    var animal = new addanimal(10, "Felidae", true,"1 meters","2 meter");
    var animal2 = new addanimal(11,"Elephantidae",false, "4 meters","2.5 meter")
    var animal3 = new addanimal(23,"Cetaceans",true, "20 meters", "30 meter")

    animals.push(animal);
    animals.push(animal2);
    animals.push(animal3);
    
    
    for (var i = 0; i < animals.length; i++) {
      console.log(animals[i].valueOf());  
    }
    
    // assignment 10
    
    console.log(animals.filter(notmammals));
    
    console.log(animals.map(getnamesofanimals));
    
}
function addanimal(age, species, isMammal, height, width) {
    this.age = age;
    this.species = species;
    this.isMammal = isMammal;
    this.height = height;
    this.width = width;
}

function notmammals(animal)
{
  return animal.isMammal === true;   
}


function getnamesofanimals(animal)
{
  return animal.species.toString();  // have no name so using species instead ... 
}