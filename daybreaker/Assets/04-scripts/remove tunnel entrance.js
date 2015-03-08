#pragma strict

public var destroyWhat:GameObject;

function OnTriggerEnter2D(other: Collider2D) {
	
	if (other.gameObject.tag == "Player") {
		if (other.gameObject.rigidbody2D.velocity.y < -4) {
			Destroy(destroyWhat, 0.5);
		}
	}
}
