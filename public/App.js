var input = document.getElementById('input')
function getnum(num){
  input.value += num
}
function getequal(num2){
  input.value = eval(input.value)
}
function getcleaR(){
  input.value = ""
}
