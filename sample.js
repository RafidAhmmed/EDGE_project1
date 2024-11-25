// alert("Hello")

function test(){
    document.getElementById("test").style.color = "red";
    document.getElementById("test").innerHTML = "Hello World";
    document.getElementById("test").appendChild("Test");
}

function test2(){
    const fn=parseInt(document.getElementById("first_number").value);
    const sn=parseInt(document.getElementById("second_number").value);
    let total=fn+sn;
    total=total*2;
    const person = {
        first_name: "tor",
        last_name: "heda",
        age: 30,
        city: "New York",
        ft: function(){
            return this.first_name+" "+this.last_name;
        }
    };
    const array_object=[3,4,5,6,7,8,9];
    // document.getElementById("test2").appendChild("Ans= "+total);
    // document.getElementById("output").innerHTML=person.first_name+" "+person.last_name+" "+person.age+" "+person.city+" "+array_object[2];
    person.first_name="John";
    // document.getElementById("output").innerHTML=person.first_name+" "+person.last_name+" "+person.age+" "+person.city+" "+array_object[2];
    const new_person= {...person};
    person.first_name="Jane";
    document.getElementById("output").innerHTML=new_person.first_name+" "+new_person.last_name+" "+new_person.age+" ";
    const new_array=[...array_object];
    array_object[5]=10;
    document.getElementById("output").innerHTML=new_array[5];
    const value=person.first_name=="John" ? "Yes" : "No";
    let val="blabla";
    const ab=5;
    document.getElementById("output").innerHTML=typeof ab;
}