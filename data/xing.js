//document.body.innerHTML = "XING-Test" + document.body.innerHTML
var tabs = require("sdk/tabs");

tabs.on("ready", function(tab){
  contentScript: 'document.body.innerHTML = "XING-Test" + document.body.innerHTML';
)};

/*
var workExperienceList = document.getElementById("education");
var experienceStation = workExperienceList.getElementsByTagName("a");
//helperFunctionsOutput(workExpirienceList[0].innerHTML, 1);

for (var num = 0; num < experienceStation.length; num++) {
  htmlBefore = experienceStation[num].outerHTML
  experienceStation[num].outerHTML = htmlBefore + ' <img src="http://png-2.findicons.com/files/icons/1156/fugue/16/tick_circle_frame.png" alt="Checked">'
}
*/
