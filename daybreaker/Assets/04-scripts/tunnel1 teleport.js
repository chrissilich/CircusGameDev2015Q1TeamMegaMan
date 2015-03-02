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
		other.gameObject.rigidbody2D.velocity.x = 0;
		other.gameObject.rigidbody2D.velocity.y = 0;
		other.gameObject.transform.position = teleportTo.transform.position;	
		//Application.LoadLevel("level 1");
	}
}