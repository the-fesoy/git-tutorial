<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="calculator.css">
  <title>Simple Calculator</title>
</head>
<body>
<div>
<div class="input">
<input type="text" id="display" readonly>
<button onclick="calculate()">=</button>
</div>
<div>
<button onclick="add('1')">
1
</button>
<button  onclick="add('2')">
2
</button>
<button  onclick="add('3')">
3
</button>
<button  onclick="clear()">
C
</button>
</div>
<div>
<button  onclick="add('4')">
4
</button>
<button  onclick="add('5')">
5
</button>
<button  onclick="add('6')">
6
</button>
<button  onclick="add('+')">
+
</button>

</div>
<div>
<button  onclick="add('7')">
7
</button>
<button  onclick="add('8')">
8
</button>
<button  onclick="add('9')">
9
</button>
<button  onclick="add('-')">
-
</button>
</div>
<div>
<button  onclick="add('0')">
0
</button>
<button  onclick="add('%')">
%
</button>
<button  onclick="add('*')">
*
</button>
<button  onclick="add('/')">
/
</button>
</div>
</div>
<script>
let display = document.getElementById('display');
Function clear(){
display.value = ''; 
}
function add(value) {
display.value += value;
}
function calculate(){
try {
 display.value = eval(display.value);
} catch(error){
display.value = 'error';
}
}
</script>
</body>
</html>