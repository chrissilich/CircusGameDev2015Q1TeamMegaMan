#pragma strict



function Start () {
	Debug.Log("death.js");
}

function Update () {

}



function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log("collision2");
	if (other.gameObject.tag == "Player") {
		Debug.Log("collision with player2");

		
			
		Application.LoadLevel("Level 1");
	}
} 