#pragma strict

public var killWhat:GameObject;
public var moveWhat:GameObject;

function Update () {

	
	iTween.MoveBy(moveWhat,{
		"x":2,
		"time":2,
		"delay":0,
		"easetype": "easeInOutQuad",
		"onupdate": "myUpdateFunction",
		"looptype": "pingPong"
	});	
}

function OnTriggerEnter2D(other: Collider2D) {
	
	if (other.gameObject.tag == "Player") {
		if (other.gameObject.rigidbody2D.velocity.y < -1) {
			Destroy(killWhat, 0);
		}
	}
}
