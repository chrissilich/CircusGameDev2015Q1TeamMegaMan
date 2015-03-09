#pragma strict

public var teleportTo: GameObject;

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "Player") {
		if (other.gameObject.rigidbody2D.velocity.y < -3) {
			other.gameObject.transform.position.x = teleportTo.transform.position.x;
			other.gameObject.transform.position.y = teleportTo.transform.position.y;
		}
	}
}