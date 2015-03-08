#pragma strict

function Start () {

}

 var isPause = false;
 var MainMenu : Rect = Rect(10, 10, 200, 200);
  
 function Update () {
  if( Input.GetKeyDown(KeyCode.P))
    {
       isPause = !isPause;
       if(isPause)
          Time.timeScale = 0;
       else
          Time.timeScale = 1;
    }
 }
  
 function OnGUI()
 {
    if(isPause)
        GUI.Window(0, MainMenu, TheMainMenu, "Pause Menu");
 }
 
 function TheMainMenu () {
 if(GUILayout.Button("Continue")){
 	Time.timeScale = 1;
 }
 if(GUILayout.Button("Restart")){
 	Application.LoadLevel("Level 1");
 Time.timeScale = 1;
 }
 if(GUILayout.Button("Quit")){
 Application.Quit();
 }
 }