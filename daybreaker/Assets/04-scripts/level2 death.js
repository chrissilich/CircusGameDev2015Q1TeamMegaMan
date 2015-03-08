#pragma strict

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "Player") {			
		Application.LoadLevel("Level 2");
	}
} 