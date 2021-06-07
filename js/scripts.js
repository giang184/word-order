$(document).ready(function() {
  $("button#click").click(function() {
    event.preventDefault();
    const sent1 = $("#sentence").val();
    let array = sent1.split(' ');


    array.sort();
    console.log(array);
 
    let temp=array[0];
    let count = 0;

    let newArray = [];
  
    array.forEach(function(word) {
      if(word === temp)
      {
        count ++;
      }
      else{
        //$("ul").prepend("<li>" + count + ", " + temp + "</li>");
        newArray.push(count + ", " + temp);
        count = 1;
        temp = word;
      }
    });
    //$("ul").prepend("<li>" + count + ", " + temp + "</li>");
    newArray.push(count + ", " + temp);
    newArray.sort();


    newArray.forEach(function(word){
      $("ul").prepend("<li>" + word.substring(3) + ", " + word.substring(0,1)+"</li>");
    })

    $("#hidden").show();
    $("#click").hide();

  });
});