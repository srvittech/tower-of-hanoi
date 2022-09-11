var wi1 = "280"
var wi2 = "200"
var wi3 = "120"
var wi4 = "60"
var table = $("table tr")
var top_frog = 0
var row = 0
var col = 0
// loading background at first
function change_color_once(){
    $("#pic1").css("background-color",'rgba(122, 7, 0, 0)')
    $("#pic5").css("background-color",'rgba(122, 7, 1, 0)')
    $("#pic9").css("background-color",'rgba(122, 7, 2, 0)')
    $("#pic13").css("background-color",'rgba(122, 7, 3, 0)')
}
change_color_once()

// fixing restart
$("button").click(function(){
    console.log("clckk");
    window.location = "index.html"
    });


// detecting the lower stack available
function lower_stack_available(col){
    for (let index = 3; index >= 0; index--) {
        if (report_bg_color(index,col) === 'rgba(0, 0, 0, 0)' )
        {
            return index
        }
    }
}
// checking which frog is available at the top
function top_frog__available(col){
   
    for (let index = 0; index <= 3; index++) {
        console.log(report_bg_color(index,col) );
        if (report_bg_color(index,col) != 'rgba(0, 0, 0, 0)' )
        {
            return [index,report_bg_color(index,col)]
        }
    }
    return "not"
}
// checking background color white available
function report_bg_color(row,col){
    return table.eq(row).find("td").eq(col).find("img").css("background-color")
  }

//   change the background to white on click 
function background_white(row,col) {  
        table.eq(row).find("td").eq(col).find("img").attr("src","")
        table.eq(row).find("td").eq(col).find("img").attr("height", "0")
        table.eq(row).find("td").eq(col).find("img").attr("width", "0")
        table.eq(row).find("td").eq(col).find("img").css("background-color",'rgba(0, 0, 0, 0)')
}
// TRANSFERING THE FROG FROM ONE COLUM TO OTHER
function transfer(row,col) {
    if(top_frog[1]==='rgba(122, 7, 0, 0)')
    {
      
    table.eq(row).find("td").eq(col).find("img").attr("src","frog.jpg")
    table.eq(row).find("td").eq(col).find("img").attr("height", "120")
    table.eq(row).find("td").eq(col).find("img").attr("width", wi4)
    table.eq(row).find("td").eq(col).find("img").css("background-color",'rgba(122, 7, 0, 0)')
    }
    else if(top_frog[1]==='rgba(122, 7, 1, 0)')
    {
      
    table.eq(row).find("td").eq(col).find("img").attr("src","frog.jpg")
    table.eq(row).find("td").eq(col).find("img").attr("height", "120")
    table.eq(row).find("td").eq(col).find("img").attr("width", wi3)
    table.eq(row).find("td").eq(col).find("img").css("background-color",'rgba(122, 7, 1, 0)')

    }
    else if(top_frog[1]==='rgba(122, 7, 2, 0)')
    {
  
    table.eq(row).find("td").eq(col).find("img").attr("src","frog.jpg")
    table.eq(row).find("td").eq(col).find("img").attr("height", "120")
    table.eq(row).find("td").eq(col).find("img").attr("width", wi2)
    table.eq(row).find("td").eq(col).find("img").css("background-color",'rgba(122, 7, 2, 0)')

    }
    else if(top_frog[1]==='rgba(122, 7, 3, 0)')
    {
      
    table.eq(row).find("td").eq(col).find("img").attr("src","frog.jpg")
    table.eq(row).find("td").eq(col).find("img").attr("height", "120")
    table.eq(row).find("td").eq(col).find("img").attr("width", wi1)
    table.eq(row).find("td").eq(col).find("img").css("background-color",'rgba(122, 7, 3, 0)')

    }
}


// detecting the column
// making a alternate key 
var key = 1
$(".frogs td").on("click",function(){
    
    
    
    if(key===1)
    {
        col = $(this).closest("td").index()
        top_frog = top_frog__available(col)
        console.log("top ",top_frog);
        row = top_frog[0]
        if (top_frog === "not")
        {
        $("h2").text("No Frog Availabe - Choose Correct Column To Grab")
        $("h2").css("background-color","red")
        $("h2").css("color","white")
        key *= -1
        }
        else
        {
            $("h2").text("Frog Grabbed -Now Assign the Frog")
            $("h2").css("background-color","orange")
            $("h2").css("color","white")
        }
        
    }
    else
    {
        $("h2").text("Frog Assigned -Now Grab the Frog Again")
        $("h2").css("background-color","green")
        background_white(row,col)
        col = $(this).closest("td").index()
        row = lower_stack_available(col)
        transfer(row,col)
    }
    key *= -1
})
