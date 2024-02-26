function calculator(operation) { 
    console.log("start calculator") 
    var first = parseInt(document.getElementById("first").value,10)
    var second = parseInt(document.getElementById("second").value,10)
    var resultTag = document.getElementById("result")
    var result = 0
    if( operation == 'add') {
        console.log("add block")
        result = first + second
        resultTag.innerHTML = resultTag.innerHTML + " <br> <p style='font-size:20px;padding:0px;height:10px;'> addition of "+ first + " and " + second + " is " + result
    } else if ( operation == 'sub') {
        console.log("sub block")
        result = first - second
        resultTag.innerHTML = resultTag.innerHTML + " <br> <p style='font-size:20px;height:20px;'> subtraction of "+ first + " and " + second + " is " + result
    } else if ( operation == 'mul') {
        console.log("mul block")
        result = first * second
        resultTag.innerHTML = resultTag.innerHTML + " <br> <p style='font-size:20px;height:20px;'> multiplicate of "+ first + " and " + second + " is " + result
    } else {
        console.log("else block")
        result = first/second
        resultTag.innerHTML = resultTag.innerHTML + " <br> <p style='font-size:20px;height:20px;'> division of "+ first + " and " + second + " is " + result
    }
    // document.getElementById("result").textContent ="result is " + result

    
}

function validate() {
    var email = document.getElementById('email').value
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var r = 20
    var x =20
    if(email == '') {
        document.getElementById("result").textContent ="Please enter email"
    } else {
        if (emailRegex.test(email)) {
                document.getElementById("result").textContent = "Email is valid";
            } else {
                document.getElementById("result").textContent = "Invalid Email";
            }
    }

}

function mover() {
    var image = document.getElementById("image")
    image.style.width = "600px"
    image.style.height = "600px"
    image.style.opacity = '1.0'
}
 function mout() {
    var image = document.getElementById("image")
    image.style.width = "300px"
    image.style.height = "300px"
    image.style.opacity = '0.5'
 }

 function onLoad() {
    var technologies = [ "HTML","Java", "Javascript", "SQL", "C", "C++", "Github", "Jenkins", "PYthon","Spring","Flask"]
    document.write("<h2>Technologies</h2>")
    document.write("<ol>")
    technologies.map((technology) => {
        console.log("technology is ", technology)
        document.writeln("<li>"+ technology + "</li>")
    })
    document.write("</ol>")
 } 

 function renderImagesWithText() {

    var images = [
        {
            url: 'https://signatureeventsdecor.com/Images/decor_2.jpg',
            text: 'text 1',
            website: 'https://www.facebook.com',
            name: 'facebook'
        }, 
        {
            url: 'https://c.ndtvimg.com/2021-11/o66r0bb8_ms-dhoni-ipl_625x300_20_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
            text: 'text 2',
            website: 'https://www.google.com',
            name: 'google'
        },
        {
            url: 'https://signatureeventsdecor.com/Images/decor_2.jpg',
            text: 'text 3',
            website: 'https://www.youtube.com',
            name: 'youtube'
        },
        {
            url: 'https://signatureeventsdecor.com/Images/decor_2.jpg',
            text: 'text 6',
            website: 'https://www.myntra.com',
            name: 'myntra'
        }, 
        {
            url: 'https://signatureeventsdecor.com/Images/decor_2.jpg',
            text: 'text 5',
            website: 'https://www.amazon.com',
            name: 'amazon'
        }
    ]

    document.write("<h2> Images with Text </h2>")

    document.write("<div style='display:flex;justify-content:space-around;'>")
    images.map((image) => {
        document.write("<div>")
        document.write("<img onmouseover='"+mover()+"'id='image_text' src= "+ image.url +" width=300 height=300 />")
        document.write("<div style='display:flex;justify-content:space-between;align-items:center; height:200px;'>")
        document.write("<p style='text-align:center;font-size:30px'>"+ image.text +"</p>")
        document.write("<a id='anchortag' href='" +image.website+"'/>"+image.name+" </a>")
        document.write("</div>")
        document.write("</div>")
    })
    document.write("</div>")

 }


 function jsonExample() {

    // var employee1 = {
    //     "id": 1,
    //     "firstName" : "john",
    //     "lastName" : "kane",
    //     'dob': '1998-01-03',
    //     'desgination': 'Developer',
    //     "profile": ""
    // }

    // var employee2 = {
    //     "id": 2,
    //     "firstName" : "ksd",
    //     "lastName" : "soksok",
    //     'dob': '1988-01-03',
    // }

    // var employees = [
    //     employee1,
    //     employee2
    // ]

    // employees.map((employee) => {
    //     document.write("<h2>Employee detail</h2>")
    //     document.write("<h4>First Name: "+ employee.firstName+"</h4>")
    //     if(employee.desgination != null)
    //         document.write("<b>Designation: "+ employee.desgination+"</b>")
    //     else 
    //     document.write("Designation is unavailable ")
    //     document.write("<a id='anchortag' href='employee.html?id="+employee.id+"'/> More Info </a>")
    //     document.write("<br>")
    // })

    // for (let key in employee1) {
    //     document.write("<h1>xyz: "+ employee1[key])
    // }


    var orders = [
        {
            "id": 1,
            "placedDate": "date",
            "cost": "100$",
            "orderItems": [
                {
                    id: "1",
                    name: "mno",
                    category: "kok",
                    quantity: "okok"
                },
                {
                    id: "2",
                    name: "wokk",
                    category: "gygy",
                    quantity: "kokoknjnj"   
                }
            ]
        },
        {
            "id": 2,
            "placedDate": "date",
            "cost": "300$",
            "orderItems": [
                {
                    id: "12",
                    name: "mokokno",
                    category: "kkokok",
                    quantity: "okknnukok"
                },
                {
                    id: "2",
                    name: "woygygkk",
                    category: "gyg",
                    quantity: "kokoknjnj"   
                }
            ]
        }
    ]

    orders.map((order)=> {
        document.write("<h1>Order id"+order.id+"</h1>")
        document.write("<h1>Cost: "+order.cost+"</h1>")
        document.write("<h1>Order Items</h1>")
        var items = order.orderItems
        items.map((item)=> {
            document.write("<h3>Item id"+item.id+"</h3>")
            document.write("<h3>Item Quantity: "+item.quantity+"</h3>") 
            document.write("<h3>Item category"+item.category+"</h3>")
        })

    })


    var students = [
        {
            id: 1,
            firstName: "",
            lastName: "",
            courses: [
                {
                    id: "",
                    name: "",
                    professorNmae: ""
                },
                {
                    id: "",
                    name: "",
                    professorNmae: ""
                },
            ]
        }
    ]

    var laptops = [
        {
            name: "",
            color: "",
            size: "",
            ram: "",
            model: "",
            price: ""
        },
        {

        },
        {

        }
    ]

    var gallery = [
        {
            id: "",
            imageUrl: "",
            type: "",
            venue: "",
            title: ""
        }
    ]

    gallery.map((item)=> {
        document.write("<a href='/galleryImages/'+"+item+"></a>")
    })


 }

