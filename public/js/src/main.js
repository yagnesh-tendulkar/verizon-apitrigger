$(document).ready(function(){
 //alert("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  $('#cta-alert').on('click', function(){

    console.log("asudhsagfou",$('#cta-input').val())

    var laddaInstance = Ladda.create(document.querySelector('#cta-alert'));
    laddaInstance.start();
    // alert("$('#cta-input').val()",$('#cta-input1').val());
    sendAlert($('#cta-input').val(),$('#cta-input1').val(),laddaInstance );
  });
  $('#cta-feedback').on('click', function(){
    var laddaInstance = Ladda.create(document.querySelector('#cta-feedback'));
    laddaInstance.start();
    askFeedback($('#cta-input').val(),$('#cta-input1').val(),laddaInstance );
  });

  $('#cta-remainder').on('click', function(){
    var laddaInstance = Ladda.create(document.querySelector('#cta-remainder'));
    laddaInstance.start();
    sendremainder($('#cta-input').val(),$('#cta-input1').val(),laddaInstance );
  });

});


function sendremainder(msg, num,laddaInstance){
  $.post("https://verizon-backend.herokuapp.com/remainder", { "message": msg,"number":num }).done(function (data) {
    console.log("Data Loaded: " + data);
    laddaInstance.stop();
    $('#cta-input').val(null)
    $('#cta-input1').val(null)
});

}
function sendAlert(msg, num,laddaInstance){
  $.post("https://verizon-backend.herokuapp.com/alert", { "message": msg,"number":num }).done(function (data) {
    console.log("Data Loaded: " + data);
    laddaInstance.stop();
    $('#cta-input').val(null)
    $('#cta-input1').val(null)
});

 //alert("inside sendalert");
  // var generatedURL = 
//   $.ajax({
//     url: "https://telco-bot.eu-gb.mybluemix.net/proactiveMessages?message=" + query,
//     success: function(result){
//       //alert("success",result);
//       $('#cta-input').val('');
//     },
//     complete: function(){
//       laddaInstance.stop();
//     }
//   })
};


function askFeedback(msg,num,laddaInstance){
  $.post("https://verizon-backend.herokuapp.com/feedback", { "message": msg,"number":num }).done(function (data) {
    console.log("Data Loaded: " + data);
    laddaInstance.stop();
    $('#cta-input').val(null)
    $('#cta-input1').val(null)
});
 
 
//   $.ajax({
//     url: "https://telco-bot.eu-gb.mybluemix.net/feedback",
//     success: function(result){
//       laddaInstance.stop();
//     },
//     complete: function(){
//       laddaInstance.stop();
//     }
//   })
};
