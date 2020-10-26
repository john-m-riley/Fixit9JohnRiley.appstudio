var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i <= exercises.length -1; i++)
    selExercises.addItem(exercises[i])
  for (i = 0; i < coreExercises.length - 1; i++) 
  selExercises.addItem(coreExercises[i])
}

selExercises.onfocusout=function(s){
  if (typeof(s) == "object") {
      return                    
    } else {
        selExercises.value = s
        selectChoices.push(s) 
  }
}

btnSubmit.onclick = function() {
  if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
    lblOutput.hidden = false
    lblOutput.textContent = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
  } else {
    lblOutput.hidden = false
    lblOutput.textContent = "You did not pick the two core exercises"
  }
}

btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
