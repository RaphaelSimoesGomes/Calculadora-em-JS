function veto(){
    document.getElementById('result_text').innerHTML = "";
}
function insert(num){
    let numerical = document.getElementById('result_text').innerHTML;
    document.getElementById('result_text').innerHTML= numerical + num;
}
function result(){
    const final = document.getElementById('result_text').innerHTML;
    document.getElementById('result_text').innerHTML = eval(final);
}