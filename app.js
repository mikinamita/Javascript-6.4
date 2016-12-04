//Assignment 6.4			
var employee=[]
 employee[0]={name:"Namita", age:"30", salary:"5000",
			address:{city:"Sundargarh",state:"Orissa",pin:"770072"}}; 
 employee[1]={name:"Susmita", age:"31", salary:"6000",
			address:{city:"South Delhi",state:"Delhi",pin:"110062"}}; 
 employee[2]={name:"Mili", age:"32", salary:"5000",
			address:{city:"Chandigarh",state:"Punjab",pin:"220022"}}; 
 employee[3]={name:"Anita", age:"33", salary:"8000",
			address:{city:"Gurgaon",state:"Haryana",pin:"770072"}}; 
 employee[4]={name:"Banita", age:"34", salary:"7000",
			address:{city:"Hyderabad",state:"AP",pin:"710072"}}; 
			
var i;

for(i=1; i<=5;i++)
{
console.log("--------Detail of Employee No "+i+"---------" );
console.log("Employee Name " +employee[i].name);
console.log("Employee Age " +employee[i].age);
console.log("Employee Salary " +employee[i].salary);
console.log("Employee City " +employee[i].address.city);
console.log("Employee State " +employee[i].address.state);
console.log("Employee PinCode " +employee[i].address.pin);

}
