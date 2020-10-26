
rdoChoice.onclick=function(){
  let userChoice = $("input[name=rdoChoice]:checked").prop("value")
  lblPersonality.value = `I would agree that you are a ${userChoice} person too!`
}


btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}
