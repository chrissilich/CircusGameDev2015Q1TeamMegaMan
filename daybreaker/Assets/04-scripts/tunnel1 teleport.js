#pragma strict

public var teleportTo: GameObject;

function Start () {

}

function Update () {

}



function OnTriggerEnter2D(other: Collider2D) {
	Debug.Log("collision");
	if (other.gameObject.tag == "Player") {
		Debug.Log("collision with player");
		
		Debug.Log(other.gameObject.rigidbody2D.velocity.y);
		if (other.gameObject.rigidbody2D.velocity.y < -3) {
			other.gameObject.transform.position = teleportTo.transform.position;
		}

			
		//Application.LoadLevel("level 1");
	}
}