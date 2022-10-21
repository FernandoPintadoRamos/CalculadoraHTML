actual = 0.0;
sign = "";
num_to = 0.0;

function setNumber(valor)   
{   
    if(document.getElementById("actual_number").innerHTML == "0"){
        document.getElementById("actual_number").innerHTML = valor;
    }else{
        valor_actual = document.getElementById("actual_number").innerHTML
        document.getElementById("actual_number").innerHTML = valor_actual +  valor;
    }
}

function reset()
{
    actual = 0.0;
    sign = "";
    num_to = 0.0; 
    document.getElementById("actual_number").innerHTML = "0";
}

function del()
{
    actual_value = document.getElementById("actual_number").innerHTML;
    actual_value = actual_value.substring(0, actual_value.length -1);
    document.getElementById("actual_number").innerHTML = actual_value;

    if(actual_value.length == 1 || actual_value.length == 0)
    {
        document.getElementById("actual_number").innerHTML = "0";
    }
}

function calc(value)
{   
    sign = value;
    actual = parseFloat(document.getElementById("actual_number").innerHTML);
    document.getElementById("actual_number").innerHTML = "0";
    
}

function result()
{
    res = 0;
    num_to = parseFloat(document.getElementById("actual_number").innerHTML);

    if(sign == "/")
    {
       res = actual / num_to;
       document.getElementById("actual_number").innerHTML = String(res);
    }

    if(sign == "*")
    {
       res = actual * num_to;
       document.getElementById("actual_number").innerHTML = String(res);
    }

    if(sign == "-")
    {
       res = actual - num_to;
       document.getElementById("actual_number").innerHTML = String(res);
    }

    if(sign == "+")
    {
       res = actual + num_to;
       document.getElementById("actual_number").innerHTML = String(res);
    }

    sign = "";
}