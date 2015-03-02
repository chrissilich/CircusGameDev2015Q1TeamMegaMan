#pragma strict

public var teleportTo: GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "Player") {
		other.gameObject.rigidbody2D.velocity.x = 0;
		other.gameObject.rigidbody2D.velocity.y = 0;
		other.gameObject.transform.position = teleportTo.transform.position;	
	}
}

